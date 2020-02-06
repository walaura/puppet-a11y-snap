import React from "react";
import Document from "./Document";
import getSnap, { utils, close } from "../src/index";

const { getHeadings } = utils;

test("Form flat snapshot to make sense", async () => {
  const component = <Document />;
  const snap = await getSnap(component);
  console.log(getHeadings(snap));
  expect(snap).toMatchSnapshot();
});

afterAll(() => {
  close();
});
