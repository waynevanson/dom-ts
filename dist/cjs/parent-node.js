"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySelectorAll = exports.querySelector = void 0;
/**
 * @since 8.1.0
 */
var fp_ts_1 = require("fp-ts");
var function_1 = require("fp-ts/function");
var util_1 = require("./util");
/**
 * @category Constructors
 * @since 8.1.0
 */
function querySelector(selector) {
    return function (parentNode) { return function () {
        return function_1.pipe(parentNode.querySelector(selector), fp_ts_1.option.fromNullable);
    }; };
}
exports.querySelector = querySelector;
/**
 * @category Constructors
 * @since 8.1.0
 */
function querySelectorAll(selector) {
    return function (parentNode) { return function () {
        return function_1.pipe(parentNode.querySelectorAll(selector), util_1.fromIterable, fp_ts_1.readonlyArray.fromArray);
    }; };
}
exports.querySelectorAll = querySelectorAll;
//# sourceMappingURL=parent-node.js.map