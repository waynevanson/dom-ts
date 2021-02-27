"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElement = exports.getElementById = exports.querySelectorAll = exports.querySelector = exports.unsafeAppendChild = exports.ownerDocument = exports.contains = exports.appendChild = void 0;
/**
 * @since 8.1.0
 */
var fp_ts_1 = require("fp-ts");
var function_1 = require("fp-ts/function");
var node_1 = require("./node");
Object.defineProperty(exports, "appendChild", { enumerable: true, get: function () { return node_1.appendChild; } });
Object.defineProperty(exports, "contains", { enumerable: true, get: function () { return node_1.contains; } });
Object.defineProperty(exports, "ownerDocument", { enumerable: true, get: function () { return node_1.ownerDocument; } });
Object.defineProperty(exports, "unsafeAppendChild", { enumerable: true, get: function () { return node_1.unsafeAppendChild; } });
var parent_node_1 = require("./parent-node");
Object.defineProperty(exports, "querySelector", { enumerable: true, get: function () { return parent_node_1.querySelector; } });
Object.defineProperty(exports, "querySelectorAll", { enumerable: true, get: function () { return parent_node_1.querySelectorAll; } });
/**
 * @category Constructors
 */
function getElementById(elementId) {
    return function (document) { return function () {
        return function_1.pipe(document.getElementById(elementId), fp_ts_1.option.fromNullable);
    }; };
}
exports.getElementById = getElementById;
/**
 * @category Constructors
 */
function createElement(tagName, options) {
    return function (document) { return function () {
        return function_1.pipe(document.createElement(tagName, options), fp_ts_1.either.fromPredicate(function (element) { return !(element instanceof HTMLUnknownElement); }, function (element) { return element; }));
    }; };
}
exports.createElement = createElement;
//# sourceMappingURL=document.js.map