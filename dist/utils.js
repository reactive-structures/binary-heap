"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducers_1 = require("./reducers");
function _parent(n) {
    return Math.floor((n + 1) / 2) - 1;
}
exports._parent = _parent;
function _left(n) {
    return (n + 1) * 2;
}
exports._left = _left;
function _right(n) {
    return _left(n) - 1;
}
exports._right = _right;
function _bubbleUp(n, mapWeights, type) {
    var element = this[n];
    var score = mapWeights(element);
    while (n > 0) {
        var parentN = _parent(n);
        var parent_1 = this[parentN];
        if ((type === reducers_1.BinaryHeapType.MIN && score >= mapWeights(parent_1)) ||
            (type === reducers_1.BinaryHeapType.MAX && score <= mapWeights(parent_1))) {
            break;
        }
        this[parentN] = element;
        this[n] = parent_1;
        n = parentN;
    }
}
exports._bubbleUp = _bubbleUp;
function _sinkDown(n, mapWeights, type) {
    var length = this.length;
    var element = this[n];
    var elemScore = mapWeights(element);
    while (true) {
        var leftChild = _left(n);
        var rightChild = _right(n);
        var swap = null;
        var child1Score = void 0;
        if (rightChild < length) {
            var child1 = this[rightChild];
            child1Score = mapWeights(child1);
            if (type === reducers_1.BinaryHeapType.MIN && child1Score < elemScore) {
                swap = rightChild;
            }
            else if (type === reducers_1.BinaryHeapType.MAX && child1Score > elemScore) {
                swap = rightChild;
            }
        }
        if (leftChild < length) {
            var child2 = this[leftChild], child2Score = mapWeights(child2);
            if (type === reducers_1.BinaryHeapType.MIN &&
                child2Score < (swap === null ? elemScore : child1Score)) {
                swap = leftChild;
            }
            else if (type === reducers_1.BinaryHeapType.MAX &&
                child2Score > (swap === null ? elemScore : child1Score)) {
                swap = leftChild;
            }
        }
        if (swap === null)
            break;
        this[n] = this[swap];
        this[swap] = element;
        n = swap;
    }
}
exports._sinkDown = _sinkDown;
function _heapify(mapWeights, type) {
    var bubble = _bubbleUp.bind(this);
    var sink = _sinkDown.bind(this);
    var l = this.length;
    for (var rootIndex = _parent(l); rootIndex >= 0; rootIndex--) {
        bubble(rootIndex, mapWeights, type);
        sink(rootIndex, mapWeights, type);
    }
}
exports._heapify = _heapify;
