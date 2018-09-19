import { Store } from '@reactive-redux/store';
import { IBinaryHeap, BinaryHeapType, IMapWeight } from './reducers';
export { BinaryHeapType } from './reducers';
export declare class BinaryHeap<T> extends Store<IBinaryHeap<T>> {
    opts: {
        initialArray?: T[];
        mapWeights?: IMapWeight<T>;
        type?: BinaryHeapType;
        heapifyOnInit?: boolean;
    };
    static readonly INIT_OPTS: {
        initialArray: any[];
        mapWeights: (n: any) => any;
        type: BinaryHeapType;
        heapifyOnInit: boolean;
    };
    size$: import("rxjs/internal/Observable").Observable<number>;
    peek$: import("rxjs/internal/Observable").Observable<T>;
    constructor(opts?: {
        initialArray?: T[];
        mapWeights?: IMapWeight<T>;
        type?: BinaryHeapType;
        heapifyOnInit?: boolean;
    });
    push(value: T): void;
    pop(): void;
    remove(value: T): void;
    merge(heapToMerge: T[]): void;
    heapify(): void;
}
