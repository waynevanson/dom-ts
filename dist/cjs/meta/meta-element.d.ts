/**
 * @since 8.1.0
 */
import { AllHTMLElementMeta } from "./meta-html-element";
import { AllSVGElementMeta } from "./meta-svg-element";
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type MetaElement<R extends string, E extends Element, A extends ElementEventMap> = {
    _tagName: R;
    _element: E;
    _eventMap: A;
};
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type AllElementMeta = AllHTMLElementMeta | AllSVGElementMeta;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type MatchElementTagName<R extends string> = AllElementMeta extends infer T ? T extends MetaElement<R, infer E, infer A> ? MetaElement<R, E, A> : never : never;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type MatchElementElement<E extends Element> = AllElementMeta extends infer T ? T extends MetaElement<infer R, E, infer A> ? MetaElement<R, E, A> : never : never;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type MatchElementEventMap<A extends ElementEventMap> = AllElementMeta extends infer T ? T extends MetaElement<infer R, infer E, A> ? MetaElement<R, E, A> : never : never;
