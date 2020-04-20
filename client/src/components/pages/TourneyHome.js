import React, { Component } from "react";
import "../../utilities.css";
import "./TourneyHome.css";

import { Layout, Card, Button, Modal, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { post } from "../../utilities";

const { Content } = Layout;
const { confirm } = Modal;

class TourneyHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isRegistered = () => {
    return (
      this.state.justRegistered ||
      (this.props.user.tournies && this.props.user.tournies.includes(this.props.tourney))
    );
  };

  register = () => {
    const tourney = this.props.tourney.toUpperCase();
    const success = {
      message: `Success`,
      description: `You are now registered for ${tourney}`,
      duration: 3,
    };

    const fail = {
      message: `Failed`,
      description: `Failed to register for ${tourney}. Please contact GTS Staff.`,
      duration: 3,
    };

    confirm({
      title: `Register as ${this.props.user.username}`,
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to register for ${tourney}?`,
      onOk: async () => {
        try {
          await post("/api/register", { tourney: this.props.tourney });
          notification.open(success);
          this.setState({ justRegistered: true });
        } catch (e) {
          console.log("Fails");
          notification.open(fail);
        }
      },
    });
  };

  render() {
    return (
      <Content className="content">
        <h1>{this.props.tourney.toUpperCase()}</h1>
        <div className="u-flex-justifyCenter">
          <div className="TourneyHome-info">
            <div className="TourneyHome-description">
              The Expert Global Taiko Showdown, which is our 1v1 tournament targeted towards top
              players, even though it has no rank limit. The top 128 of it after qualifiers will
              face-off in a heated double-elimination bracket.
            </div>
            <div className="TourneyHome-button-box">
              <Button
                type="primary"
                size="large"
                disabled={!this.props.user._id || this.isRegistered()}
                onClick={this.register}
              >
                {!this.props.user._id && "Login to "}Register{this.isRegistered() && "ed"}
              </Button>
              <Button type="primary" size="large" href="http://google.com">
                Discord
              </Button>
            </div>
          </div>
        </div>
        <div className="TourneyHome-cardbox">
          <Card title="Restrictions" bordered={true}>
            u gotta be GOOD to play this tourny
          </Card>
          <Card title="Dates" bordered={true}>
            tomorrow is grand finals
          </Card>
          <Card title="Registration" bordered={true}>
            u cant
          </Card>
          <Card title="Prizes" bordered={true}>
            nothing
          </Card>
        </div>
      </Content>
    );
  }
}

export default TourneyHome;
