import puppeteer from "puppeteer";

const harness = (content: string) => `
<!DOCTYPE html>
<html>
  <body>
    ${content}
  </body>
</html>`;

let browser = null;
const spin = async () => {
  if (!browser) {
    console.log("launching instance");
    browser = await puppeteer.launch();
  }
  return browser;
};

const close = async () => {
  await browser.close();
  browser = null;
};

const main = async (content: string) => {
  const browser = await spin();
  const page = await browser.newPage();
  await page.setContent(harness(content));
  const snapshot = await page.accessibility.snapshot({
    interestingOnly: false
  });
  return snapshot.children[0].children;
};

export { close };
export default main;
