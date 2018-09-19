import { Action } from '@reactive-redux/store';

export enum BinaryHeapActions {
  PUSH = '[Binary Heap] Push item',
  POP = '[Binary Heap] Pop item',
  REMOVE = '[Binary Heap] Remove item',
  MERGE = '[Binary Heap] Merge heap',
  HEAPIFY = '[Binary Heap] Heapify'
}

export class Push<T> implements Action {
  readonly type = BinaryHeapActions.PUSH;

  constructor(public payload: { value: T }) {}
}

export class Pop implements Action {
  readonly type = BinaryHeapActions.POP;
}

export class Remove<T> implements Action {
  readonly type = BinaryHeapActions.REMOVE;

  constructor(public payload: { value: T }) {}
}

export class Merge<T> implements Action {
  readonly type = BinaryHeapActions.MERGE;

  constructor(public payload: { heapToMerge: T[] }) {}
}

export class Heapify implements Action {
  readonly type = BinaryHeapActions.HEAPIFY;
}
