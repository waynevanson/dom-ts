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
export declare function fromIterable<T>(iterable: Iterable<T> | ArrayLike<T>): Array<T>;
/**
 * @summary
 * Type safe implementation of `instanceof` operator.
 *
 * @category Constructors
 * @since 8.1.0
 */
export declare function instanceOf<A extends Function>(right: A): <B>(left: B) => left is Extract<B, A>;
export interface ClassConstructor<R extends readonly unknown[], A> {
    new (...r: R): A;
}
/**
 * @summary
 * Transforms a constructor into a function that instatiates with the `new` clause.
 *
 * @category Combinator
 * @param classable A constructor that must use `new` to be constructed.
 */
export declare function declass<R extends readonly unknown[], A>(classable: ClassConstructor<R, A>): (...r: R) => A;
