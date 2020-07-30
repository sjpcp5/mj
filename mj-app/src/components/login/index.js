import React, { Component } from "react";
import authentication from "./../services/authentication";
import { Link } from "react-router-dom";
import "./../App.css";
import "./../CSS/login.css";

class login extends Component {
  returnedData;

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
      isLoading: "",
    };
  }

  //detects changes while admin input values
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  // called when admin submit the form
  onSubmit = (e) => {
    e.preventDefault();
    // this.state.isLoading = "Please wait..";
    this.setState({ isLoading: "Please wait.." });
    authentication.login(this.state.email).then((result) => {
      // console.log(result.data.message)
      console.log(result.data.objects[0].metadata.email);
      if (result.data.message === "No objects returned.") {
        this.setState({ message: "Wrong credentials, try again!!" });
        this.setState({ isLoading: "" });
        this.timeout();
      } else {
        this.setState({ message: "" });
        this.setState({ isLoading: "" });
        localStorage.setItem(
          "currentUser",
          result.data.objects[0].metadata.email
        );
        this.props.history.push("/dashboard");
      }
    });
  };

  //timeout function
  timeout() {
    setTimeout(
      function () {
        this.setState({ message: "" });
      }.bind(this),
      5000
    );
  }

  render() {
    return (
      <div>
        <div>
          <Link to="/">
            <button type="submit" className="btn btn-success">
              Back
            </button>
          </Link>{" "}
        </div>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <h2 className="active">
              <b> Admin Login </b>
            </h2>

            <form onSubmit={this.onSubmit}>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                placeholder="Enter email"
              />

              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                placeholder="Enter password"
              />

              <input type="submit" className="fadeIn fourth" value="Login" />
              <p>{this.state.isLoading}</p>
              <p className="loginalert">{this.state.message}</p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // called at the time of page load
  componentDidMount() {
    if (localStorage.getItem("currentUser")) {
      this.props.history.push("/dashboard");
    }
  }
}

export default login;
