import React, { Component } from "react";
import "../../scss/_blog.scss";

export default class Blog extends Component {
  render() {
    return (
        <section id="blog" className="blog-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Blog</h3>
                <p className="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-blog">
                <div className="card-img">
                  <a href="blog-single.html">
                    <img src="assets/img/post-1.jpg" alt className="img-fluid" />
                  </a>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">Travel</h6>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <a href="blog-single.html">See more ideas about Travel</a>
                  </h3>
                  <p className="card-description">
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta
                    dapibus. Praesent sapien massa, convallis a pellentesque nec,
                    egestas non nisi.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <a href="#">
                      <img
                        src="assets/img/Profile.jpg"
                        alt
                        className="avatar rounded-circle"
                      />
                      <span className="author">Madeline Johnson</span>
                    </a>
                  </div>
                  <div className="post-date">
                    <span className="ion-ios-clock-outline" /> 10 min
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-blog">
                <div className="card-img">
                  <a href="blog-single.html">
                    <img src="assets/img/post-2.jpg" alt className="img-fluid" />
                  </a>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">Litigation</h6>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <a href="blog-single.html">Civil Rights</a>
                  </h3>
                  <p className="card-description">
                    Proin eget tortor risus. Pellentesque in ipsum id orci porta
                    dapibus. Praesent sapien massa, convallis a pellentesque nec,
                    egestas non nisi.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <a href="#">
                      <img
                        src="assets/img/Profile.jpg"
                        alt
                        className="avatar rounded-circle"
                      />
                      <span className="author">Madeline Johnson</span>
                    </a>
                  </div>
                  <div className="post-date">
                    <span className="ion-ios-clock-outline" /> 10 min
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-blog">
                <div className="card-img">
                  <a href="blog-single.html">
                    <img src="assets/img/post-3.jpg" alt className="img-fluid" />
                  </a>
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">Gender &amp; Sexual Orientation</h6>
                    </div>
                  </div>
                  <h3 className="card-title">
                    <a href="blog-single.html">
                      June 15, 2020 in Bostock v. Clayton County,
                    </a>
                  </h3>
                  <p className="card-description">
                    This is a long awaited, very welcome decision that finally
                    recognizes what many excellent attorneys have been arguing for
                    years now, which is discriminating against a person because of
                    their sexual orientation and/or gender identity is absolutely and
                    unequivocally sex discrimination. Much grateful thanks to Justice
                    Neil Gorsuch for drafting the majority opinion, which recognizes
                    that sex cannot be separated from this equation.
                  </p>
                </div>
                <div className="card-footer">
                  <div className="post-author">
                    <a href="#">
                      <img
                        src="assets/img/Profile.jpg"
                        alt
                        className="avatar rounded-circle"
                      />
                      <span className="author">Madeline Johnson</span>
                    </a>
                  </div>
                  <div className="post-date">
                    <span className="ion-ios-clock-outline" /> 10 min
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  }
}
