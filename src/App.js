import React from "react";
import { Compa } from "./component/CompA";
import { Compb } from "./component/CompB";

import "./component/common.css"

function App() {
  return (
    <div className="main">
      <tr>
        <Compa/>
        <Compb/>
        <Compa/>
        <Compb/>
        <Compa/>
      </tr>
      <tr>
        <Compa/>
        <Compb/>
        <Compa/>
        <Compb/>
        <Compa/>
      </tr>
    </div>
  );
}

export default App;
