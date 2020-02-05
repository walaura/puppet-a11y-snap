const snap = require("./index.js");

const getRegions = node => {
  let regions = [];
  if (node.role === "region") {
    regions.push(node);
  }
  if (node.children) {
    for (child of node.children) {
      regions = [...regions, ...getRegions(child)];
    }
  }
  return regions;
};

(async () => {
  //console.log(await snap(`<button>lol hi</button><div>yaaaa</div>`));
  console.log(
    getRegions(
      (
        await snap(`
        <div>
        <nav role="region" aria-label="navigation"><ul><li><a href="/">waaa</a></li></ul></nav>
        <header><a href="/">waaa</a></header>
        </div>
        `)
      )[0]
    )
  );
})();
