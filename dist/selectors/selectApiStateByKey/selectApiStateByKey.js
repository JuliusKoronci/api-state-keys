"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var selectApiState_1 = require("../selectApiState");
exports.selectApiStateByKey = function (state) { return function (key) {
    var apiState = selectApiState_1.selectApiState(state);
    return apiState[key];
}; };
//# sourceMappingURL=selectApiStateByKey.js.map