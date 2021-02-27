/**
 * @since 8.1.0
 */
import { either as E, option as O } from "fp-ts";
import * as RIO from "fp-ts-contrib/ReaderIO";
import { ElementsTagNames, MatchElementsByTagName } from "./meta";
export { appendChild, contains, ownerDocument, unsafeAppendChild } from "./node";
export { querySelector, querySelectorAll } from "./parent-node";
/**
 * @category Constructors
 */
export declare function getElementById(elementId: string): RIO.ReaderIO<Document, O.Option<HTMLElement>>;
/**
 * @category Constructors
 */
export declare function createElement<K extends ElementsTagNames, L extends ElementsTagNames>(tagName: K, options: {
    is: L;
}): RIO.ReaderIO<Document, E.Either<HTMLUnknownElement, MatchElementsByTagName<K>["_element"] & MatchElementsByTagName<L>["_element"]>>;
/**
 * @category Constructors
 */
export declare function createElement<K extends ElementsTagNames>(tagName: K): RIO.ReaderIO<Document, E.Either<HTMLUnknownElement, MatchElementsByTagName<K>["_element"]>>;
