module.exports.command = function (selector) {
  const locateStrategy = "css selector";
  const ELEMENT_ID = "element-6066-11e4-a52e-4f735466cecf";

  const path = "screenshots";
  const screenshotPath = `${path}/test.png`;

  this.element(locateStrategy, selector, (element) => {
    if (element && !element.error) {
      const elementId = element.value.ELEMENT || element.value[ELEMENT_ID];
      return this.elementIdLocationInView(elementId, (location) => {
        console.log("-------location---------", location); // on ie will returned
        // {error: 'unknown method'}
        this.elementIdSize(elementId, (size) => {
          console.log("---------size----", size); // on ie will returned
          // {error: 'unknown method'}

          // some logic with size element
          this.saveScreenshot(screenshotPath, () => {
            this.assert.ok(true, "That's ok");
          });
        });
      });
    }
  });

  return this;
};
