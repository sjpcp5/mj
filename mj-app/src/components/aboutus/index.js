import React, { Component } from "react";

export default class Aboutus extends Component {
  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-lg col-md-5">
                        <div className="about-img">
                          <img
                            src="assets/img/Profile.jpg"
                            className="img-fluid rounded b-shadow-a"
                            alt="assets/img/Profile.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                        Civil rights and discrimination law firm dedicated
                        especially to protecting LGBT rights, fighting sexual
                        harassment, hostile work environment, and hostile
                        educational environment.
                      </p>
                      <p className="lead">
                        I consider myself a litigator, I love the courtroom and
                        action that goes on there. I love to argue! I like to
                        stand up for my clients and fight. About 50 percent of
                        my clients are trans people. That’s the most rewarding
                        part of my job — advocating for the LGBT community
                      </p>
                      <p className="lead">
                        Nulla porttitor accumsan tincidunt. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Nulla
                        porttitor accumsan tincidunt. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
