// Export the entire file to ensure it is found my nightwatch
export default {
  /**
     * Nightwatch functions generally take a browser parameter to interact with th ebrowser
    */
  before (browser) {
    browser.maximizeWindow()
  },

  'Testing the title of the Home Page' (browser) {
    browser.url(browser.launch_url).assert.title('QW Resource Center')
  },

  // Close the browser after test completion, failure or timeout
  after (browser) {
    browser.end()
  }
}
