import { AXNode } from "puppeteer";

export const flatten = (nodes: AXNode[]) => {
  let regions = [];

  for (let node of nodes) {
    let textChildren = [];
    let otherChildren = [];
    for (let child of node.children) {
      if (child.role === "text") {
        textChildren.push(child.name);
      } else {
        otherChildren.push(child);
      }
    }

    if (node.role !== "generic") {
      let { children, ...nodeNoChildren } = node;
      const text = textChildren.join(" ");
      if (text === nodeNoChildren.name) {
        regions.push(nodeNoChildren);
      } else {
        regions.push({ ...nodeNoChildren, text });
      }
    }
    if (otherChildren) {
      regions = [...regions, ...flatten(otherChildren)];
    }
  }
  return regions;
};

export const getHeadings = (nodes: AXNode[]) =>
  flatten(nodes).filter(node => node.role === "heading");

export const getRegions = (nodes: AXNode[]) =>
  flatten(nodes).filter(node => node.role === "region");

export const text = nodes =>
  flatten(nodes)
    .map(({ name, text }) => [name, ...text].filter(Boolean).join(" "))
    .filter(Boolean)
    .join(" ");
