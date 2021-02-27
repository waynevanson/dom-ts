"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatchEvent = exports.removeEventListener = exports.addEventListener = void 0;
/**
 * @category Constructors
 */
function addEventListener(name, listener, options) {
    return function (target) { return function () {
        return target.addEventListener(name, function (event) { return listener(event)(); }, options);
    }; };
}
exports.addEventListener = addEventListener;
/**
 * @category Constructors
 */
function removeEventListener(name, listener, options) {
    return function (target) { return function () {
        return target.removeEventListener(name, function (event) { return listener(event)(); }, options);
    }; };
}
exports.removeEventListener = removeEventListener;
/**
 * @category Constructors
 */
function dispatchEvent(event) {
    return function (target) { return function () { return target.dispatchEvent(event); }; };
}
exports.dispatchEvent = dispatchEvent;
//# sourceMappingURL=event-target.js.map