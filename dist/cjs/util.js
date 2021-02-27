"use strict";
/**
 * @since 8.1.0
 */
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.declass = exports.instanceOf = exports.fromIterable = void 0;
/**
 * @summary
 * Type safe implementation of `Array.from`.
 *
 * @category Constructors
 * @since 8.1.0
 */
function fromIterable(iterable) {
    return Array.from(iterable);
}
exports.fromIterable = fromIterable;
/**
 * @summary
 * Type safe implementation of `instanceof` operator.
 *
 * @category Constructors
 * @since 8.1.0
 */
// eslint-disable-next-line
function instanceOf(right) {
    return function (left) { return left instanceof right; };
}
exports.instanceOf = instanceOf;
/**
 * @summary
 * Transforms a constructor into a function that instatiates with the `new` clause.
 *
 * @category Combinator
 * @param classable A constructor that must use `new` to be constructed.
 */
function declass(classable) {
    return function () {
        var r = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            r[_i] = arguments[_i];
        }
        return new (classable.bind.apply(classable, __spread([void 0], r)))();
    };
}
exports.declass = declass;
//# sourceMappingURL=util.js.map