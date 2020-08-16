import React from "react";
import { Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import "./home.css";

class Home extends React.Component {
  state = {
    loginClick: false,
    signupClick: false,
  };
  handleLogin = () => {
    this.setState({ loginClick: true });
  };
  handleSignup = () => {
    this.setState({ signupClick: true });
  };
  loginComplete = () => {
    console.log("There!");
  };
  render() {
    const { loginClick, signupClick } = this.state;
    if (loginClick) return <Redirect push to={{ pathname: "/login" }} />;
    else if (signupClick) return <Redirect to="/signup" />;
    else
      return (
        <div className="wrapper" style={{ display: "flex", height: "100vh" }}>
          <div className="main">
            <h1>Extra Curricular Events Management System</h1>
            <Button
              content="Login"
              size="large"
              color="green"
              onClick={this.handleLogin}
              style={{ width: "80%" }}
            />
            <Button
              content="Signup"
              size="large"
              onClick={this.handleSignup}
              style={{ width: "80%" }}
            />
          </div>
        </div>
      );
  }
}

export default Home;
