import "../src/styles/globals.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        `Universe`,
        `Galaxy`,
        [
          `Header`,
          `Hero Section`,
          `Project Gallery Section`,
          `About Me Section`,
          `Blog Feed Section`,
          `Contact Me Section`,
          `Footer`,
        ],
        `Solar System`,
        `Planet`,
        `Black Hole`,
      ],
    },
  },
}
