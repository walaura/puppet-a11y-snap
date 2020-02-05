const puppeteer = require("puppeteer");

const harness = content => `
<!DOCTYPE html>
<html>
  <body>
    ${content}
  </body>
</html>`;

const main = async content => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(harness(content));
  const snapshot = await page.accessibility.snapshot({
    interestingOnly: false
  });

  await browser.close();
  return snapshot.children[0].children;
};

module.exports = main;
