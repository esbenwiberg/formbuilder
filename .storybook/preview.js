export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ['Introduction', 'GetStarted', 'Builders', 'Examples', [ 'Basic', 'Advanced', 'Wizardry' ]],
    }
  }
}