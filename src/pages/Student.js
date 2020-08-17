import React from "react";
import AppHeader from "../components/AppHeader";
import { Grid, Header, Button, Modal, Image } from "semantic-ui-react";
import welcome from "../assets/welcome.svg";
import UpcomingEvents from "../components/UpcomingEvents";
import axios from "axios";
import MyBookings from "../components/MyBookings";
import Notifications from "../components/Notifications";
import Settings from "../components/Settings";

class Student extends React.Component {
  state = {
    closeOnDimmerClick: false,
    hasNotification: false,
    name: "",
    id: "",
  };

  componentDidMount() {
    const { name, id } = this.props.location.state;
    this.setState({ name, id });
  }

  participate = (evid) => {
    const { id } = this.state;
    axios.get(`/bookEvent?id=${id}&evid=${evid}`).then((res) => {
      this.setState({ hasNotification: true });
    });
  };

  clearNotifications = () => this.setState({ hasNotification: false });

  newNotificationAlert = () => this.setState({ hasNotification: true });

  render() {
    const { closeOnDimmerClick, hasNotification, name, id } = this.state;
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
                  closeIcon
                  trigger={
                    <Button
                      style={{ margin: "1%" }}
                      icon="calendar"
                      content="Upcoming Events"
                      size="big"
                    />
                  }
                >
                  <Header icon="calendar" content="Upcoming Events" />
                  <Modal.Content scrolling>
                    <UpcomingEvents id={id} participate={this.participate} />
                  </Modal.Content>
                </Modal>
                <Modal
                  closeOnDimmerClick={closeOnDimmerClick}
                  dimmer="blurring"
                  closeIcon
                  trigger={
                    <Button
                      style={{ margin: "1%" }}
                      icon="list"
                      content="My Bookings"
                      size="big"
                    ></Button>
                  }
                >
                  <Header icon="list" content="My Bookings" />
                  <Modal.Content scrolling>
                    <MyBookings
                      id={id}
                      newNotification={this.newNotificationAlert}
                    />
                  </Modal.Content>
                </Modal>
                <Modal
                  closeOnDimmerClick={closeOnDimmerClick}
                  dimmer="blurring"
                  trigger={
                    <Button
                      icon="bell"
                      content="Notifications"
                      size="big"
                      style={{
                        margin: "1%",
                        background: hasNotification ? "red" : "#e0e1e2",
                        color: hasNotification ? "#fff" : "#00000099",
                      }}
                      onClick={this.clearNotifications}
                    />
                  }
                  closeIcon
                >
                  <Header icon="bell" content="Notifications" />
                  <Modal.Content scrolling>
                    <Notifications id={id} />
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

export default Student;
