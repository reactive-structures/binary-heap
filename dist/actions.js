"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryHeapActions;
(function (BinaryHeapActions) {
    BinaryHeapActions["PUSH"] = "[Binary Heap] Push item";
    BinaryHeapActions["POP"] = "[Binary Heap] Pop item";
    BinaryHeapActions["REMOVE"] = "[Binary Heap] Remove item";
    BinaryHeapActions["MERGE"] = "[Binary Heap] Merge heap";
    BinaryHeapActions["HEAPIFY"] = "[Binary Heap] Heapify";
    BinaryHeapActions["CLEAR"] = "[Binary Heap] Clear heap";
})(BinaryHeapActions = exports.BinaryHeapActions || (exports.BinaryHeapActions = {}));
var Push = /** @class */ (function () {
    function Push(payload) {
        this.payload = payload;
        this.type = BinaryHeapActions.PUSH;
    }
    return Push;
}());
exports.Push = Push;
var Pop = /** @class */ (function () {
    function Pop() {
        this.type = BinaryHeapActions.POP;
    }
    return Pop;
}());
exports.Pop = Pop;
var Remove = /** @class */ (function () {
    function Remove(payload) {
        this.payload = payload;
        this.type = BinaryHeapActions.REMOVE;
    }
    return Remove;
}());
exports.Remove = Remove;
var Merge = /** @class */ (function () {
    function Merge(payload) {
        this.payload = payload;
        this.type = BinaryHeapActions.MERGE;
    }
    return Merge;
}());
exports.Merge = Merge;
var Heapify = /** @class */ (function () {
    function Heapify() {
        this.type = BinaryHeapActions.HEAPIFY;
    }
    return Heapify;
}());
exports.Heapify = Heapify;
var Clear = /** @class */ (function () {
    function Clear() {
        this.type = BinaryHeapActions.CLEAR;
    }
    return Clear;
}());
exports.Clear = Clear;
