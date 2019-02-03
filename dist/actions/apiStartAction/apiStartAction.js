"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
exports.apiStartAction = function (key, apiCallback, config) {
    if (config === void 0) { config = {}; }
    return ({
        payload: {
            apiCallback: apiCallback,
            config: config,
            key: key,
        },
        type: constants_1.API_STATE.START,
    });
};
//# sourceMappingURL=apiStartAction.js.map