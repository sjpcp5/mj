import React, { Component } from "react";

export default class Testimonials extends Component {
  render() {
    return (
      <div
        className="testimonials paralax-mf bg-image"
        style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}
      >
        <div className="overlay-mf" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="testimonial-mf" className="owl-carousel owl-theme">
                <div className="testimonial-box">
                  <div className="author-test">
                    <img
                      src="assets/img/testimonial-2.jpg"
                      alt
                      className="rounded-circle b-shadow-a"
                    />
                    <span className="author">Melissa F. Wittenborn</span>
                  </div>
                  <div className="content-test">
                    <p className="description lead">
                      Madeline is a fearless negotiator and attorney who knows
                      how to get the job done! I highly recommend her!!!
                    </p>
                    <span className="comit">
                      <i className="fa fa-quote-right" />
                    </span>
                  </div>
                </div>
                <div className="testimonial-box">
                  <div className="author-test">
                    <img
                      src="assets/img/testimonial-4.jpg"
                      alt
                      className="rounded-circle b-shadow-a"
                    />
                    <span className="author">Davis Nichin-Alicea</span>
                  </div>
                  <div className="content-test">
                    <p className="description lead">
                      Personable, friendly attorney. Does good work and is fair
                      priced. People seek her out for her expertise in
                      discrimination matters. She also does name and gender
                      marker changes.
                    </p>
                    <span className="comit">
                      <i className="fa fa-quote-right" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
