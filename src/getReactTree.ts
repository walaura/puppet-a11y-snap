import snap from "./getTree";
import ReactDOMServer from "react-dom/server";

const test = async (element: React.ReactElement) => {
  return snap(ReactDOMServer.renderToString(element));
};

export default test;
