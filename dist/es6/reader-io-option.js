/**
 * This module should be ported to and replaced with `ReaderIOOption` in `fp-ts-contrib`.
 *
 * @since 8.1.0
 */
import { readerT } from "fp-ts";
import { IOOption as IOO } from "fp-ts-contrib";
import { pipeable } from "fp-ts/lib/pipeable";
/**
 * @since 8.1.0
 */
export const URI = "ReaderIOOption";
const M = readerT.getReaderM(IOO.ioOption);
export const { ask, asks, fromM, fromReader, of } = M;
export const Monad = Object.assign({ URI }, M);
export const ReaderIOOption = Object.assign({}, Monad);
export const { ap, chain, apFirst, apSecond, chainFirst, flatten, map, } = pipeable(ReaderIOOption);
//# sourceMappingURL=reader-io-option.js.map