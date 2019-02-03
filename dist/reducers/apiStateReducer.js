"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var constants_1 = require("../constants");
var reducers = (_a = {},
    _a[constants_1.API_STATE.SUCCESS] = function (state, action) {
        var _a;
        return __assign({}, state, (_a = {}, _a[action.key] = __assign({}, state[action.key], { error: false, errorObject: null, loaded: true, loading: false, payload: action.config.merge ? action.config.merge(state[action.key].payload, action.payload) : action.payload }), _a));
    },
    _a[constants_1.API_STATE.ERROR] = function (state, action) {
        var _a;
        return __assign({}, state, (_a = {}, _a[action.key] = __assign({}, state[action.key], { error: true, errorObject: action.payload, loading: false }), _a));
    },
    _a[constants_1.API_STATE.REQUEST] = function (state, action) {
        var _a;
        return __assign({}, state, (_a = {}, _a[action.key] = __assign({}, state[action.key], { loading: true }), _a));
    },
    _a);
exports.apiStateReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    if (reducers[action.type]) {
        return reducers[action.type](state, action);
    }
    return state;
};
//# sourceMappingURL=apiStateReducer.js.map