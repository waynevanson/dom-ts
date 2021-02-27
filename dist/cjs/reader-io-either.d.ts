import { ioEither as IOE, reader as R, readerT } from "fp-ts";
import { Monad3 } from "fp-ts/lib/Monad";
import { MonadIO3 } from "fp-ts/lib/MonadIO";
import { MonadThrow3 } from "fp-ts/lib/MonadThrow";
export declare const URI = "ReaderIOEither";
export declare type URI = typeof URI;
export interface ReaderIOEither<R, E, A> extends R.Reader<R, IOE.IOEither<E, A>> {
}
declare module "fp-ts/HKT" {
    interface URItoKind3<R, E, A> {
        readonly [URI]: ReaderIOEither<R, E, A>;
    }
}
export declare const ask: <R, E>() => readerT.ReaderT2<"IOEither", R, E, R>, asks: <R, E, A>(f: (r: R) => A) => readerT.ReaderT2<"IOEither", R, E, A>, fromIOEither: <R, E, A>(ma: IOE.IOEither<E, A>) => readerT.ReaderT2<"IOEither", R, E, A>, fromReader: <R, E, A>(ma: R.Reader<R, A>) => readerT.ReaderT2<"IOEither", R, E, A>, of: <R, E, A>(a: A) => readerT.ReaderT2<"IOEither", R, E, A>;
export declare const Monad: Monad3<URI>;
export declare const MonadThrow: MonadThrow3<URI>;
export declare const MonadIO: MonadIO3<URI>;
export declare const fromIO: <R, E, A>(fa: import("fp-ts/lib/IO").IO<A>) => ReaderIOEither<R, E, A>;
export declare const ReaderIOEither: {
    fromIO: <R, E, A>(fa: import("fp-ts/lib/IO").IO<A>) => ReaderIOEither<R, E, A>;
    of: <R_1, E_1, A_1>(a: A_1) => ReaderIOEither<R_1, E_1, A_1>;
    ap: <R_2, E_2, A_2, B>(fab: ReaderIOEither<R_2, E_2, (a: A_2) => B>, fa: ReaderIOEither<R_2, E_2, A_2>) => ReaderIOEither<R_2, E_2, B>;
    URI: "ReaderIOEither";
    map: <R_3, E_3, A_3, B_1>(fa: ReaderIOEither<R_3, E_3, A_3>, f: (a: A_3) => B_1) => ReaderIOEither<R_3, E_3, B_1>;
    chain: <R_4, E_4, A_4, B_2>(fa: ReaderIOEither<R_4, E_4, A_4>, f: (a: A_4) => ReaderIOEither<R_4, E_4, B_2>) => ReaderIOEither<R_4, E_4, B_2>;
    throwError: <R_5, E_5, A_5>(e: E_5) => ReaderIOEither<R_5, E_5, A_5>;
};
export declare const ap: <R, E, A>(fa: ReaderIOEither<R, E, A>) => <B>(fab: ReaderIOEither<R, E, (a: A) => B>) => ReaderIOEither<R, E, B>, apFirst: <R, E, B>(fb: ReaderIOEither<R, E, B>) => <A>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, A>, apSecond: <R, E, B>(fb: ReaderIOEither<R, E, B>) => <A>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B>, chain: <R, E, A, B>(f: (a: A) => ReaderIOEither<R, E, B>) => (ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B>, chainFirst: <R, E, A, B>(f: (a: A) => ReaderIOEither<R, E, B>) => (ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, A>, flatten: <R, E, A>(mma: ReaderIOEither<R, E, ReaderIOEither<R, E, A>>) => ReaderIOEither<R, E, A>, map: <A, B>(f: (a: A) => B) => <R, E>(fa: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B>, filterOrElse: {
    <E, A, B extends A>(refinement: import("fp-ts/lib/function").Refinement<A, B>, onFalse: (a: A) => E): <R>(ma: ReaderIOEither<R, E, A>) => ReaderIOEither<R, E, B>;
    <E_1, A_1>(predicate: import("fp-ts/lib/function").Predicate<A_1>, onFalse: (a: A_1) => E_1): <R_1>(ma: ReaderIOEither<R_1, E_1, A_1>) => ReaderIOEither<R_1, E_1, A_1>;
}, fromEither: <R, E, A>(ma: import("fp-ts/lib/Either").Either<E, A>) => ReaderIOEither<R, E, A>, fromOption: <E>(onNone: import("fp-ts/lib/function").Lazy<E>) => <R, A>(ma: import("fp-ts/lib/Option").Option<A>) => ReaderIOEither<R, E, A>, fromPredicate: {
    <E, A, B extends A>(refinement: import("fp-ts/lib/function").Refinement<A, B>, onFalse: (a: A) => E): <U>(a: A) => ReaderIOEither<U, E, B>;
    <E_1, A_1>(predicate: import("fp-ts/lib/function").Predicate<A_1>, onFalse: (a: A_1) => E_1): <R>(a: A_1) => ReaderIOEither<R, E_1, A_1>;
};
