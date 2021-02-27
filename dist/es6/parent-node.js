/**
 * @since 8.1.0
 */
import { option as O, readonlyArray as ROA } from "fp-ts";
import { pipe } from "fp-ts/function";
import { fromIterable } from "./util";
/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelector(selector) {
    return (parentNode) => () => pipe(parentNode.querySelector(selector), O.fromNullable);
}
/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelectorAll(selector) {
    return (parentNode) => () => pipe(parentNode.querySelectorAll(selector), fromIterable, ROA.fromArray);
}
//# sourceMappingURL=parent-node.js.map