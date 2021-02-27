import { MetaElement } from "./meta-element";
import { MetaHTMLElement } from "./meta-html-element";
import { AllSVGElementMeta, MetaSVGElement } from "./meta-svg-element";
export { MetaHTMLElement } from "./meta-html-element";
export { MetaSVGElement } from "./meta-svg-element";
/**
 * @summary
 * Override with module augmentation
 */
export interface Custom {
}
declare type GetUserCustomElements<K extends "HTMLElements" | "Elements" | "SVGElements"> = {
    [P in keyof Custom]: P extends K ? Custom[P] : never;
}[keyof Custom];
/**
 * @summary
 * Override with module augmentation
 */
export declare type CustomHTMLElements = GetUserCustomElements<"HTMLElements">;
/**
 * @summary
 * Override with module augmentation
 */
export declare type CustomSVGElements = GetUserCustomElements<"SVGElements">;
/**
 * @summary
 * Override with module augmentation
 */
export declare type CustomElements = GetUserCustomElements<"Elements">;
export declare type HTMLElements = CustomHTMLElements;
export declare type SVGElements = AllSVGElementMeta | CustomSVGElements;
export declare type Elements = HTMLElements | SVGElements | CustomElements;
export declare type HTMLElementsTagNames = HTMLElements["_tagName"];
export declare type HTMLElementsElements = HTMLElements["_element"];
export declare type HTMLElementsEventMaps = HTMLElements["_eventMap"];
export declare type HTMLElementsEventNames = keyof HTMLElementsEventMaps;
export declare type HTMLElementsEvents = HTMLElementsEventMaps[HTMLElementsEventNames];
export declare type SVGElementsTagNames = SVGElements["_tagName"];
export declare type SVGElementsElements = SVGElements["_element"];
export declare type SVGElementsEventMaps = SVGElements["_eventMap"];
export declare type SVGElementsEventNames = keyof SVGElementsEventMaps;
export declare type SVGElementsEvents = SVGElementsEventMaps[SVGElementsEventNames];
export declare type ElementsTagNames = Elements["_tagName"];
export declare type ElementsElements = Elements["_element"];
export declare type ElementsEventMaps = Elements["_eventMap"];
export declare type ElementsEventNames = keyof ElementsEventMaps;
export declare type ElementsEvents = ElementsEventMaps[ElementsEventNames];
export declare type MatchElementsByTagName<T extends ElementsTagNames> = Elements extends infer U ? U extends MetaElement<T, any, any> ? U : never : never;
export declare type MatchHTMLElementsByTagName<T extends HTMLElementsTagNames> = HTMLElements extends infer U ? U extends MetaHTMLElement<T, any, any> ? U : never : never;
export declare type MatchSVGElementsByTagName<T extends SVGElementsTagNames> = SVGElements extends infer U ? U extends MetaSVGElement<T, any, any> ? U : never : never;
export declare type MatchElementByElement<E extends ElementsElements> = Elements extends infer U ? U extends MetaElement<any, E, any> ? U : never : never;
export declare type MatchHTMLElementByElement<E extends HTMLElementsElements> = HTMLElements extends infer U ? U extends MetaHTMLElement<any, E, any> ? U : never : never;
export declare type MatchSVGElementByElement<E extends SVGElementsElements> = SVGElements extends infer U ? U extends MetaSVGElement<any, E, any> ? U : never : never;
export declare type MatchElementByEventName<EN extends ElementsEventNames> = Elements extends infer U ? U extends MetaElement<any, any, ElementEventMap & Record<EN, any>> ? U : never : never;
export declare type MatchHTMLElementByEventName<EN extends HTMLElementsEventNames> = HTMLElements extends infer U ? U extends MetaHTMLElement<any, any, ElementEventMap & Record<EN, any>> ? U : never : never;
export declare type MatchSVGElementByEventName<EN extends SVGElementsEventNames> = SVGElements extends infer U ? U extends MetaSVGElement<any, any, SVGElementEventMap & Record<EN, any>> ? U : never : never;
export declare type MatchElementByEvent<EV extends ElementsEvents> = Elements extends infer U ? U extends MetaElement<any, any, ElementEventMap & Record<any, infer V>> ? V extends EV ? U : never : never : never;
export declare type MatchHTMLElementByEvent<EV extends HTMLElementsEvents> = HTMLElements extends infer U ? U extends MetaHTMLElement<any, any, ElementEventMap & Record<any, infer V>> ? V extends EV ? U : never : never : never;
export declare type MatchSVGElementByEvent<EV extends SVGElementsEvents> = SVGElements extends infer U ? U extends MetaSVGElement<any, any, SVGElementEventMap & Record<any, infer V>> ? V extends EV ? U : never : never : never;
