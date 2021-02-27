import * as RIO from "fp-ts-contrib/lib/ReaderIO"
import { ElementsElements, MatchElementByElement } from "./meta"

export type Listener<EV extends Event> = RIO.ReaderIO<EV, void>

/**
 * @category Constructors
 */
export function addEventListener<
  E extends ElementsElements,
  N extends keyof MatchElementByElement<E>["_eventMap"] & string
>(
  name: N,
  listener: Listener<MatchElementByElement<E>["_eventMap"][N]>,
  options?: EventListenerOptions
): RIO.ReaderIO<E, void> {
  return (target) => () =>
    target.addEventListener(name, (event) => listener(event)(), options)
}

/**
 * @category Constructors
 */
export function removeEventListener<
  E extends ElementsElements,
  N extends keyof MatchElementByElement<E>["_eventMap"] & string
>(
  name: N,
  listener: Listener<MatchElementByElement<E>["_eventMap"][N]>,
  options?: EventListenerOptions
): RIO.ReaderIO<E, void> {
  return (target) => () =>
    target.removeEventListener(name, (event) => listener(event)(), options)
}

/**
 * @category Constructors
 */
export function dispatchEvent(
  event: Event
): RIO.ReaderIO<EventTarget, boolean> {
  return (target) => () => target.dispatchEvent(event)
}
