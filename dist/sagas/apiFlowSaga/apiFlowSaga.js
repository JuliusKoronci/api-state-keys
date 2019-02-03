"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var effects_1 = require("redux-saga/effects");
var apiErrorAction_1 = require("../../actions/apiErrorAction");
var apiRequestAction_1 = require("../../actions/apiRequestAction");
var apiSuccessAction_1 = require("../../actions/apiSuccessAction");
var constants_1 = require("../../constants");
function handleApiCall(_a) {
    var response, e_1;
    var _b = _a.payload, key = _b.key, config = _b.config, apiCallback = _b.apiCallback;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, effects_1.put(apiRequestAction_1.apiRequestAction(key))];
            case 1:
                _c.sent();
                _c.label = 2;
            case 2:
                _c.trys.push([2, 9, , 11]);
                return [4 /*yield*/, effects_1.call(apiCallback)];
            case 3:
                response = _c.sent();
                return [4 /*yield*/, effects_1.put(apiSuccessAction_1.apiSuccessAction(key, response, config))];
            case 4:
                _c.sent();
                if (!config.action) return [3 /*break*/, 6];
                return [4 /*yield*/, effects_1.put(config.action(response))];
            case 5:
                _c.sent();
                _c.label = 6;
            case 6:
                if (!config.cb) return [3 /*break*/, 8];
                return [4 /*yield*/, effects_1.call(config.cb, response)];
            case 7:
                _c.sent();
                _c.label = 8;
            case 8: return [3 /*break*/, 11];
            case 9:
                e_1 = _c.sent();
                return [4 /*yield*/, effects_1.put(apiErrorAction_1.apiErrorAction(key, {
                        code: '555',
                        message: e_1.message,
                    }))];
            case 10:
                _c.sent();
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}
exports.handleApiCall = handleApiCall;
function apiFlowSaga() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, effects_1.takeEvery(constants_1.API_STATE.START, handleApiCall)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.apiFlowSaga = apiFlowSaga;
//# sourceMappingURL=apiFlowSaga.js.map