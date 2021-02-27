/**
 * This module should be ported to and replaced with `ReaderIOOption` in `fp-ts-contrib`.
 *
 * @since 8.1.0
 */
import { readerT } from "fp-ts"
import { IOOption as IOO } from "fp-ts-contrib"
import { Monad2 } from "fp-ts/lib/Monad"
import { pipeable } from "fp-ts/lib/pipeable"
/**
 * @since 8.1.0
 */
export const URI = "ReaderIOOption"

/**
 * @since 8.1.0
 */
export type URI = typeof URI

/**
 * @since 8.1.0
 */
export interface ReaderIOOption<R, A> {
  (r: R): IOO.IOOption<A>
}

declare module "fp-ts/HKT" {
  export interface URItoKind2<E, A> {
    readonly [URI]: ReaderIOOption<E, A>
  }
}

const M = readerT.getReaderM(IOO.ioOption)

export const { ask, asks, fromM, fromReader, of } = M

export const Monad: Monad2<URI> = { URI, ...M }

export const ReaderIOOption = { ...Monad }

export const {
  ap,
  chain,
  apFirst,
  apSecond,
  chainFirst,
  flatten,
  map,
} = pipeable(ReaderIOOption)
