// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .resizeWindow(350, 600)
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('.section')
      .assert.containsText('#export-button', 'EXPORTAR PLANILHA')
      .assert.elementCount('img', 8)
      .waitForElementVisible('a[id=set-hidden-customer]', 1000)
      .click('a[id=set-hidden-customer]')
      .end()
  }
}