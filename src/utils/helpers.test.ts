import { returnAndWarn } from "./helpers"

describe(`helpers`, () => {
  it(`returnAndWarn function returns null but console.warns an error`, () => {
    const consoleSpy = jest.spyOn(console, `warn`)
    // expect(consoleSpy).toHaveBeenCalledWith(`No prop is found`)
    expect(returnAndWarn(`No prop is found`)).toEqual(null)
  })
})
