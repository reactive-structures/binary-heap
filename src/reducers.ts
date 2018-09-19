import { setAutoFreeze, produce } from 'immer';
import {
  Push,
  BinaryHeapActions,
  Pop,
  Remove,
  Merge,
  Heapify
} from './actions';
import { _bubbleUp, _sinkDown, _parent, _heapify } from './utils';

export enum BinaryHeapType {
  MIN = 'min',
  MAX = 'max'
}

export type IMapWeight<T> = (data: T) => number;

export type IBinaryHeap<T> = T[];

setAutoFreeze(false);

export const push = (mapWeights, type) =>
  produce<IBinaryHeap<any>>((state: IBinaryHeap<any>, action: Push<any>) => {
    const bubble = _bubbleUp.bind(state);
    state.push(action.payload.value);
    bubble(state.length - 1, mapWeights, type);
  });

export const pop = (mapWeights, type) =>
  produce<IBinaryHeap<any>>((state: IBinaryHeap<any>, action: Pop) => {
    const sink = _sinkDown.bind(state);
    const end = state.pop();

    if (state.length > 0) {
      state[0] = end;
      sink(0, mapWeights, type);
    }
  });

export const remove = (mapWeights, type) =>
  produce<IBinaryHeap<any>>((state: IBinaryHeap<any>, action: Remove<any>) => {
    const bubble = _bubbleUp.bind(state);
    const sink = _sinkDown.bind(state);
    const length = state.length;

    for (let i = 0; i < length; i++) {
      if (JSON.stringify(state[i]) !== JSON.stringify(action.payload.value))
        continue;

      const end = state.pop();

      if (i === length - 1) break;

      state[i] = end;
      bubble(i, mapWeights, type);
      sink(i, mapWeights, type);
      break;
    }
  });

export const merge = (mapWeights, type) =>
  produce<IBinaryHeap<any>>((state: IBinaryHeap<any>, action: Merge<any>) => {
    const newState = [...state, ...action.payload.heapToMerge];
    _heapify(newState, mapWeights, type);
    return newState;
  });

export const heapify = (mapWeights, type) =>
  produce<IBinaryHeap<any>>((state: IBinaryHeap<any>, action: Heapify) => {
    _heapify(state, mapWeights, type);
  });

export const reducerMap = (mapWeights: IMapWeight<any>, type: BinaryHeapType) =>
  new Map<any>([
    [BinaryHeapActions.PUSH, push(mapWeights, type)],
    [BinaryHeapActions.POP, pop(mapWeights, type)],
    [BinaryHeapActions.REMOVE, remove(mapWeights, type)],
    [BinaryHeapActions.MERGE, merge(mapWeights, type)],
    [BinaryHeapActions.HEAPIFY, heapify(mapWeights, type)]
  ]);
