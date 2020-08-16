import React, { Component } from "react";

export default class Contactus extends Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}
      >
        <div className="overlay-mf" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">Send Message Us</h5>
                      </div>
                      <div>
                        <form
                          action="forms/contact.php"
                          method="post"
                          role="form"
                          className="php-email-form"
                        >
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 4 chars"
                                />
                                <div className="validate" />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validate" />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validate" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows={5}
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                                <div className="validate" />
                              </div>
                            </div>
                            <div className="col-md-12 text-center mb-3">
                              <div className="loading">Loading</div>
                              <div className="error-message" />
                              <div className="sent-message">
                                Your message has been sent. Thank you!
                              </div>
                            </div>
                            <div className="col-md-12 text-center">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">Get in Touch</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          Please don't hesitate to ask me any questions. My
                          hours are Monday thru Friday 9:00 AM to 5:00 PM CST. I
                          look forward to working with you.
                        </p>
                        <ul className="list-ico">
                          <li>
                            <span className="ion-ios-location" />
                            Law Office of Madeline Johnson P.O. Box 1221 220
                            Main Street, Suite 201 Platte City, Missouri 64079
                          </li>
                          <li>
                            <span className="ion-ios-telephone" /> (816)
                            607-1836
                          </li>
                          <li>
                            <span className="ion-ios-printer" /> (816) 817-5507
                          </li>
                          <li>
                            <span className="ion-email" />{" "}
                            Madeline@lgbtlawkc.com
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/pg/Law-Office-of-Madeline-Johnson-1981857252069174/about/?ref=page_internal">
                              <span className="ico-circle">
                                <i className="ion-social-facebook" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href>
                              <span className="ico-circle">
                                <i className="ion-social-instagram" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href>
                              <span className="ico-circle">
                                <i className="ion-social-twitter" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href>
                              <span className="ico-circle">
                                <i className="ion-social-pinterest" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
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
