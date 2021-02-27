/**
 * @since 8.1.0
 */
import { MetaElement } from "./meta-element"

// MATCHERS

/**
 * @category Constructors
 * @since 8.1.0
 */
export type MatchHTMLElementTagName<
  R extends string
> = AllHTMLElementMeta extends infer T
  ? T extends MetaHTMLElement<R, infer E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never

/**
 * @category Constructors
 * @since 8.1.0
 */
export type MatchHTMLElementElement<
  E extends HTMLElement
> = AllHTMLElementMeta extends infer T
  ? T extends MetaHTMLElement<infer R, E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never

/**
 * @category Constructors
 * @since 8.1.0
 */
export type MatchHTMLElementEventMap<
  A extends HTMLElementEventMap
> = AllHTMLElementMeta extends infer T
  ? T extends MetaHTMLElement<infer R, infer E, A>
    ? MetaElement<R, E, A>
    : never
  : never

// CONSTRUCTORS

/**
 * @category Constructors
 * @since 8.1.0
 */
export type MetaHTMLElement<
  R extends string,
  E extends HTMLElement,
  A extends ElementEventMap = HTMLElementEventMap
> = MetaElement<R, E, A>

// VALUES

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLAnchorElementMeta = MetaHTMLElement<"a", HTMLAnchorElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLAbbrElementMeta = MetaHTMLElement<"abbr", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLAddressElementMeta = MetaHTMLElement<"address", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLAppletElementMeta = MetaHTMLElement<"applet", HTMLAppletElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLAreaElementMeta = MetaHTMLElement<"area", HTMLAreaElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLArticleElementMeta = MetaHTMLElement<"article", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLAsideElementMeta = MetaHTMLElement<"aside", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLAudioElementMeta = MetaHTMLElement<
  "audio",
  HTMLAudioElement,
  HTMLMediaElementEventMap
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLBElementMeta = MetaHTMLElement<"b", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLBaseElementMeta = MetaHTMLElement<"base", HTMLBaseElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLBaseFontElementMeta = MetaHTMLElement<
  "basefont",
  HTMLBaseFontElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLBdiElementMeta = MetaHTMLElement<"bdi", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLBdoElementMeta = MetaHTMLElement<"bdo", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLQuoteElementMeta = MetaHTMLElement<
  "blockquote",
  HTMLQuoteElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLBodyElementMeta = MetaHTMLElement<
  "body",
  HTMLBodyElement,
  HTMLBodyElementEventMap
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLBRElementMeta = MetaHTMLElement<"br", HTMLBRElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLButtonElementMeta = MetaHTMLElement<"button", HTMLButtonElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLCanvasElementMeta = MetaHTMLElement<"canvas", HTMLCanvasElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTableCaptionElementMeta = MetaHTMLElement<
  "caption",
  HTMLTableCaptionElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLCiteElementMeta = MetaHTMLElement<"cite", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLCodeElementMeta = MetaHTMLElement<"code", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLColElementMeta = MetaHTMLElement<"col", HTMLTableColElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTableColElementMeta = MetaHTMLElement<
  "colgroup",
  HTMLTableColElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLDataElementMeta = MetaHTMLElement<"data", HTMLDataElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLDataListElementMeta = MetaHTMLElement<
  "datalist",
  HTMLDataListElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLDDElementMeta = MetaHTMLElement<"dd", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLDelElementMeta = MetaHTMLElement<"del", HTMLModElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLDetailsElementMeta = MetaHTMLElement<
  "details",
  HTMLDetailsElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLDFNElementMeta = MetaHTMLElement<"dfn", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLDialogElementMeta = MetaHTMLElement<"dialog", HTMLDialogElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLDirectoryElementMeta = MetaHTMLElement<
  "dir",
  HTMLDirectoryElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLDivElementMeta = MetaHTMLElement<"div", HTMLDivElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLDListElementMeta = MetaHTMLElement<"dl", HTMLDListElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLDtElementMeta = MetaHTMLElement<"dt", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLEmElementMeta = MetaHTMLElement<"em", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLEmbedElementMeta = MetaHTMLElement<"embed", HTMLEmbedElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLFieldSetElementMeta = MetaHTMLElement<
  "fieldset",
  HTMLFieldSetElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLFigcaptionElementMeta = MetaHTMLElement<
  "figcaption",
  HTMLElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLFigureElementMeta = MetaHTMLElement<"figure", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLFontElementMeta = MetaHTMLElement<"font", HTMLFontElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLFooterElementMeta = MetaHTMLElement<"footer", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLFormElementMeta = MetaHTMLElement<
  "form",
  HTMLFormElement,
  HTMLFrameSetElementEventMap
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLFrameElementMeta = MetaHTMLElement<"frame", HTMLFrameElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLFrameSetElementMeta = MetaHTMLElement<
  "frameset",
  HTMLFrameSetElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLHeading1ElementMeta = MetaHTMLElement<"h1", HTMLHeadingElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLHeading2ElementMeta = MetaHTMLElement<"h2", HTMLHeadingElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLHeading3ElementMeta = MetaHTMLElement<"h3", HTMLHeadingElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLHeading4ElementMeta = MetaHTMLElement<"h4", HTMLHeadingElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLHeading5ElementMeta = MetaHTMLElement<"h5", HTMLHeadingElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLHeading6ElementMeta = MetaHTMLElement<"h6", HTMLHeadingElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLHeadElementMeta = MetaHTMLElement<"head", HTMLHeadElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLHeaderElementMeta = MetaHTMLElement<"header", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLHGroupElementMeta = MetaHTMLElement<"hgroup", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLHRElementMeta = MetaHTMLElement<"hr", HTMLHRElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLHtmlElementMeta = MetaHTMLElement<"html", HTMLHtmlElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLIElementMeta = MetaHTMLElement<"i", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLIFrameElementMeta = MetaHTMLElement<"iframe", HTMLIFrameElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLImageElementMeta = MetaHTMLElement<"img", HTMLImageElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLInputElementMeta = MetaHTMLElement<"input", HTMLInputElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLInsElementMeta = MetaHTMLElement<"ins", HTMLModElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLKBDElementMeta = MetaHTMLElement<"kbd", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLLabelElementMeta = MetaHTMLElement<"label", HTMLLabelElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLLegendElementMeta = MetaHTMLElement<"legend", HTMLLegendElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLLIElementMeta = MetaHTMLElement<"li", HTMLLIElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLLinkElementMeta = MetaHTMLElement<"link", HTMLLinkElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLMainElementMeta = MetaHTMLElement<"main", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLMapElementMeta = MetaHTMLElement<"map", HTMLMapElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLMarkElementMeta = MetaHTMLElement<"mark", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLMarqueeElementMeta = MetaHTMLElement<
  "marquee",
  HTMLMarqueeElement,
  HTMLMarqueeElementEventMap
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLMenuElementMeta = MetaHTMLElement<"menu", HTMLMenuElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLMetaElementMeta = MetaHTMLElement<"meta", HTMLMetaElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLMeterElementMeta = MetaHTMLElement<"meter", HTMLMeterElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLNavElementMeta = MetaHTMLElement<"nav", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLNoscriptElementMeta = MetaHTMLElement<"noscript", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLObjectElementMeta = MetaHTMLElement<"object", HTMLObjectElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLOListElementMeta = MetaHTMLElement<"ol", HTMLOListElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLOptgroupElementMeta = MetaHTMLElement<
  "optgroup",
  HTMLOptGroupElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLOptionElementMeta = MetaHTMLElement<"option", HTMLOptionElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLOutputElementMeta = MetaHTMLElement<"output", HTMLOutputElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLPElementMeta = MetaHTMLElement<"p", HTMLParagraphElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLParamElementMeta = MetaHTMLElement<"param", HTMLParamElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLPictureElementMeta = MetaHTMLElement<
  "picture",
  HTMLPictureElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLPreElementMeta = MetaHTMLElement<"pre", HTMLPreElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLProgressElementMeta = MetaHTMLElement<
  "progress",
  HTMLProgressElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLQElementMeta = MetaHTMLElement<"q", HTMLQuoteElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLRpElementMeta = MetaHTMLElement<"rp", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLRtElementMeta = MetaHTMLElement<"rt", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLRubyElementMeta = MetaHTMLElement<"ruby", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLSElementMeta = MetaHTMLElement<"s", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLSampElementMeta = MetaHTMLElement<"samp", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLScriptElementMeta = MetaHTMLElement<"script", HTMLScriptElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLSectionElementMeta = MetaHTMLElement<"section", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLSelectElementMeta = MetaHTMLElement<"select", HTMLSelectElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLSlotElementMeta = MetaHTMLElement<"slot", HTMLSlotElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLSmallElementMeta = MetaHTMLElement<"small", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLSourceElementMeta = MetaHTMLElement<"source", HTMLSourceElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLSpanElementMeta = MetaHTMLElement<"span", HTMLSpanElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLStrongElementMeta = MetaHTMLElement<"strong", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLStyleElementMeta = MetaHTMLElement<"style", HTMLStyleElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLSubElementMeta = MetaHTMLElement<"sub", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLSummaryElementMeta = MetaHTMLElement<"summary", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLSupElementMeta = MetaHTMLElement<"sup", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTableElementMeta = MetaHTMLElement<"table", HTMLTableElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTbodyElementMeta = MetaHTMLElement<
  "tbody",
  HTMLTableSectionElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTdElementMeta = MetaHTMLElement<"td", HTMLTableDataCellElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTemplateElementMeta = MetaHTMLElement<
  "template",
  HTMLTemplateElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTextareaElementMeta = MetaHTMLElement<
  "textarea",
  HTMLTextAreaElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTfootElementMeta = MetaHTMLElement<
  "tfoot",
  HTMLTableSectionElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLThElementMeta = MetaHTMLElement<
  "th",
  HTMLTableHeaderCellElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTheadElementMeta = MetaHTMLElement<
  "thead",
  HTMLTableSectionElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTimeElementMeta = MetaHTMLElement<"time", HTMLTimeElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTitleElementMeta = MetaHTMLElement<"title", HTMLTitleElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTrElementMeta = MetaHTMLElement<"tr", HTMLTableRowElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLTrackElementMeta = MetaHTMLElement<"track", HTMLTrackElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLUElementMeta = MetaHTMLElement<"u", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLUListElementMeta = MetaHTMLElement<"ul", HTMLUListElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLVarElementMeta = MetaHTMLElement<"var", HTMLElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLVideoElementMeta = MetaHTMLElement<
  "video",
  HTMLVideoElement,
  HTMLMediaElementEventMap
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type HTMLWbrElementMeta = MetaHTMLElement<"wbr", HTMLElement>

