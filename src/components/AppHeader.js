import React from "react";
import { Redirect } from "react-router-dom";
import { Container, Header, Grid, Dropdown } from "semantic-ui-react";

class AppHeader extends React.Component {
  state = {
    loading: false,
  };
  handleLogout = () => this.setState({ loading: true });
  render() {
    if (this.state.loading) return <Redirect push to="/login" />;
    return (
      <Container>
        <Grid columns={2}>
          <Grid.Row verticalAlign="middle">
            <Grid.Column textAlign="left" verticalAlign="middle">
              <Header as="h1">Extra Curricular Management System</Header>
            </Grid.Column>
            <Grid.Column textAlign="right" verticalAlign="middle">
              <Header as="h2">
                {this.props.name}
                <Dropdown>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      icon="power"
                      text="Logout"
                      onClick={this.handleLogout}
                    ></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default AppHeader;
