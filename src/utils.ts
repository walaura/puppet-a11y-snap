import { AXNode } from "puppeteer";

export const getRegions = (nodes: AXNode[]) => {
  let regions = [];

  for (let node of nodes) {
    if (node.role === "region") {
      let { children, ...nodeNoChildren } = node;
      regions.push(nodeNoChildren);
    }
    if (node.children) {
      regions = [...regions, ...getRegions(node.children)];
    }
  }
  return regions;
};
