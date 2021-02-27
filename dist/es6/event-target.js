/**
 * @category Constructors
 */
export function addEventListener(name, listener, options) {
    return (target) => () => target.addEventListener(name, (event) => listener(event)(), options);
}
/**
 * @category Constructors
 */
export function removeEventListener(name, listener, options) {
    return (target) => () => target.removeEventListener(name, (event) => listener(event)(), options);
}
/**
 * @category Constructors
 */
export function dispatchEvent(event) {
    return (target) => () => target.dispatchEvent(event);
}
//# sourceMappingURL=event-target.js.map