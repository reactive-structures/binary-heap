import { Store } from '@reactive-redux/store';
import { IBinaryHeap, BinaryHeapType, IMapWeight } from './reducers';
import { ActionUnion } from './actions';
import { Observable } from 'rxjs';
export declare class BinaryHeap<T> extends Store<IBinaryHeap<T>, ActionUnion<T>> {
    private opts;
    static readonly INIT_OPTS: {
        initialArray: any[];
        mapWeights: (n: any) => any;
        type: BinaryHeapType;
        heapifyOnInit: boolean;
    };
    state$: Observable<IBinaryHeap<T>>;
    size$: Observable<number>;
    peek$: Observable<T>;
    constructor(opts?: {
        initialArray?: T[];
        mapWeights?: IMapWeight<T>;
        type?: BinaryHeapType;
        heapifyOnInit?: boolean;
    });
    push(value: T): void;
    pop(): void;
    remove(value: T): void;
    clear(): void;
    merge(heapToMerge: T[]): void;
    heapify(): void;
}
