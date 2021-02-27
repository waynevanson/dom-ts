/**
 * This module should be ported to and replaced with `ReaderIOOption` in `fp-ts-contrib`.
 *
 * @since 8.1.0
 */
import { readerT } from "fp-ts";
import { IOOption as IOO } from "fp-ts-contrib";
import { Monad2 } from "fp-ts/lib/Monad";
/**
 * @since 8.1.0
 */
export declare const URI = "ReaderIOOption";
/**
 * @since 8.1.0
 */
export declare type URI = typeof URI;
/**
 * @since 8.1.0
 */
export interface ReaderIOOption<R, A> {
    (r: R): IOO.IOOption<A>;
}
declare module "fp-ts/HKT" {
    interface URItoKind2<E, A> {
        readonly [URI]: ReaderIOOption<E, A>;
    }
}
export declare const ask: <R>() => readerT.ReaderT1<"IOOption", R, R>, asks: <R, A>(f: (r: R) => A) => readerT.ReaderT1<"IOOption", R, A>, fromM: <R, A>(ma: IOO.IOOption<A>) => readerT.ReaderT1<"IOOption", R, A>, fromReader: <R, A>(ma: import("fp-ts/lib/Reader").Reader<R, A>) => readerT.ReaderT1<"IOOption", R, A>, of: <R, A>(a: A) => readerT.ReaderT1<"IOOption", R, A>;
export declare const Monad: Monad2<URI>;
export declare const ReaderIOOption: {
    of: <E, A>(a: A) => ReaderIOOption<E, A>;
    ap: <E_1, A_1, B>(fab: ReaderIOOption<E_1, (a: A_1) => B>, fa: ReaderIOOption<E_1, A_1>) => ReaderIOOption<E_1, B>;
    URI: "ReaderIOOption";
    map: <E_2, A_2, B_1>(fa: ReaderIOOption<E_2, A_2>, f: (a: A_2) => B_1) => ReaderIOOption<E_2, B_1>;
    chain: <E_3, A_3, B_2>(fa: ReaderIOOption<E_3, A_3>, f: (a: A_3) => ReaderIOOption<E_3, B_2>) => ReaderIOOption<E_3, B_2>;
};
export declare const ap: <E, A>(fa: ReaderIOOption<E, A>) => <B>(fab: ReaderIOOption<E, (a: A) => B>) => ReaderIOOption<E, B>, chain: <E, A, B>(f: (a: A) => ReaderIOOption<E, B>) => (ma: ReaderIOOption<E, A>) => ReaderIOOption<E, B>, apFirst: <E, B>(fb: ReaderIOOption<E, B>) => <A>(fa: ReaderIOOption<E, A>) => ReaderIOOption<E, A>, apSecond: <E, B>(fb: ReaderIOOption<E, B>) => <A>(fa: ReaderIOOption<E, A>) => ReaderIOOption<E, B>, chainFirst: <E, A, B>(f: (a: A) => ReaderIOOption<E, B>) => (ma: ReaderIOOption<E, A>) => ReaderIOOption<E, A>, flatten: <E, A>(mma: ReaderIOOption<E, ReaderIOOption<E, A>>) => ReaderIOOption<E, A>, map: <A, B>(f: (a: A) => B) => <E>(fa: ReaderIOOption<E, A>) => ReaderIOOption<E, B>;
