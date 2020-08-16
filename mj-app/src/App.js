import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./Pages/index.js";
import "./App.css";

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
