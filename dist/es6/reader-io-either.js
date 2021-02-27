import { ioEither as IOE, readerT } from "fp-ts";
import { pipeable } from "fp-ts/pipeable";
export const URI = "ReaderIOEither";
const M = readerT.getReaderM(IOE.Monad);
export const { ask, asks, fromM: fromIOEither, fromReader, of } = M;
export const Monad = Object.assign({ URI }, M);
export const MonadThrow = Object.assign(Object.assign({}, Monad), { throwError: (e) => () => IOE.throwError(e) });
export const MonadIO = Object.assign(Object.assign({}, Monad), { fromIO: (io) => () => IOE.fromIO(io) });
export const { fromIO } = MonadIO;
//
export const ReaderIOEither = Object.assign(Object.assign({}, MonadThrow), MonadIO);
export const { ap, apFirst, apSecond, chain, chainFirst, flatten, map, filterOrElse, fromEither, fromOption, fromPredicate, } = pipeable(ReaderIOEither);
//# sourceMappingURL=reader-io-either.js.map