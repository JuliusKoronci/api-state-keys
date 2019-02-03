"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
exports.apiErrorAction = function (key, payload) { return ({
    key: key,
    payload: payload,
    type: constants_1.API_STATE.ERROR,
}); };
//# sourceMappingURL=apiErrorAction.js.map