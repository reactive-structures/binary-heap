import { BinaryHeapType, IMapWeight } from './reducers';
export declare function _parent(n: any): number;
export declare function _left(n: any): number;
export declare function _right(n: any): number;
export declare function _bubbleUp(n: any, mapWeights: IMapWeight<any>, type: BinaryHeapType): void;
export declare function _sinkDown(n: any, mapWeights: IMapWeight<any>, type: BinaryHeapType): void;
export declare function _heapify(mapWeights: IMapWeight<any>, type: BinaryHeapType): void;
