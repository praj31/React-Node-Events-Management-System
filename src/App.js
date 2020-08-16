import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Student from "./pages/Student";
import Admin from "./pages/Admin";
import Organizer from "./pages/Organizer";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Loginpage} />
          <Route path="/signup" exact component={Signuppage} />
          <Route path="/student" exact component={Student} />
          <Route path="/organizer" exact component={Organizer} />
          <Route path="/admin" exact component={Admin} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
export default App;
