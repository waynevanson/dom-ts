/**
 * @since 8.1.0
 */
/**
 * @summary
 * Type safe implementation of `Array.from`.
 *
 * @category Constructors
 * @since 8.1.0
 */
export function fromIterable(iterable) {
    return Array.from(iterable);
}
/**
 * @summary
 * Type safe implementation of `instanceof` operator.
 *
 * @category Constructors
 * @since 8.1.0
 */
// eslint-disable-next-line
export function instanceOf(right) {
    return (left) => left instanceof right;
}
/**
 * @summary
 * Transforms a constructor into a function that instatiates with the `new` clause.
 *
 * @category Combinator
 * @param classable A constructor that must use `new` to be constructed.
 */
export function declass(classable) {
    return (...r) => new classable(...r);
}
//# sourceMappingURL=util.js.map