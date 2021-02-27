/**
 * @since 8.1.0
 */
import { option as O, readonlyArray as ROA } from "fp-ts"
import { ReaderIO } from "fp-ts-contrib/ReaderIO"
import { pipe } from "fp-ts/function"
import { ElementsTagNames, MatchElementsByTagName } from "./meta"
import { fromIterable } from "./util"

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelector<K extends ElementsTagNames>(
  selector: K
): ReaderIO<ParentNode, O.Option<MatchElementsByTagName<K>["_element"]>>

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelector<A extends Element>(
  selector: string
): ReaderIO<ParentNode, O.Option<A>>

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelector<A extends Element>(
  selector: string
): ReaderIO<ParentNode, O.Option<A>> {
  return (parentNode) => () =>
    pipe(parentNode.querySelector<A>(selector), O.fromNullable)
}

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelectorAll<K extends ElementsTagNames>(
  selector: K
): ReaderIO<ParentNode, ReadonlyArray<MatchElementsByTagName<K>["_element"]>>

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelectorAll<A extends Element>(
  selector: string
): ReaderIO<ParentNode, ReadonlyArray<A>>

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelectorAll<A extends Element>(
  selector: string
): ReaderIO<ParentNode, ReadonlyArray<A>> {
  return (parentNode) => () =>
    pipe(parentNode.querySelectorAll<A>(selector), fromIterable, ROA.fromArray)
}