// UNIONIZED

/**
 * @category Constructors
 * @since 8.1.0
 */
export type AllHTMLElementMeta =
  | HTMLAnchorElementMeta
  | HTMLAbbrElementMeta
  | HTMLAddressElementMeta
  | HTMLAppletElementMeta
  | HTMLAreaElementMeta
  | HTMLArticleElementMeta
  | HTMLAsideElementMeta
  | HTMLAudioElementMeta
  | HTMLBElementMeta
  | HTMLBaseElementMeta
  | HTMLBaseFontElementMeta
  | HTMLBdiElementMeta
  | HTMLBdoElementMeta
  | HTMLQuoteElementMeta
  | HTMLBodyElementMeta
  | HTMLBRElementMeta
  | HTMLButtonElementMeta
  | HTMLCanvasElementMeta
  | HTMLTableCaptionElementMeta
  | HTMLCiteElementMeta
  | HTMLCodeElementMeta
  | HTMLColElementMeta
  | HTMLTableColElementMeta
  | HTMLDataElementMeta
  | HTMLDataListElementMeta
  | HTMLDDElementMeta
  | HTMLDelElementMeta
  | HTMLDetailsElementMeta
  | HTMLDFNElementMeta
  | HTMLDialogElementMeta
  | HTMLDirectoryElementMeta
  | HTMLDivElementMeta
  | HTMLDListElementMeta
  | HTMLDtElementMeta
  | HTMLEmElementMeta
  | HTMLEmbedElementMeta
  | HTMLFieldSetElementMeta
  | HTMLFigcaptionElementMeta
  | HTMLFigureElementMeta
  | HTMLFontElementMeta
  | HTMLFooterElementMeta
  | HTMLFormElementMeta
  | HTMLFrameElementMeta
  | HTMLFrameSetElementMeta
  | HTMLHeading1ElementMeta
  | HTMLHeading2ElementMeta
  | HTMLHeading3ElementMeta
  | HTMLHeading4ElementMeta
  | HTMLHeading5ElementMeta
  | HTMLHeading6ElementMeta
  | HTMLHeadElementMeta
  | HTMLHeaderElementMeta
  | HTMLHGroupElementMeta
  | HTMLHRElementMeta
  | HTMLHtmlElementMeta
  | HTMLIElementMeta
  | HTMLIFrameElementMeta
  | HTMLImageElementMeta
  | HTMLInputElementMeta
  | HTMLInsElementMeta
  | HTMLKBDElementMeta
  | HTMLLabelElementMeta
  | HTMLLegendElementMeta
  | HTMLLIElementMeta
  | HTMLLinkElementMeta
  | HTMLMainElementMeta
  | HTMLMapElementMeta
  | HTMLMarkElementMeta
  | HTMLMarqueeElementMeta
  | HTMLMenuElementMeta
  | HTMLMetaElementMeta
  | HTMLMeterElementMeta
  | HTMLNavElementMeta
  | HTMLNoscriptElementMeta
  | HTMLObjectElementMeta
  | HTMLOListElementMeta
  | HTMLOptgroupElementMeta
  | HTMLOptionElementMeta
  | HTMLOutputElementMeta
  | HTMLPElementMeta
  | HTMLParamElementMeta
  | HTMLPictureElementMeta
  | HTMLPreElementMeta
  | HTMLProgressElementMeta
  | HTMLQElementMeta
  | HTMLRpElementMeta
  | HTMLRtElementMeta
  | HTMLRubyElementMeta
  | HTMLSElementMeta
  | HTMLSampElementMeta
  | HTMLScriptElementMeta
  | HTMLSectionElementMeta
  | HTMLSelectElementMeta
  | HTMLSlotElementMeta
  | HTMLSmallElementMeta
  | HTMLSourceElementMeta
  | HTMLSpanElementMeta
  | HTMLStrongElementMeta
  | HTMLStyleElementMeta
  | HTMLSubElementMeta
  | HTMLSummaryElementMeta
  | HTMLSupElementMeta
  | HTMLTableElementMeta
  | HTMLTbodyElementMeta
  | HTMLTdElementMeta
  | HTMLTemplateElementMeta
  | HTMLTextareaElementMeta
  | HTMLTfootElementMeta
  | HTMLThElementMeta
  | HTMLTheadElementMeta
  | HTMLTimeElementMeta
  | HTMLTitleElementMeta
  | HTMLTrElementMeta
  | HTMLTrackElementMeta
  | HTMLUElementMeta
  | HTMLUListElementMeta
  | HTMLVarElementMeta
  | HTMLVideoElementMeta
  | HTMLWbrElementMeta
