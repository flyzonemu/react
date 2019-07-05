import * as React from "react";
import { render } from "react-dom";
import { Router, Route } from "react-router";
import { Link } from "react-router-dom";
import LikeButton from "./test1";
import TodoController from "./TodoController";
import App2 from "./antd1";
import { Divider } from "antd";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello 123 CodeSandbox</h1>
      <h2>Start editing 12121 to see some magic happen!</h2>
      <Divider />
      <LikeButton />
      <Divider />
      <TodoController />
      <Divider />
      <App2 />
    </div>
  );
}

const rootElement = document.getElementById("root");

render(<App />, rootElement);
