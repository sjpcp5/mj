import React, { Component } from "react";

export default class intro extends Component {
  render() {
    return (
      <div id="home" className="intro route-bg">
        <video loop muted autoPlay poster="./assets/img/LOMJMADA_Moment.jpg">
          <source src="./assets/img/LOMJMADA.mp4" type="video/mp4" />
        </video>
        <div className="overlay-itro">
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container" style={{ display: "none" }}>
                <p className="display-6 color-d">Hello, world!</p>
                <h1 className="intro-title mb-4">I am Madeline Johnson</h1>
                <p className="intro-subtitle">
                  <span className="text-slider-items">
                    Attorney,Civil Rights Law Firm, Making America Diverse
                    Again,
                  </span>
                  <strong className="text-slider" />
                </p>
                {/* <p class="pt-3">
      <a
        class="btn btn-primary btn js-scroll px-4"
        href="#about"
        role="button"
        >Learn More</a
      >
    </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
