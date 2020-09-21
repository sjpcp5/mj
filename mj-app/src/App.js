import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./Pages/index.js";

import "./scss/_general.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
