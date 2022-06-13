import { nullifyAndWarn } from "./helpers"

describe(`helpers`, () => {
  it(`nullifyAndWarn function returns null but console.warns an error`, () => {
    console.warn = jest.fn()
    expect(nullifyAndWarn(`No prop is found`)).toEqual(null)

    expect(console.warn).toHaveBeenCalledWith(`No prop is found`)
  })
})
