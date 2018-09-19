"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var immer_1 = require("immer");
var actions_1 = require("./actions");
var utils_1 = require("./utils");
var BinaryHeapType;
(function (BinaryHeapType) {
    BinaryHeapType["MIN"] = "min";
    BinaryHeapType["MAX"] = "max";
})(BinaryHeapType = exports.BinaryHeapType || (exports.BinaryHeapType = {}));
immer_1.setAutoFreeze(false);
exports.push = function (mapWeights, type) {
    return immer_1.produce(function (state, action) {
        var bubble = utils_1._bubbleUp.bind(state);
        state.push(action.payload.value);
        bubble(state.length - 1, mapWeights, type);
    });
};
exports.pop = function (mapWeights, type) {
    return immer_1.produce(function (state, action) {
        var sink = utils_1._sinkDown.bind(state);
        var end = state.pop();
        if (state.length > 0) {
            state[0] = end;
            sink(0, mapWeights, type);
        }
    });
};
exports.remove = function (mapWeights, type) {
    return immer_1.produce(function (state, action) {
        var bubble = utils_1._bubbleUp.bind(state);
        var sink = utils_1._sinkDown.bind(state);
        var length = state.length;
        for (var i = 0; i < length; i++) {
            if (JSON.stringify(state[i]) !== JSON.stringify(action.payload.value))
                continue;
            var end = state.pop();
            if (i === length - 1)
                break;
            state[i] = end;
            bubble(i, mapWeights, type);
            sink(i, mapWeights, type);
            break;
        }
    });
};
exports.merge = function (mapWeights, type) {
    return immer_1.produce(function (state, action) {
        var newState = __spread(state, action.payload.heapToMerge);
        utils_1._heapify(newState, mapWeights, type);
        return newState;
    });
};
exports.heapify = function (mapWeights, type) {
    return immer_1.produce(function (state, action) {
        utils_1._heapify(state, mapWeights, type);
    });
};
exports.reducerMap = function (mapWeights, type) {
    return new Map([
        [actions_1.BinaryHeapActions.PUSH, exports.push(mapWeights, type)],
        [actions_1.BinaryHeapActions.POP, exports.pop(mapWeights, type)],
        [actions_1.BinaryHeapActions.REMOVE, exports.remove(mapWeights, type)],
        [actions_1.BinaryHeapActions.MERGE, exports.merge(mapWeights, type)],
        [actions_1.BinaryHeapActions.HEAPIFY, exports.heapify(mapWeights, type)]
    ]);
};
