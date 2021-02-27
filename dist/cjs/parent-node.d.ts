/**
 * @since 8.1.0
 */
import { option as O } from "fp-ts";
import { ReaderIO } from "fp-ts-contrib/ReaderIO";
import { ElementsTagNames, MatchElementsByTagName } from "./meta";
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare function querySelector<K extends ElementsTagNames>(selector: K): ReaderIO<ParentNode, O.Option<MatchElementsByTagName<K>["_element"]>>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare function querySelector<A extends Element>(selector: string): ReaderIO<ParentNode, O.Option<A>>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare function querySelectorAll<K extends ElementsTagNames>(selector: K): ReaderIO<ParentNode, ReadonlyArray<MatchElementsByTagName<K>["_element"]>>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare function querySelectorAll<A extends Element>(selector: string): ReaderIO<ParentNode, ReadonlyArray<A>>;
