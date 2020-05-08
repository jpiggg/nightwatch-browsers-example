const tunnelSettings = {
  tunnel: true,
  tunnelIdentifier: "lambdatest.infra.tutu.ru-1",
};

module.exports = {
  src_folders: ["src"],
  custom_commands_path: "./commands/",
  custom_assertions_path: "./asserts/",
  selenium: {
    start_process: false,
    log_path: "./reports/visual-regression",
    host: "hub.lambdatest.com",
    port: 80,
    username: "lambdatesttutu",
    access_key: "i0eRw1B4MJwKDNIRowTQBdYCgZR0nWVUX4AW3WgTRK9odzvcJp",
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: "reports/visual-regression",
      },
      log_screenshot_data: true,
      globals: {
        waitForConditionTimeout: 5000,
      },
    },
    chrome: {
      screenshots: {
        enabled: true,
        path: "reports/visual-regression",
      },
      desiredCapabilities: {
        name: "browsers-example",
        build: "browsers-example@1.0.0",
        browserName: "chrome",
        chromeOptions: {
          args: ["--disable-gpu", "--headless"],
        },
      },
    },
    edge: {
      desiredCapabilities: {
        name: "browsers-example",
        build: "browsers-example@1.0.0",
        browserName: "MicrosoftEdge",
        platform: "Windows 10",
        version: "18.0",
        ...tunnelSettings,
        console: true,
      },
    },
    ie: {
      desiredCapabilities: {
        name: "browsers-example",
        build: "browsers-example@1.0.0",
        platform: "Windows 10",
        browserName: "Internet Explorer",
        version: "11.0",
        ...tunnelSettings,
        selenium_version: "3.13.0",
        console: true,
        network: true,
        ignoreZoomSetting: true,
        ignoreProtectedModeSettings: true,
        ensureCleanSession: true,
        unexpectedAlertBehaviour: "accept",
        nativeEvents: false,
        disablePopupBlocking: true,
        enablePersistentHover: true,
        javascriptEnabled: true,
      },
      compatibility: 11001,
      popups: true,
      flash: true,
      driver: "3.4.0",
    },
    android: {
      desiredCapabilities: {
        name: "browsers-example",
        build: "browsers-example@1.0.0",
        browserName: "Chrome",
        platformName: "Android",
        platform: "Android",
        platformVersion: "7",
        deviceName: "Galaxy S8",
      },
    },
    ios: {
      desiredCapabilities: {
        name: "browsers-example",
        build: "browsers-example@1.0.0",
        deviceName: "iPhone 8",
        platformName: "iOS",
        browserName: "Safari",
        platformVersion: "12.1",
        automationName: "XCUITest",
      },
    },
  },
};
