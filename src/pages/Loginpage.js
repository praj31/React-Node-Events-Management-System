import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import axios from "axios";

class Loginpage extends React.Component {
  state = {
    name: "",
    id: "",
    designation: 0,
    loading: false,
  };

  submit = (data) => {
    axios.get(`/getDestinationPage?id=${data.stid}`).then((res) => {
      this.setState({
        name: res.data.name,
        id: data.stid,
        designation: res.data.designation,
        loading: true,
      });
    });
  };
  render() {
    const { name, designation, loading, id } = this.state;
    if (loading) {
      if (designation === 1)
        return (
          <Redirect push to={{ pathname: "/student", state: { name, id } }} />
        );
      else if (designation === 2)
        return (
          <Redirect push to={{ pathname: "/organizer", state: { name, id } }} />
        );
      else if (designation === 3)
        return (
          <Redirect push to={{ pathname: "/admin", state: { name, id } }} />
        );
    } else return <LoginForm submit={this.submit} />;
  }
}

// <Link to={{ pathname: '/loading', state: { toPage: '/signup'}}}>Sign Up.</Link>
export default Loginpage;
