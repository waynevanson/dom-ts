/**
 * @since 8.1.0
 */
import { either as E, option as O } from "fp-ts"
import * as RIO from "fp-ts-contrib/ReaderIO"
import { pipe } from "fp-ts/function"
import { ElementsTagNames, MatchElementsByTagName } from "./meta"

export { appendChild, contains, ownerDocument, unsafeAppendChild } from "./node"
export { querySelector, querySelectorAll } from "./parent-node"

/**
 * @category Constructors
 */
export function getElementById(
  elementId: string
): RIO.ReaderIO<Document, O.Option<HTMLElement>> {
  return (document) => () =>
    pipe(document.getElementById(elementId), O.fromNullable)
}

/**
 * @category Constructors
 */
export function createElement<
  K extends ElementsTagNames,
  L extends ElementsTagNames
>(
  tagName: K,
  options: { is: L }
): RIO.ReaderIO<
  Document,
  E.Either<
    HTMLUnknownElement,
    MatchElementsByTagName<K>["_element"] &
      MatchElementsByTagName<L>["_element"]
  >
>

/**
 * @category Constructors
 */
export function createElement<K extends ElementsTagNames>(
  tagName: K
): RIO.ReaderIO<
  Document,
  E.Either<HTMLUnknownElement, MatchElementsByTagName<K>["_element"]>
>

/**
 * @category Constructors
 */
export function createElement<
  K extends ElementsTagNames,
  L extends ElementsTagNames
>(
  tagName: K,
  options?: { is: L }
): RIO.ReaderIO<
  Document,
  E.Either<
    HTMLUnknownElement,
    MatchElementsByTagName<K>["_element"] &
      MatchElementsByTagName<L>["_element"]
  >
> {
  return (document) => () =>
    pipe(
      document.createElement(tagName, options),
      E.fromPredicate(
        (element) => !(element instanceof HTMLUnknownElement),
        (element) => element
      )
    )
}
