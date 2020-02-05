import snap from "./src/getReactTree";
import React from "react";
import Button from "./Button";
import Nav from "./Nav";
import { getRegions } from "./src/utils";

const stringo = args => console.log(JSON.stringify(args, null, "  "));

(async () => {
  const navSnap = await snap(<Nav />);
  stringo(getRegions(navSnap));
})();
