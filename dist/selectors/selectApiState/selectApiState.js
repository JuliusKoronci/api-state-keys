"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = require("reselect");
var ramda_1 = require("ramda");
exports.apiStateSelector = function (state) { return state.apiState; };
exports.selectApiState = reselect_1.createSelector(exports.apiStateSelector, ramda_1.identity);
//# sourceMappingURL=selectApiState.js.map