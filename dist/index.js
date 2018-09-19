"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@reactive-redux/store");
var reducers_1 = require("./reducers");
var actions_1 = require("./actions");
var operators_1 = require("rxjs/operators");
var reducers_2 = require("./reducers");
exports.BinaryHeapType = reducers_2.BinaryHeapType;
var BinaryHeap = /** @class */ (function (_super) {
    __extends(BinaryHeap, _super);
    function BinaryHeap(opts) {
        if (opts === void 0) { opts = BinaryHeap.INIT_OPTS; }
        var _this = _super.call(this, opts.initialArray || BinaryHeap.INIT_OPTS.initialArray, reducers_1.reducerMap(opts.mapWeights || BinaryHeap.INIT_OPTS.mapWeights, opts.type || reducers_1.BinaryHeapType.MIN)) || this;
        _this.opts = opts;
        _this.size$ = _this.state$.pipe(store_1.select(function (state) { return state.length; }));
        _this.peek$ = _this.state$.pipe(store_1.select(function (state) { return state[0]; }), operators_1.filter(function (v) { return !!v; }));
        if (opts.initialArray &&
            (opts.heapifyOnInit || BinaryHeap.INIT_OPTS.heapifyOnInit)) {
            _this.heapify();
        }
        return _this;
    }
    BinaryHeap.prototype.push = function (value) {
        this.dispatch(new actions_1.Push({ value: value }));
    };
    BinaryHeap.prototype.pop = function () {
        this.dispatch(new actions_1.Pop());
    };
    BinaryHeap.prototype.remove = function (value) {
        this.dispatch(new actions_1.Remove({ value: value }));
    };
    BinaryHeap.prototype.clear = function () {
        this.dispatch(new actions_1.Clear());
    };
    BinaryHeap.prototype.merge = function (heapToMerge) {
        this.dispatch(new actions_1.Merge({ heapToMerge: heapToMerge }));
    };
    BinaryHeap.prototype.heapify = function () {
        this.dispatch(new actions_1.Heapify());
    };
    BinaryHeap.INIT_OPTS = {
        initialArray: [],
        mapWeights: function (n) { return n; },
        type: reducers_1.BinaryHeapType.MIN,
        heapifyOnInit: false
    };
    return BinaryHeap;
}(store_1.Store));
exports.BinaryHeap = BinaryHeap;
