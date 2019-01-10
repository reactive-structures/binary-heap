import { Action } from '@reactive-redux/store';
export declare enum BinaryHeapActions {
    PUSH = "[Binary Heap] Push item",
    POP = "[Binary Heap] Pop item",
    REMOVE = "[Binary Heap] Remove item",
    MERGE = "[Binary Heap] Merge heap",
    HEAPIFY = "[Binary Heap] Heapify",
    CLEAR = "[Binary Heap] Clear heap"
}
export declare class Push<T> implements Action {
    payload: {
        value: T;
    };
    readonly type: BinaryHeapActions;
    constructor(payload: {
        value: T;
    });
}
export declare class Pop implements Action {
    readonly type: BinaryHeapActions;
}
export declare class Remove<T> implements Action {
    payload: {
        value: T;
    };
    readonly type: BinaryHeapActions;
    constructor(payload: {
        value: T;
    });
}
export declare class Merge<T> implements Action {
    payload: {
        heapToMerge: T[];
    };
    readonly type: BinaryHeapActions;
    constructor(payload: {
        heapToMerge: T[];
    });
}
export declare class Heapify implements Action {
    readonly type: BinaryHeapActions;
}
export declare class Clear implements Action {
    readonly type: BinaryHeapActions;
}
export declare type ActionUnion<T> = Push<T> | Pop | Remove<T> | Merge<T> | Heapify | Clear;
