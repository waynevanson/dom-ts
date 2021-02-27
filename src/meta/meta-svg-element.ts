/**
 * @summary
 * All SVGElements with matching tagNames and eventMaps
 *
 * @since 8.1.0
 */
import { MetaElement } from "./meta-element"

/**
 * @category Constructors
 * @since 8.1.0
 */
export type MatchSVGElementTagName<
  R extends string
> = AllSVGElementMeta extends infer T
  ? T extends MetaSVGElement<R, infer E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never

/**
 * @category Constructors
 * @since 8.1.0
 */
export type MatchSVGElementElement<
  E extends SVGElement
> = AllSVGElementMeta extends infer T
  ? T extends MetaSVGElement<infer R, E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never

/**
 * @category Constructors
 * @since 8.1.0
 */
export type MatchSVGElementEventMap<
  A extends SVGElementEventMap
> = AllSVGElementMeta extends infer T
  ? T extends MetaSVGElement<infer R, infer E, A>
    ? MetaElement<R, E, A>
    : never
  : never

/**
 * @category Constructors
 * @since 8.1.0
 */
export type MetaSVGElement<
  R extends string,
  E extends SVGElement,
  A extends SVGElementEventMap = SVGElementEventMap
> = MetaElement<R, E, A>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGAElementMeta = MetaSVGElement<"a", SVGAElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGCircleElementMeta = MetaSVGElement<"circle", SVGCircleElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGClipPathElementMeta = MetaSVGElement<
  "clipPath",
  SVGClipPathElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGDefsElementMeta = MetaSVGElement<"defs", SVGDefsElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGDescElementMeta = MetaSVGElement<"desc", SVGDescElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGEllipseElementMeta = MetaSVGElement<"ellipse", SVGEllipseElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEBlendElementMeta = MetaSVGElement<"feBlend", SVGFEBlendElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEColorMatrixElementMeta = MetaSVGElement<
  "feColorMatrix",
  SVGFEColorMatrixElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEComponentTransferElementMeta = MetaSVGElement<
  "feComponentTransfer",
  SVGFEComponentTransferElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFECompositeElementMeta = MetaSVGElement<
  "feComposite",
  SVGFECompositeElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEConvolveMatrixElementMeta = MetaSVGElement<
  "feConvolveMatrix",
  SVGFEConvolveMatrixElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEDiffuseLightingElementMeta = MetaSVGElement<
  "feDiffuseLighting",
  SVGFEDiffuseLightingElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEDisplacementMapElementMeta = MetaSVGElement<
  "feDisplacementMap",
  SVGFEDisplacementMapElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEDistantLightElementMeta = MetaSVGElement<
  "feDistantLight",
  SVGFEDistantLightElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEFloodElementMeta = MetaSVGElement<"feFlood", SVGFEFloodElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEFuncAElementMeta = MetaSVGElement<"feFuncA", SVGFEFuncAElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEFuncBElementMeta = MetaSVGElement<"feFuncB", SVGFEFuncBElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEFuncGElementMeta = MetaSVGElement<"feFuncG", SVGFEFuncGElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEFuncRElementMeta = MetaSVGElement<"feFuncR", SVGFEFuncRElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEGaussianBlurElementMeta = MetaSVGElement<
  "feGaussianBlur",
  SVGFEGaussianBlurElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEImageElementMeta = MetaSVGElement<"feImage", SVGFEImageElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEMergeElementMeta = MetaSVGElement<"feMerge", SVGFEMergeElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEMergeNodeElementMeta = MetaSVGElement<
  "feMergeNode",
  SVGFEMergeNodeElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEMorphologyElementMeta = MetaSVGElement<
  "feMorphology",
  SVGFEMorphologyElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEOffsetElementMeta = MetaSVGElement<
  "feOffset",
  SVGFEOffsetElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFEPointLightElementMeta = MetaSVGElement<
  "fePointLight",
  SVGFEPointLightElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFESpecularLightingElementMeta = MetaSVGElement<
  "feSpecularLighting",
  SVGFESpecularLightingElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFESpotLightElementMeta = MetaSVGElement<
  "feSpotLight",
  SVGFESpotLightElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFETileElementMeta = MetaSVGElement<"feTile", SVGFETileElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFETurbulenceElementMeta = MetaSVGElement<
  "feTurbulence",
  SVGFETurbulenceElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGFilterElementMeta = MetaSVGElement<"filter", SVGFilterElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGForeignObjectElementMeta = MetaSVGElement<
  "foreignObject",
  SVGForeignObjectElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGGElementMeta = MetaSVGElement<"g", SVGGElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGImageElementMeta = MetaSVGElement<"image", SVGImageElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGLineElementMeta = MetaSVGElement<"line", SVGLineElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGLinearGradientElementMeta = MetaSVGElement<
  "linearGradient",
  SVGLinearGradientElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGMarkerElementMeta = MetaSVGElement<"marker", SVGMarkerElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGMaskElementMeta = MetaSVGElement<"mask", SVGMaskElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGMetadataElementMeta = MetaSVGElement<
  "metadata",
  SVGMetadataElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGPathElementMeta = MetaSVGElement<"path", SVGPathElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGPatternElementMeta = MetaSVGElement<"pattern", SVGPatternElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGPolygonElementMeta = MetaSVGElement<"polygon", SVGPolygonElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGPolylineElementMeta = MetaSVGElement<
  "polyline",
  SVGPolylineElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGRadialGradientElementMeta = MetaSVGElement<
  "radialGradient",
  SVGRadialGradientElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGRectElementMeta = MetaSVGElement<"rect", SVGRectElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGScriptElementMeta = MetaSVGElement<"script", SVGScriptElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGStopElementMeta = MetaSVGElement<"stop", SVGStopElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGStyleElementMeta = MetaSVGElement<"style", SVGStyleElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGSVGElementMeta = MetaSVGElement<"svg", SVGSVGElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGSwitchElementMeta = MetaSVGElement<"switch", SVGSwitchElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGSymbolElementMeta = MetaSVGElement<"symbol", SVGSymbolElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGTextElementMeta = MetaSVGElement<"text", SVGTextElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGTextPathElementMeta = MetaSVGElement<
  "textPath",
  SVGTextPathElement
