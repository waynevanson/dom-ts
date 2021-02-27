"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsafeAppendChild = exports.appendChild = exports.getRootNode = exports.ownerDocument = exports.contains = void 0;
/**
 * @since 8.1.0
 */
var fp_ts_1 = require("fp-ts");
var RIO = require("fp-ts-contrib/ReaderIO");
var function_1 = require("fp-ts/function");
/**
 * @category Constructors
 * @since 8.1.0
 */
function contains(child) {
    return function (node) { return function () { return node.contains(child); }; };
}
exports.contains = contains;
/**
 * @category Constructors
 * @since 8.1.0
 */
var ownerDocument = function (node) { return function () { return function_1.pipe(node.ownerDocument, fp_ts_1.option.fromNullable); }; };
exports.ownerDocument = ownerDocument;
/**
 * @category Constructors
 * @since 8.1.0
 */
function getRootNode(options) {
    return function (node) { return function () { return node.getRootNode(options); }; };
}
exports.getRootNode = getRootNode;
/**
 * @internal
 */
function childExistsInNodeDOM(newChild) {
    return function_1.pipe(getRootNode({ composed: false }), RIO.chain(function (node) { return RIO.fromIOK(contains(newChild))(node); }), RIO.map(function_1.flow(fp_ts_1.option.fromPredicate(function_1.identity), fp_ts_1.option.map(function_1.constVoid))));
}
/**
 * @category Constructors
 * @since 8.1.0
 */
function appendChild(newChild) {
    return function_1.pipe(childExistsInNodeDOM(newChild), RIO.map(fp_ts_1.option.fromPredicate(fp_ts_1.option.isNone)), RIO.chain(fp_ts_1.option.traverse(RIO.Applicative)(function () { return unsafeAppendChild(newChild); })));
}
exports.appendChild = appendChild;
/**
 * @category Constructors
 * @since 8.1.0
 */
function unsafeAppendChild(newChild) {
    return function (node) { return function_1.pipe(function () { return node.appendChild(newChild); }, fp_ts_1.io.map(function_1.constVoid)); };
}
exports.unsafeAppendChild = unsafeAppendChild;
//# sourceMappingURL=node.js.map