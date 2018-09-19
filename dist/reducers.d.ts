export declare enum BinaryHeapType {
    MIN = "min",
    MAX = "max"
}
export declare type IMapWeight<T> = (data: T) => number;
export declare type IBinaryHeap<T> = T[];
export declare const push: (mapWeights: any, type: any) => (currentState: any[], a: any) => any[];
export declare const pop: (mapWeights: any, type: any) => (currentState: any[], a: any) => any[];
export declare const remove: (mapWeights: any, type: any) => (currentState: any[], a: any) => any[];
export declare const merge: (mapWeights: any, type: any) => (currentState: any[], a: any) => any[];
export declare const heapify: (mapWeights: any, type: any) => (currentState: any[], a: any) => any[];
export declare const clear: () => any[];
export declare const reducerMap: (mapWeights: IMapWeight<any>, type: BinaryHeapType) => Map<any, any>;
