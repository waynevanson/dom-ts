import * as _ from "../src/node"

describe("Node", () => {
  //eslint-disable-next-line
  describe.skip(_.appendChild, () => {})

  describe(_.contains, () => {
    const parent = document.createElement("ul")
    const child = document.createElement("li")

    parent.appendChild(child)

    test("that test structure is correct", () => {
      expect(parent.outerHTML).toMatchInlineSnapshot(`"<ul><li></li></ul>"`)
    })

    it('returns true because "child" is a child of "parent"', () => {
      expect(_.contains(child)(parent)()).toBe(true)
    })

    it('returns false because "parent" is not a child of "child"', () => {
      expect(_.contains(parent)(child)()).toBe(false)
    })
  })
})
