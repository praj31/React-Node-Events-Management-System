import React from "react";
import { Redirect } from "react-router-dom";
import signupcomplete from "../assets/signup-complete.svg";
import signup from "../assets/setup.svg";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import axios from "axios";

class Signuppage extends React.Component {
  state = {
    data: {
      name: "",
      stid: "",
      passwd: "",
      confPasswd: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      axios
        .get(
          `/addStudent?name=${this.state.data.name}&id=${this.state.data.stid}&passwd=${this.state.data.passwd}`
        )
        .then(res => {
          if (!res.data) {
            errors["recordExists"] =
              "A Record with entered ID already exists! Try Again.";
            this.setState({ errors });
          } else this.setState({ loading: true });
        });
    }
  };

  validate = data => {
    const errors = {};
    const validID = /^[a-zA-Z0-9]+$/;
    const validName = /^[a-zA-Z ]+$/;
    if (!data.stid) errors.stid = "Can't be blank!";
    if (!data.name) errors.name = "Can't be blank!";
    if (!data.passwd) errors.passwd = "Can't be blank!";
    if (!data.confPasswd) errors.confPasswd = "Can't be blank!";
    if (data.stid && !validID.test(data.stid)) errors.stid = "Invalid ID";
    if (!validName.test(data.name)) errors.name = "Invalid Name";
    if (data.passwd !== data.confPasswd)
      errors.checkPasswd = "The Confirmed Password doesn't match!";
    return errors;
  };

  render() {
    const { stid, name, passwd, confPasswd, errors } = this.state;
    if (this.state.loading) return <SignUpComplete />;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 500 }}>
          <Header as="h1" color="black" textAlign="center">
            Extra Curricular Management System
          </Header>
          <img
            src={signup}
            alt="Sign In Illustration"
            width="50%"
            height="50%"
          />
          <Header as="h2" color="teal" textAlign="center">
            Quick Sign Up!
          </Header>
          <Form size="large" onSubmit={this.onSubmit} autoComplete="off">
            <Segment raised>
              <Form.Field>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
                {errors.name && <InlineError text={errors.name} />}
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  icon="id badge"
                  iconPosition="left"
                  placeholder="ID (Case Sensitive. Can't be changed.)"
                  type="text"
                  name="stid"
                  value={stid}
                  onChange={this.onChange}
                />
                {errors.stid && <InlineError text={errors.stid} />}
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="passwd"
                  value={passwd}
                  onChange={this.onChange}
                />
                {errors.passwd && <InlineError text={errors.passwd} />}
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                  name="confPasswd"
                  value={confPasswd}
                  onChange={this.onChange}
                />
                {errors.confPasswd && <InlineError text={errors.confPasswd} />}
              </Form.Field>
              <Form.Field>
                {errors.checkPasswd && (
                  <InlineError text={errors.checkPasswd} />
                )}
              </Form.Field>
              <Form.Field>
                {errors.recordExists && (
                  <InlineError text={errors.recordExists} />
                )}
              </Form.Field>
              <Button color="teal" fluid size="large">
                Sign Up
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

class SignUpComplete extends React.Component {
  state = {
    loading: false
  };
  handleOnClick = () => this.setState({ loading: true });
  render() {
    if (this.state.loading) return <Redirect push to="/"></Redirect>;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="black" textAlign="center">
            Sign Up Successful!
          </Header>
          <img
            src={signupcomplete}
            alt="Sign Up Complete"
            width="100%"
            height="100%"
          />
          <Button color="teal" fluid size="large" onClick={this.handleOnClick}>
            Login Now
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

const InlineError = ({ text }) => (
  <span style={{ color: "#ae5856" }}>{text}</span>
);

export default Signuppage;
