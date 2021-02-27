# dom-ts

PLEASE NOTE this is not ready for production use. There's still a lot to do for DX to make it friendly.

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[`fp-ts`](https://github.com/gcanti/fp-ts) compatible implementations of DOM interfaces and related API's, as documented under [DOM interfaces at Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

## Installation

There are two release branches: `@latest` and `@beta`.
If you'd like to try the latest features, replace `dom-ts` with `dom-ts@beta`.

### Yarn

```sh
yarn add dom-ts fp-ts fp-ts-contrib
```

### NPM

```sh
npm install dom-ts fp-ts fp-ts-contrib
```

## Library Structure

Each DOM interface (`Node`, `ChildNode`,`Event`)

## Configuration

### Legend

|        Icon        | Status Description                         |
| :----------------: | :----------------------------------------- |
| :heavy_check_mark: | Implemented, available for use.            |
|        :o:         | Unimplemented, with plans to implement.    |
|        :x:         | Unimplemented, with no plans to implement. |

### Compatibility Table

We only add functions for methods on interfaces.
We don't need to add functions that get values.

Deprecated interfaces and methods are displayed in this list, but are noted as deprecated. They will not be implemented.
Obsolete interfaces and methods are not displayed in this list.

| Status | Methods                     | Base Interface        | Notes                                                                                       |
| :----: | :-------------------------- | :-------------------- | :------------------------------------------------------------------------------------------ |
|  :x:   |                             | Attr                  | Interface has no specific methods                                                           |
|  :o:   |                             | CDATASection          | Interface has no specific methods                                                           |
|  :o:   |                             | CharacterData         |                                                                                             |
|  :o:   | appendData                  |                       |                                                                                             |
|  :o:   | deleteData                  |                       |                                                                                             |
|  :o:   | insertData                  |                       |                                                                                             |
|  :o:   | replaceData                 |                       |                                                                                             |
|  :o:   | substringData               |                       |                                                                                             |
|  :o:   | remove                      | ChildNode             |                                                                                             |
|  :o:   | before                      |                       |                                                                                             |
|  :o:   | after                       |                       |                                                                                             |
|  :o:   | replaceWith                 |                       |                                                                                             |
|  :o:   | Constructor                 | CustomEvent           |                                                                                             |
|  :x:   | initCustomEvent             |                       |                                                                                             |
|  :o:   | Constructor                 | Document              |                                                                                             |
|  :o:   | adoptNode                   |                       |                                                                                             |
|  :x:   | createAttribute             |                       | Constructors are available in their respective modules                                      |
|  :x:   | createAttributeNS           |                       | ".."                                                                                        |
|  :x:   | createCDATASection          |                       | ".."                                                                                        |
|  :x:   | createComment               |                       | ".."                                                                                        |
|  :x:   | createEvent                 |                       | ".."                                                                                        |
|  :x:   | createNodeIterator          |                       | ".."                                                                                        |
|  :x:   | createProcessingInstruction |                       | ".."                                                                                        |
|  :x:   | createRange                 |                       | ".."                                                                                        |
|  :x:   | createTextNode              |                       | ".."                                                                                        |
|  :x:   | createTreeWalker            |                       | ".."                                                                                        |
|  :o:   | exitPictureInPicture        |                       | ".."                                                                                        |
|  :o:   | exitPointerLock             |                       | ".."                                                                                        |
|  :o:   | getElementsByClassName      |                       |                                                                                             |
|  :o:   | getElementsByTagName        |                       |                                                                                             |
|  :o:   | getElementsByTagNameNS      |                       |                                                                                             |
|  :o:   | hasStorageAccess            |                       |                                                                                             |
|  :o:   | importNode                  |                       |                                                                                             |
|  :o:   | releaseCapture              |                       |                                                                                             |
|  :o:   | requestStorageAccess        |                       |                                                                                             |
|  :o:   | getElementById              |                       |                                                                                             |
|  :o:   | querySelector               |                       |                                                                                             |
|  :o:   | querySelectorAll            |                       |                                                                                             |
|  :x:   |                             | DocumentFragment      | Interface has no specific methods                                                           |
|  :x:   |                             | DocumentType          | Interface has no specific methods                                                           |
|  :x:   |                             | DOMError              | Deprecated                                                                                  |
|  :o:   |                             | DOMException          | Interface has no specific methods, but will provide types for all different types of errors |
|  :x:   |                             | DOMImplementation     | Deprecated, but will need to double check.                                                  |
|  :x:   |                             | DOMString             | Interface has no specific methods                                                           |
|  :o:   |                             | DOMTimeStamp          | Interface has no specific methods                                                           |
|  :o:   |                             | DOMStringList         | Deprecated                                                                                  |
|  :o:   |                             | DOMTokenList          |                                                                                             |
|  :o:   | item                        |                       |                                                                                             |
|  :o:   | contains                    |                       |                                                                                             |
|  :o:   | add                         |                       |                                                                                             |
|  :o:   | remove                      |                       |                                                                                             |
|  :o:   | replace                     |                       |                                                                                             |
|  :o:   | supports                    |                       |                                                                                             |
|  :o:   | toggle                      |                       |                                                                                             |
|  :o:   | forEach (map)               |                       |                                                                                             |
|  :o:   | entries (toIterator)        |                       |                                                                                             |
|  :o:   | keys                        |                       |                                                                                             |
|  :o:   | values                      |                       |                                                                                             |
|  :o:   | Constructor                 | Element               |                                                                                             |
|  :o:   | attachShadow                |                       |                                                                                             |
|  :o:   | animate                     |                       |                                                                                             |
|  :o:   | closests                    |                       |                                                                                             |
|  :x:   | createShadowRoot            |                       | Deprecated                                                                                  |
|  :o:   | computedStyleMap            |                       |                                                                                             |
|  :o:   | getAnimations               |                       |                                                                                             |
|  :o:   | getAttribute                |                       |                                                                                             |
|  :o:   | getAttributenames           |                       |                                                                                             |
|  :o:   | getAttributeNS              |                       |                                                                                             |
|  :o:   | getboundingClientRect       |                       |                                                                                             |
|  :o:   | getClientRects              |                       |                                                                                             |
|  :o:   | getElementsByClassName      |                       |                                                                                             |
|  :o:   | getElementsByTagName        |                       |                                                                                             |
|  :o:   | getElementsbyTagnameNS      |                       |                                                                                             |
|  :o:   | hasAttribute                |                       |                                                                                             |
|  :o:   | hasAttributes               |                       |                                                                                             |
|  :o:   | hasPointerCapture           |                       |                                                                                             |
|  :o:   | insertAdjacentElement       |                       |                                                                                             |
|  :o:   | insertAdjacentElement       |                       |                                                                                             |
|  :o:   | insertAdjacentText          |                       |                                                                                             |
|  :o:   | matches                     |                       |                                                                                             |
|  :o:   | pseudo                      |                       |                                                                                             |
|  :o:   | querySelector               |                       |                                                                                             |
|  :o:   | querySelectorAll            |                       |                                                                                             |
|  :o:   | releasePointCapture         |                       |                                                                                             |
|  :o:   | removeAttribute             |                       |                                                                                             |
|  :o:   | removeAttributeNS           |                       |                                                                                             |
|  :o:   | requestFullScreen           |                       |                                                                                             |
|  :o:   | requestPointerLock          |                       |                                                                                             |
|  :o:   | scroll                      |                       |                                                                                             |
|  :o:   | scrollby                    |                       |                                                                                             |
|  :o:   | scrollintoView              |                       |                                                                                             |
|  :o:   | scrollTo                    |                       |                                                                                             |
|  :o:   | setAttribute                |                       |                                                                                             |
|  :o:   | setAttributeNS              |                       |                                                                                             |
|  :o:   | setCapture                  |                       |                                                                                             |
|  :o:   | setPointerCapture           |                       |                                                                                             |
|  :o:   | toggleAttribute             |                       |                                                                                             |
|  :o:   | Constructor                 | Event                 |                                                                                             |
|  :o:   | composedPath                |                       |                                                                                             |
|  :o:   | preventDefault              |                       |                                                                                             |
|  :o:   | stopImmediatePropogation    |                       |                                                                                             |
|  :o:   | stopPropogation             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             |                       |                                                                                             |
|  :o:   |                             | EventTarget           |                                                                                             |
|  :o:   |                             | HTMLCollection        |                                                                                             |
|  :o:   |                             | MutationObserver      |                                                                                             |
|  :o:   |                             | MutationRecord        |                                                                                             |
|  :o:   |                             | NamedNodeMap          |                                                                                             |
|  :o:   |                             | NamedNodeMap          |                                                                                             |
|  :o:   |                             | Node                  |                                                                                             |
|  :o:   |                             | NodeFilter            |                                                                                             |
|  :o:   |                             | NodeIterator          |                                                                                             |
|  :o:   |                             | NodeList              |                                                                                             |
|  :o:   |                             | ParentNode            |                                                                                             |
|  :o:   |                             | ProcessingInstruction |                                                                                             |
|  :o:   |                             | Selection             |                                                                                             |
|  :o:   |                             | Range                 |                                                                                             |
|  :o:   |                             | Text                  |                                                                                             |
|  :o:   |                             | TextDecoder           |                                                                                             |
|  :o:   |                             | TextEncoder           |                                                                                             |
|  :o:   |                             | TimeRanges            |                                                                                             |
|  :o:   |                             | TreeWalker            |                                                                                             |
|  :o:   |                             | URL                   |                                                                                             |
|  :o:   |                             | Window                |                                                                                             |
|  :o:   |                             | Worker                |                                                                                             |
|  :o:   |                             | XMLDocument           |                                                                                             |

## Usage

### Examples

### Add Custom Elements, Events

The modules under `dom-ts/meta` exports maps that define relationships between the following:

- `tagName`
- `Element`
- `EventMap`

We use this to infer some types from each other, like `EventMap` from `Element`

This is currently unsupported due to the way that Typescript has structured it's type definitions.
An issue has been opened up outlining these concerns in [Microsoft/Typescript #40689](https://github.com/microsoft/TypeScript/issues/40689)

### Custom Elements and Custom Events

We need to use _module augmentation_ via _declaration merging_ in order to have the new types available in the API.

#### Defining Elements

We have to define an element, by providing a `tagName`, `Element` and `EventMap`

Define an Element. We'll define a `HTMLGroovyElement`, named after the Emperors' New Groove

```ts
import { either as E } from "fp-ts"
import { pipe } from "fp-ts/lib/function"
import { document, eventTarget, readerIOEither as RIOE } from "../src"
import { MetaHTMLElement } from "../src/meta"

/**
 * @summary
 * This element is always groovy,
 * emitting the `groove` event every 4 seconds.
 */
export interface HTMLGroovyElement extends HTMLElement {}

export interface GrooveEvent {
  grooviness: number
  energy: number
  flow: number
  espanol: boolean
}

export interface HTMLGroovyElementEventMap extends HTMLElementEventMap {
  groove: GrooveEvent
}

export type MetaHTMLGroovyElement = MetaHTMLElement<
  "groovy",
  HTMLGroovyElement,
  HTMLGroovyElementEventMap
>

declare module "../src/meta" {
  export interface Custom {
    // Only HTMLElement's
    HTMLElements: MetaHTMLGroovyElement

    // Only SVGElement's
    // SVGElements: ...

    // Non {HTML,SVG}Element's
    // Elements
  }
}

// Now we get intellisense

const program = pipe(
  document.createElement("groovy"),
  RIOE.chainReaderIOK(
    eventTarget.addEventListener(
      "groove",
      (event) => () => console.dir(event),
      { capture: true }
    )
  )
)

program(globalThis.document)
```

## Upcoming

Generated `Meta` maps using the typescript compiler, so any updates are generated using the installed version of typescript.
