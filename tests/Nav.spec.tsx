import React from "react";
import Nav from "./Nav";
import getSnap, { utils, close } from "../src/index";

const { getRegions } = utils;

test("Nav matches snapshot", async () => {
  const component = <Nav />;
  const snap = await getSnap(component);

  expect(snap).toMatchSnapshot();
});

test("Nav has 1 regions", async () => {
  const component = <Nav />;
  const snap = await getSnap(component);
  const regions = getRegions(snap);

  expect(regions.length).toBe(1);
});

afterAll(() => {
  close();
});
