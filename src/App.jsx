// import { useState } from "react";

import testImg from "./photos/test.png";
import dukkanLogo from "./photos/dukkanLogo.png";
import dukkanMarket from "./photos/dukkan-market.png";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          {/* <span className="test-span">test</span> */}
          {/* <img src={testImg} alt="" width={250} height={250} /> */}
          <img className="dukkan-market" src={dukkanMarket} alt="" />
          <img className="dukkan-logo" src={dukkanLogo} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
