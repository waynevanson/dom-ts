import * as RIO from "fp-ts-contrib/lib/ReaderIO";
import { ElementsElements, MatchElementByElement } from "./meta";
export declare type Listener<EV extends Event> = RIO.ReaderIO<EV, void>;
/**
 * @category Constructors
 */
export declare function addEventListener<E extends ElementsElements, N extends keyof MatchElementByElement<E>["_eventMap"] & string>(name: N, listener: Listener<MatchElementByElement<E>["_eventMap"][N]>, options?: EventListenerOptions): RIO.ReaderIO<E, void>;
/**
 * @category Constructors
 */
export declare function removeEventListener<E extends ElementsElements, N extends keyof MatchElementByElement<E>["_eventMap"] & string>(name: N, listener: Listener<MatchElementByElement<E>["_eventMap"][N]>, options?: EventListenerOptions): RIO.ReaderIO<E, void>;
/**
 * @category Constructors
 */
export declare function dispatchEvent(event: Event): RIO.ReaderIO<EventTarget, boolean>;
