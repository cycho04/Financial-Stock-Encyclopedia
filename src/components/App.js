import React, { Fragment } from "react";
import { connect } from "react-redux";
import API from '../apis/API';

import {} from "../actions";
import Body from "./Body";
import LandingPage from "./LandingPage";
import Calendar from "./Calendar";

class App extends React.Component {
  state = { landingPage: true };

  componentDidMount() {
    API.get(`/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=8QBZDOU3TZQI8IYA`)
    .then(res => console.log(res))
  }

  generateRandomNumbers = props => {
    let randomNums = [];
    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * props);
      randomNums = [...randomNums, randomNumber];
    }
    return randomNums;
  };

  initialAnimation = () => {
    if (this.state.landingPage === true) {
      this.setState({ landingPage: !this.state.landingPage });
    }
  };

  render() {
    return (
      <Fragment>
        <LandingPage
          landingPage={this.state.landingPage}
        />
        {true ? (
          <Body landingPage={this.state.landingPage} />
        ) : (
          <Calendar landingPage={this.state.landingPage} />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
