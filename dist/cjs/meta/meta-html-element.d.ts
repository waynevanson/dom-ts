/**
 * @since 8.1.0
 */
import { MetaElement } from "./meta-element";
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type MatchHTMLElementTagName<R extends string> = AllHTMLElementMeta extends infer T ? T extends MetaHTMLElement<R, infer E, infer A> ? MetaElement<R, E, A> : never : never;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type MatchHTMLElementElement<E extends HTMLElement> = AllHTMLElementMeta extends infer T ? T extends MetaHTMLElement<infer R, E, infer A> ? MetaElement<R, E, A> : never : never;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type MatchHTMLElementEventMap<A extends HTMLElementEventMap> = AllHTMLElementMeta extends infer T ? T extends MetaHTMLElement<infer R, infer E, A> ? MetaElement<R, E, A> : never : never;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type MetaHTMLElement<R extends string, E extends HTMLElement, A extends ElementEventMap = HTMLElementEventMap> = MetaElement<R, E, A>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLAnchorElementMeta = MetaHTMLElement<"a", HTMLAnchorElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLAbbrElementMeta = MetaHTMLElement<"abbr", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLAddressElementMeta = MetaHTMLElement<"address", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLAppletElementMeta = MetaHTMLElement<"applet", HTMLAppletElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLAreaElementMeta = MetaHTMLElement<"area", HTMLAreaElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLArticleElementMeta = MetaHTMLElement<"article", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLAsideElementMeta = MetaHTMLElement<"aside", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLAudioElementMeta = MetaHTMLElement<"audio", HTMLAudioElement, HTMLMediaElementEventMap>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLBElementMeta = MetaHTMLElement<"b", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLBaseElementMeta = MetaHTMLElement<"base", HTMLBaseElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLBaseFontElementMeta = MetaHTMLElement<"basefont", HTMLBaseFontElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLBdiElementMeta = MetaHTMLElement<"bdi", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLBdoElementMeta = MetaHTMLElement<"bdo", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLQuoteElementMeta = MetaHTMLElement<"blockquote", HTMLQuoteElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLBodyElementMeta = MetaHTMLElement<"body", HTMLBodyElement, HTMLBodyElementEventMap>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLBRElementMeta = MetaHTMLElement<"br", HTMLBRElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLButtonElementMeta = MetaHTMLElement<"button", HTMLButtonElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLCanvasElementMeta = MetaHTMLElement<"canvas", HTMLCanvasElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTableCaptionElementMeta = MetaHTMLElement<"caption", HTMLTableCaptionElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLCiteElementMeta = MetaHTMLElement<"cite", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLCodeElementMeta = MetaHTMLElement<"code", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLColElementMeta = MetaHTMLElement<"col", HTMLTableColElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTableColElementMeta = MetaHTMLElement<"colgroup", HTMLTableColElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLDataElementMeta = MetaHTMLElement<"data", HTMLDataElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLDataListElementMeta = MetaHTMLElement<"datalist", HTMLDataListElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLDDElementMeta = MetaHTMLElement<"dd", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLDelElementMeta = MetaHTMLElement<"del", HTMLModElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLDetailsElementMeta = MetaHTMLElement<"details", HTMLDetailsElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLDFNElementMeta = MetaHTMLElement<"dfn", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLDialogElementMeta = MetaHTMLElement<"dialog", HTMLDialogElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLDirectoryElementMeta = MetaHTMLElement<"dir", HTMLDirectoryElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLDivElementMeta = MetaHTMLElement<"div", HTMLDivElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLDListElementMeta = MetaHTMLElement<"dl", HTMLDListElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLDtElementMeta = MetaHTMLElement<"dt", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLEmElementMeta = MetaHTMLElement<"em", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLEmbedElementMeta = MetaHTMLElement<"embed", HTMLEmbedElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLFieldSetElementMeta = MetaHTMLElement<"fieldset", HTMLFieldSetElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLFigcaptionElementMeta = MetaHTMLElement<"figcaption", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLFigureElementMeta = MetaHTMLElement<"figure", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLFontElementMeta = MetaHTMLElement<"font", HTMLFontElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLFooterElementMeta = MetaHTMLElement<"footer", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLFormElementMeta = MetaHTMLElement<"form", HTMLFormElement, HTMLFrameSetElementEventMap>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLFrameElementMeta = MetaHTMLElement<"frame", HTMLFrameElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLFrameSetElementMeta = MetaHTMLElement<"frameset", HTMLFrameSetElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLHeading1ElementMeta = MetaHTMLElement<"h1", HTMLHeadingElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLHeading2ElementMeta = MetaHTMLElement<"h2", HTMLHeadingElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLHeading3ElementMeta = MetaHTMLElement<"h3", HTMLHeadingElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLHeading4ElementMeta = MetaHTMLElement<"h4", HTMLHeadingElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLHeading5ElementMeta = MetaHTMLElement<"h5", HTMLHeadingElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLHeading6ElementMeta = MetaHTMLElement<"h6", HTMLHeadingElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLHeadElementMeta = MetaHTMLElement<"head", HTMLHeadElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLHeaderElementMeta = MetaHTMLElement<"header", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLHGroupElementMeta = MetaHTMLElement<"hgroup", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLHRElementMeta = MetaHTMLElement<"hr", HTMLHRElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLHtmlElementMeta = MetaHTMLElement<"html", HTMLHtmlElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLIElementMeta = MetaHTMLElement<"i", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLIFrameElementMeta = MetaHTMLElement<"iframe", HTMLIFrameElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLImageElementMeta = MetaHTMLElement<"img", HTMLImageElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLInputElementMeta = MetaHTMLElement<"input", HTMLInputElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLInsElementMeta = MetaHTMLElement<"ins", HTMLModElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLKBDElementMeta = MetaHTMLElement<"kbd", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLLabelElementMeta = MetaHTMLElement<"label", HTMLLabelElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLLegendElementMeta = MetaHTMLElement<"legend", HTMLLegendElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLLIElementMeta = MetaHTMLElement<"li", HTMLLIElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLLinkElementMeta = MetaHTMLElement<"link", HTMLLinkElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLMainElementMeta = MetaHTMLElement<"main", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLMapElementMeta = MetaHTMLElement<"map", HTMLMapElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLMarkElementMeta = MetaHTMLElement<"mark", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLMarqueeElementMeta = MetaHTMLElement<"marquee", HTMLMarqueeElement, HTMLMarqueeElementEventMap>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLMenuElementMeta = MetaHTMLElement<"menu", HTMLMenuElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLMetaElementMeta = MetaHTMLElement<"meta", HTMLMetaElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLMeterElementMeta = MetaHTMLElement<"meter", HTMLMeterElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLNavElementMeta = MetaHTMLElement<"nav", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLNoscriptElementMeta = MetaHTMLElement<"noscript", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLObjectElementMeta = MetaHTMLElement<"object", HTMLObjectElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLOListElementMeta = MetaHTMLElement<"ol", HTMLOListElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLOptgroupElementMeta = MetaHTMLElement<"optgroup", HTMLOptGroupElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLOptionElementMeta = MetaHTMLElement<"option", HTMLOptionElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLOutputElementMeta = MetaHTMLElement<"output", HTMLOutputElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLPElementMeta = MetaHTMLElement<"p", HTMLParagraphElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLParamElementMeta = MetaHTMLElement<"param", HTMLParamElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLPictureElementMeta = MetaHTMLElement<"picture", HTMLPictureElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLPreElementMeta = MetaHTMLElement<"pre", HTMLPreElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLProgressElementMeta = MetaHTMLElement<"progress", HTMLProgressElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLQElementMeta = MetaHTMLElement<"q", HTMLQuoteElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLRpElementMeta = MetaHTMLElement<"rp", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLRtElementMeta = MetaHTMLElement<"rt", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLRubyElementMeta = MetaHTMLElement<"ruby", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLSElementMeta = MetaHTMLElement<"s", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLSampElementMeta = MetaHTMLElement<"samp", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLScriptElementMeta = MetaHTMLElement<"script", HTMLScriptElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLSectionElementMeta = MetaHTMLElement<"section", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLSelectElementMeta = MetaHTMLElement<"select", HTMLSelectElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLSlotElementMeta = MetaHTMLElement<"slot", HTMLSlotElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLSmallElementMeta = MetaHTMLElement<"small", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLSourceElementMeta = MetaHTMLElement<"source", HTMLSourceElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLSpanElementMeta = MetaHTMLElement<"span", HTMLSpanElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLStrongElementMeta = MetaHTMLElement<"strong", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLStyleElementMeta = MetaHTMLElement<"style", HTMLStyleElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLSubElementMeta = MetaHTMLElement<"sub", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLSummaryElementMeta = MetaHTMLElement<"summary", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLSupElementMeta = MetaHTMLElement<"sup", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTableElementMeta = MetaHTMLElement<"table", HTMLTableElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTbodyElementMeta = MetaHTMLElement<"tbody", HTMLTableSectionElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTdElementMeta = MetaHTMLElement<"td", HTMLTableDataCellElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTemplateElementMeta = MetaHTMLElement<"template", HTMLTemplateElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTextareaElementMeta = MetaHTMLElement<"textarea", HTMLTextAreaElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTfootElementMeta = MetaHTMLElement<"tfoot", HTMLTableSectionElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLThElementMeta = MetaHTMLElement<"th", HTMLTableHeaderCellElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTheadElementMeta = MetaHTMLElement<"thead", HTMLTableSectionElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTimeElementMeta = MetaHTMLElement<"time", HTMLTimeElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTitleElementMeta = MetaHTMLElement<"title", HTMLTitleElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTrElementMeta = MetaHTMLElement<"tr", HTMLTableRowElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLTrackElementMeta = MetaHTMLElement<"track", HTMLTrackElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLUElementMeta = MetaHTMLElement<"u", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLUListElementMeta = MetaHTMLElement<"ul", HTMLUListElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLVarElementMeta = MetaHTMLElement<"var", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLVideoElementMeta = MetaHTMLElement<"video", HTMLVideoElement, HTMLMediaElementEventMap>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type HTMLWbrElementMeta = MetaHTMLElement<"wbr", HTMLElement>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare type AllHTMLElementMeta = HTMLAnchorElementMeta | HTMLAbbrElementMeta | HTMLAddressElementMeta | HTMLAppletElementMeta | HTMLAreaElementMeta | HTMLArticleElementMeta | HTMLAsideElementMeta | HTMLAudioElementMeta | HTMLBElementMeta | HTMLBaseElementMeta | HTMLBaseFontElementMeta | HTMLBdiElementMeta | HTMLBdoElementMeta | HTMLQuoteElementMeta | HTMLBodyElementMeta | HTMLBRElementMeta | HTMLButtonElementMeta | HTMLCanvasElementMeta | HTMLTableCaptionElementMeta | HTMLCiteElementMeta | HTMLCodeElementMeta | HTMLColElementMeta | HTMLTableColElementMeta | HTMLDataElementMeta | HTMLDataListElementMeta | HTMLDDElementMeta | HTMLDelElementMeta | HTMLDetailsElementMeta | HTMLDFNElementMeta | HTMLDialogElementMeta | HTMLDirectoryElementMeta | HTMLDivElementMeta | HTMLDListElementMeta | HTMLDtElementMeta | HTMLEmElementMeta | HTMLEmbedElementMeta | HTMLFieldSetElementMeta | HTMLFigcaptionElementMeta | HTMLFigureElementMeta | HTMLFontElementMeta | HTMLFooterElementMeta | HTMLFormElementMeta | HTMLFrameElementMeta | HTMLFrameSetElementMeta | HTMLHeading1ElementMeta | HTMLHeading2ElementMeta | HTMLHeading3ElementMeta | HTMLHeading4ElementMeta | HTMLHeading5ElementMeta | HTMLHeading6ElementMeta | HTMLHeadElementMeta | HTMLHeaderElementMeta | HTMLHGroupElementMeta | HTMLHRElementMeta | HTMLHtmlElementMeta | HTMLIElementMeta | HTMLIFrameElementMeta | HTMLImageElementMeta | HTMLInputElementMeta | HTMLInsElementMeta | HTMLKBDElementMeta | HTMLLabelElementMeta | HTMLLegendElementMeta | HTMLLIElementMeta | HTMLLinkElementMeta | HTMLMainElementMeta | HTMLMapElementMeta | HTMLMarkElementMeta | HTMLMarqueeElementMeta | HTMLMenuElementMeta | HTMLMetaElementMeta | HTMLMeterElementMeta | HTMLNavElementMeta | HTMLNoscriptElementMeta | HTMLObjectElementMeta | HTMLOListElementMeta | HTMLOptgroupElementMeta | HTMLOptionElementMeta | HTMLOutputElementMeta | HTMLPElementMeta | HTMLParamElementMeta | HTMLPictureElementMeta | HTMLPreElementMeta | HTMLProgressElementMeta | HTMLQElementMeta | HTMLRpElementMeta | HTMLRtElementMeta | HTMLRubyElementMeta | HTMLSElementMeta | HTMLSampElementMeta | HTMLScriptElementMeta | HTMLSectionElementMeta | HTMLSelectElementMeta | HTMLSlotElementMeta | HTMLSmallElementMeta | HTMLSourceElementMeta | HTMLSpanElementMeta | HTMLStrongElementMeta | HTMLStyleElementMeta | HTMLSubElementMeta | HTMLSummaryElementMeta | HTMLSupElementMeta | HTMLTableElementMeta | HTMLTbodyElementMeta | HTMLTdElementMeta | HTMLTemplateElementMeta | HTMLTextareaElementMeta | HTMLTfootElementMeta | HTMLThElementMeta | HTMLTheadElementMeta | HTMLTimeElementMeta | HTMLTitleElementMeta | HTMLTrElementMeta | HTMLTrackElementMeta | HTMLUElementMeta | HTMLUListElementMeta | HTMLVarElementMeta | HTMLVideoElementMeta | HTMLWbrElementMeta;
