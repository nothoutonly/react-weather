import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LightningBolt from "../assets/lightning.svg";
import { fetchWeather } from "../store/actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeatherData(this.state.term);
    this.setState({ term: "" });

    this.context.router.history.push("/current");
  }

  render() {
    return (
      <div>
        <div className="header">
          <h2>Weather Forecast</h2>
          <img src={LightningBolt} alt="LightningBolt" />
        </div>
        <div className="instructions">
          <p>
            Enter a city name below to get the current weather conditions for
            that area.
          </p>
        </div>
        <form className="zipcodeInput" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="For example: beijing"
            value={this.state.term}
            onChange={this.onInputChange}
            autoFocus
          />
          <button>ENTER</button>
        </form>
        <div className="history-list">history</div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
};
const mapDispatchToProps = dispatch => {
  return {
    fetchWeatherData: function(city) {
      dispatch(fetchWeather(city));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
