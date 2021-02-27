/**
 * @since 8.1.0
 */
import { either as E, option as O } from "fp-ts";
import { pipe } from "fp-ts/function";
export { appendChild, contains, ownerDocument, unsafeAppendChild } from "./node";
export { querySelector, querySelectorAll } from "./parent-node";
/**
 * @category Constructors
 */
export function getElementById(elementId) {
    return (document) => () => pipe(document.getElementById(elementId), O.fromNullable);
}
/**
 * @category Constructors
 */
export function createElement(tagName, options) {
    return (document) => () => pipe(document.createElement(tagName, options), E.fromPredicate((element) => !(element instanceof HTMLUnknownElement), (element) => element));
}
//# sourceMappingURL=document.js.map