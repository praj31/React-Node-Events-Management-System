import React from "react";
import AppHeader from "../components/AppHeader";
import welcome from "../assets/welcome.svg";
import { Grid, Button, Image, Modal, Header } from "semantic-ui-react";
import PromoteStudent from "../components/PromoteStudent";
import ManageEvents from "../components/ManageEvents";
import Settings from "../components/Settings";
import DemoteStudent from "../components/DemoteStudent";
class Admin extends React.Component {
  state = {
    closeOnDimmerClick: false,
    name: "",
    id: "",
  };
  componentDidMount() {
    const { name, id } = this.props.location.state;
    this.setState({ name, id });
  }
  render() {
    const { closeOnDimmerClick, name, id } = this.state;
    return (
      <React.Fragment>
        <Grid columns={1}>
          <Grid.Row
            color="teal"
            style={{
              padding: 0,
              margin: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            columns={1}
            verticalAlign="middle"
          >
            <Grid.Column width={16}>
              <AppHeader name={name} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            columns={1}
            style={{
              padding: 0,
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid.Column
              width={12}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={welcome} size="big" alt="Welcome Illustration" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flex: "12",
                  flexWrap: "wrap",
                }}
              >
                <Modal
                  closeOnDimmerClick={closeOnDimmerClick}
                  dimmer="blurring"
                  trigger={
                    <Button
                      style={{ margin: "1%" }}
                      icon="calendar"
                      content="Manage Events"
                      size="big"
                    ></Button>
                  }
                  closeIcon
                >
                  <Header icon="calendar" content="Manage Events" />
                  <Modal.Content scrolling>
                    <ManageEvents />
                  </Modal.Content>
                </Modal>
                <Modal
                  closeOnDimmerClick={closeOnDimmerClick}
                  dimmer="blurring"
                  size="tiny"
                  trigger={
                    <Button
                      style={{ margin: "1%" }}
                      icon="add user"
                      content="Promote Student"
                      size="big"
                    ></Button>
                  }
                  closeIcon
                >
                  <Header icon="add user" content="Promote Student" />
                  <Modal.Content scrolling>
                    <PromoteStudent />
                  </Modal.Content>
                </Modal>
                <Modal
                  closeOnDimmerClick={closeOnDimmerClick}
                  dimmer="blurring"
                  size="tiny"
                  trigger={
                    <Button
                      style={{ margin: "1%" }}
                      icon="delete user"
                      content="Demote Student"
                      size="big"
                    ></Button>
                  }
                  closeIcon
                >
                  <Header icon="delete user" content="Demote Student" />
                  <Modal.Content scrolling>
                    <DemoteStudent />
                  </Modal.Content>
                </Modal>
                <Modal
                  closeOnDimmerClick={closeOnDimmerClick}
                  dimmer="blurring"
                  size="small"
                  trigger={
                    <Button
                      style={{ margin: "1%" }}
                      icon="settings"
                      content="Settings"
                      size="big"
                    ></Button>
                  }
                  closeIcon
                >
                  <Header icon="settings" content="Settings" />
                  <Modal.Content scrolling>
                    <Settings id={id} />
                  </Modal.Content>
                </Modal>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Admin;
