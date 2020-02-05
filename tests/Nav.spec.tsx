import React from "react";
import Nav from "./Nav";
import getSnap, { utils } from "../src/index";

const { getRegions } = utils;
test("Link changes the class when hovered", async () => {
  const component = <Nav />;
  const snap = await getSnap(component);
  const regions = getRegions(snap);

  expect(snap).toMatchSnapshot();
  expect(regions.length).toBe(1);
});
