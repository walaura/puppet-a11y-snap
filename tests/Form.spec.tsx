import React from "react";
import Form from "./Form";
import getSnap, { utils, close } from "../src/index";

const { flatten } = utils;

test("Form flat snapshot to make sense", async () => {
  const component = <Form />;
  const snap = await getSnap(component);
  console.log(flatten(snap));
  expect(snap).toMatchSnapshot();
});

afterAll(() => {
  close();
});
