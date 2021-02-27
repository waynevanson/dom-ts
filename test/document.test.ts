import { option as O } from "fp-ts"
import { pipe } from "fp-ts/lib/function"
import * as _ from "../src/document"

describe("document", () => {
  describe(_.getElementById, () => {
    const element1 = document.createElement("div")

    element1.id = "my-id"
    document.body.appendChild(element1)

    test("fixture", () => {
      expect(document.body.outerHTML).toMatchInlineSnapshot(
        `"<body><div id=\\"my-id\\"></div></body>"`
      )
    })

    it('returns "Some(Element)" because it exists in the Document', () => {
      const result = pipe(document, _.getElementById("my-id"))()
      expect(result).toMatchObject(O.some(element1))
    })

    it('returns "None" because it does not exist in the Document', () => {
      const result = pipe(document, _.getElementById("no-my-id"))()
      expect(result).toMatchObject(O.none)
    })
  })
})
