import { Store, select } from '@reactive-redux/store';
import {
  reducerMap,
  IBinaryHeap,
  BinaryHeapType,
  IMapWeight
} from './reducers';
import { Push, Pop, Remove, Merge, Heapify, Clear } from './actions';
import { filter } from 'rxjs/operators';

export { BinaryHeapType } from './reducers';

export class BinaryHeap<T> extends Store<IBinaryHeap<T>> {
  static readonly INIT_OPTS = {
    initialArray: [],
    mapWeights: n => n,
    type: BinaryHeapType.MIN,
    heapifyOnInit: false
  };

  public size$ = this.state$.pipe(select(state => state.length));
  public peek$ = this.state$.pipe(
    select(state => state[0]),
    filter(v => !!v)
  );

  constructor(
    public opts: {
      initialArray?: T[];
      mapWeights?: IMapWeight<T>;
      type?: BinaryHeapType;
      heapifyOnInit?: boolean;
    } = BinaryHeap.INIT_OPTS
  ) {
    super(
      opts.initialArray || BinaryHeap.INIT_OPTS.initialArray,
      reducerMap(
        opts.mapWeights || BinaryHeap.INIT_OPTS.mapWeights,
        opts.type || BinaryHeapType.MIN
      )
    );

    if (
      opts.initialArray &&
      (opts.heapifyOnInit || BinaryHeap.INIT_OPTS.heapifyOnInit)
    ) {
      this.heapify();
    }
  }

  push(value: T) {
    this.dispatch(new Push<T>({ value }));
  }

  pop() {
    this.dispatch(new Pop());
  }

  remove(value: T) {
    this.dispatch(new Remove({ value }));
  }

  clear() {
    this.dispatch(new Clear());
  }

  merge(heapToMerge: T[]) {
    this.dispatch(new Merge<T>({ heapToMerge }));
  }

  heapify() {
    this.dispatch(new Heapify());
  }
}
