/**
 * @since 8.1.0
 */
import { io as IO, option as O } from "fp-ts"
import * as RIO from "fp-ts-contrib/ReaderIO"
import { constVoid, flow, identity, pipe } from "fp-ts/function"
import * as RIOO from "./reader-io-option"

/**
 * @category Constructors
 * @since 8.1.0
 */
export function contains(child: Node): RIO.ReaderIO<Node, boolean> {
  return (node) => () => node.contains(child)
}

/**
 * @category Constructors
 * @since 8.1.0
 */
export const ownerDocument: RIOO.ReaderIOOption<Node, Document> = (
  node
) => () => pipe(node.ownerDocument, O.fromNullable)

/**
 * @category Constructors
 * @since 8.1.0
 */
export function getRootNode(
  options?: Required<GetRootNodeOptions>
): RIO.ReaderIO<Node, Node> {
  return (node) => () => node.getRootNode(options)
}

/**
 * @internal
 */
function childExistsInNodeDOM(newChild: Node): RIOO.ReaderIOOption<Node, void> {
  return pipe(
    getRootNode({ composed: false }),
    RIO.chain((node) => RIO.fromIOK(contains(newChild))(node)),
    RIO.map(flow(O.fromPredicate(identity), O.map(constVoid)))
  )
}

/**
 * @category Constructors
 * @since 8.1.0
 */
export function appendChild(newChild: Node): RIOO.ReaderIOOption<Node, void> {
  return pipe(
    childExistsInNodeDOM(newChild),
    RIO.map(O.fromPredicate(O.isNone)),
    RIO.chain(O.traverse(RIO.Applicative)(() => unsafeAppendChild(newChild)))
  )
}

/**
 * @category Constructors
 * @since 8.1.0
 */
export function unsafeAppendChild(newChild: Node): RIO.ReaderIO<Node, void> {
  return (node) => pipe(() => node.appendChild(newChild), IO.map(constVoid))
}
