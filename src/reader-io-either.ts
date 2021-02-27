import { ioEither as IOE, reader as R, readerT } from "fp-ts"
import { Monad3 } from "fp-ts/lib/Monad"
import { MonadIO3 } from "fp-ts/lib/MonadIO"
import { MonadThrow3 } from "fp-ts/lib/MonadThrow"
import { pipeable } from "fp-ts/pipeable"

export const URI = "ReaderIOEither"
export type URI = typeof URI

export interface ReaderIOEither<R, E, A>
  extends R.Reader<R, IOE.IOEither<E, A>> {}

declare module "fp-ts/HKT" {
  export interface URItoKind3<R, E, A> {
    readonly [URI]: ReaderIOEither<R, E, A>
  }
}

const M = readerT.getReaderM(IOE.Monad)

export const { ask, asks, fromM: fromIOEither, fromReader, of } = M

export const Monad: Monad3<URI> = { URI, ...M }

export const MonadThrow: MonadThrow3<URI> = {
  ...Monad,
  throwError: (e) => () => IOE.throwError(e),
}

export const MonadIO: MonadIO3<URI> = {
  ...Monad,
  fromIO: (io) => () => IOE.fromIO(io),
}

export const { fromIO } = MonadIO

//
export const ReaderIOEither = { ...MonadThrow, ...MonadIO }

export const {
  ap,
  apFirst,
  apSecond,
  chain,
  chainFirst,
  flatten,
  map,
  filterOrElse,
  fromEither,
  fromOption,
  fromPredicate,
} = pipeable(ReaderIOEither)
