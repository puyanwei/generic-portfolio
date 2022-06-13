import { returnAndWarn } from "./helpers"

describe(`helpers`, () => {
  it(`returnAndWarn function returns null but console.warns an error`, () => {
    console.warn = jest.fn()
    expect(returnAndWarn(`No prop is found`)).toEqual(null)

    expect(console.warn).toHaveBeenCalledWith(`No prop is found`)
  })
})
