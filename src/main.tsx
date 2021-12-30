import React from "react";
import ReactDOM from "react-dom";
import { Navigator, Screen } from "@karrotframe/navigator";
import { MainPage } from "./page/main";

ReactDOM.render(
  <React.StrictMode>
    <Navigator theme="Cupertino" onClose={console.log}>
      <Screen path="/" component={MainPage} />
    </Navigator>
  </React.StrictMode>,
  document.getElementById("root")
);
