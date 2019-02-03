"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
var selectApiStateByKey_1 = require("../selectApiStateByKey");
exports.hasLoaded = function (state) { return function (key) {
    var apiState = selectApiStateByKey_1.selectApiStateByKey(state)(key);
    return ramda_1.propOr(false, 'loaded', apiState);
}; };
//# sourceMappingURL=hasLoaded.js.map