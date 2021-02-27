import { MetaElement } from "./meta-element"
import { AllHTMLElementMeta, MetaHTMLElement } from "./meta-html-element"
import { AllSVGElementMeta, MetaSVGElement } from "./meta-svg-element"

export { MetaHTMLElement } from "./meta-html-element"
export { MetaSVGElement } from "./meta-svg-element"

/**
 * @summary
 * Override with module augmentation
 */
export interface Custom {}

type GetUserCustomElements<
  K extends "HTMLElements" | "Elements" | "SVGElements"
> = {
  [P in keyof Custom]: P extends K ? Custom[P] : never
}[keyof Custom]

/**
 * @summary
 * Override with module augmentation
 */
export type CustomHTMLElements = GetUserCustomElements<"HTMLElements">

/**
 * @summary
 * Override with module augmentation
 */
export type CustomSVGElements = GetUserCustomElements<"SVGElements">

/**
 * @summary
 * Override with module augmentation
 */
export type CustomElements = GetUserCustomElements<"Elements">

// Use these when building API's

export type HTMLElements = CustomHTMLElements

export type SVGElements = AllSVGElementMeta | CustomSVGElements

export type Elements = HTMLElements | SVGElements | CustomElements

// Convenience Unions

export type HTMLElementsTagNames = HTMLElements["_tagName"]
export type HTMLElementsElements = HTMLElements["_element"]
export type HTMLElementsEventMaps = HTMLElements["_eventMap"]
export type HTMLElementsEventNames = keyof HTMLElementsEventMaps
export type HTMLElementsEvents = HTMLElementsEventMaps[HTMLElementsEventNames]

export type SVGElementsTagNames = SVGElements["_tagName"]
export type SVGElementsElements = SVGElements["_element"]
export type SVGElementsEventMaps = SVGElements["_eventMap"]
export type SVGElementsEventNames = keyof SVGElementsEventMaps
export type SVGElementsEvents = SVGElementsEventMaps[SVGElementsEventNames]

export type ElementsTagNames = Elements["_tagName"]
export type ElementsElements = Elements["_element"]
export type ElementsEventMaps = Elements["_eventMap"]
export type ElementsEventNames = keyof ElementsEventMaps
export type ElementsEvents = ElementsEventMaps[ElementsEventNames]

// Matchers/Filters

// Match{Element,HTMLElement,SVGElement}sByTagName

export type MatchElementsByTagName<
  T extends ElementsTagNames
> = Elements extends infer U
  ? U extends MetaElement<T, any, any>
    ? U
    : never
  : never

export type MatchHTMLElementsByTagName<
  T extends HTMLElementsTagNames
> = HTMLElements extends infer U
  ? U extends MetaHTMLElement<T, any, any>
    ? U
    : never
  : never

export type MatchSVGElementsByTagName<
  T extends SVGElementsTagNames
> = SVGElements extends infer U
  ? U extends MetaSVGElement<T, any, any>
    ? U
    : never
  : never

// Match{Element,HTMLElement,SVGElement}sByElement

export type MatchElementByElement<
  E extends ElementsElements
> = Elements extends infer U
  ? U extends MetaElement<any, E, any>
    ? U
    : never
  : never

export type MatchHTMLElementByElement<
  E extends HTMLElementsElements
> = HTMLElements extends infer U
  ? U extends MetaHTMLElement<any, E, any>
    ? U
    : never
  : never

export type MatchSVGElementByElement<
  E extends SVGElementsElements
> = SVGElements extends infer U
  ? U extends MetaSVGElement<any, E, any>
    ? U
    : never
  : never

// Match{Element,HTMLElement,SVGElement}sByEventName

export type MatchElementByEventName<
  EN extends ElementsEventNames
> = Elements extends infer U
  ? U extends MetaElement<any, any, ElementEventMap & Record<EN, any>>
    ? U
    : never
  : never

export type MatchHTMLElementByEventName<
  EN extends HTMLElementsEventNames
> = HTMLElements extends infer U
  ? U extends MetaHTMLElement<any, any, ElementEventMap & Record<EN, any>>
    ? U
    : never
  : never

export type MatchSVGElementByEventName<
  EN extends SVGElementsEventNames
> = SVGElements extends infer U
  ? U extends MetaSVGElement<any, any, SVGElementEventMap & Record<EN, any>>
    ? U
    : never
  : never

// Match{Element,HTMLElement,SVGElement}sByEvent

export type MatchElementByEvent<
  EV extends ElementsEvents
> = Elements extends infer U
  ? U extends MetaElement<any, any, ElementEventMap & Record<any, infer V>>
    ? V extends EV
      ? U
      : never
    : never
  : never

export type MatchHTMLElementByEvent<
  EV extends HTMLElementsEvents
> = HTMLElements extends infer U
  ? U extends MetaHTMLElement<any, any, ElementEventMap & Record<any, infer V>>
    ? V extends EV
      ? U
      : never
    : never
  : never

export type MatchSVGElementByEvent<
  EV extends SVGElementsEvents
> = SVGElements extends infer U
  ? U extends MetaSVGElement<
      any,
      any,
      SVGElementEventMap & Record<any, infer V>
    >
    ? V extends EV
      ? U
      : never
    : never
  : never
