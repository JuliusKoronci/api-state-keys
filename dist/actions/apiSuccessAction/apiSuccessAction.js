"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
exports.apiSuccessAction = function (key, payload, config) { return ({
    config: config,
    key: key,
    payload: payload,
    type: constants_1.API_STATE.SUCCESS,
}); };
//# sourceMappingURL=apiSuccessAction.js.map