>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGTitleElementMeta = MetaSVGElement<"title", SVGTitleElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGTSpanElementMeta = MetaSVGElement<"tspan", SVGTSpanElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGUseElementMeta = MetaSVGElement<"use", SVGUseElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type SVGViewElementMeta = MetaSVGElement<"view", SVGViewElement>

/**
 * @category Constructors
 * @since 8.1.0
 */
export type AllSVGElementMeta =
  | SVGAElementMeta
  | SVGCircleElementMeta
  | SVGClipPathElementMeta
  | SVGDefsElementMeta
  | SVGDescElementMeta
  | SVGEllipseElementMeta
  | SVGFEBlendElementMeta
  | SVGFEColorMatrixElementMeta
  | SVGFEComponentTransferElementMeta
  | SVGFECompositeElementMeta
  | SVGFEConvolveMatrixElementMeta
  | SVGFEDiffuseLightingElementMeta
  | SVGFEDisplacementMapElementMeta
  | SVGFEDistantLightElementMeta
  | SVGFEFloodElementMeta
  | SVGFEFuncAElementMeta
  | SVGFEFuncBElementMeta
  | SVGFEFuncGElementMeta
  | SVGFEFuncRElementMeta
  | SVGFEGaussianBlurElementMeta
  | SVGFEImageElementMeta
  | SVGFEMergeElementMeta
  | SVGFEMergeNodeElementMeta
  | SVGFEMorphologyElementMeta
  | SVGFEOffsetElementMeta
  | SVGFEPointLightElementMeta
  | SVGFESpecularLightingElementMeta
  | SVGFESpotLightElementMeta
  | SVGFETileElementMeta
  | SVGFETurbulenceElementMeta
  | SVGFilterElementMeta
  | SVGForeignObjectElementMeta
  | SVGGElementMeta
  | SVGImageElementMeta
  | SVGLineElementMeta
  | SVGLinearGradientElementMeta
  | SVGMarkerElementMeta
  | SVGMaskElementMeta
  | SVGMetadataElementMeta
  | SVGPathElementMeta
  | SVGPatternElementMeta
  | SVGPolygonElementMeta
  | SVGPolylineElementMeta
  | SVGRadialGradientElementMeta
  | SVGRectElementMeta
  | SVGScriptElementMeta
  | SVGStopElementMeta
  | SVGStyleElementMeta
  | SVGSVGElementMeta
  | SVGSwitchElementMeta
  | SVGSymbolElementMeta
  | SVGTextElementMeta
  | SVGTextPathElementMeta
  | SVGTitleElementMeta
  | SVGTSpanElementMeta
  | SVGUseElementMeta
  | SVGViewElementMeta
