import * as RIO from "fp-ts-contrib/ReaderIO";
import * as RIOO from "./reader-io-option";
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare function contains(child: Node): RIO.ReaderIO<Node, boolean>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare const ownerDocument: RIOO.ReaderIOOption<Node, Document>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare function getRootNode(options?: Required<GetRootNodeOptions>): RIO.ReaderIO<Node, Node>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare function appendChild(newChild: Node): RIOO.ReaderIOOption<Node, void>;
/**
 * @category Constructors
 * @since 8.1.0
 */
export declare function unsafeAppendChild(newChild: Node): RIO.ReaderIO<Node, void>;
