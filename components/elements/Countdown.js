import React from "react";
import moment, { duration } from "moment";
import classes from "./Countdown.module.css";

class Countdown extends React.Component {
  state = {
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  };

  setCountdown() {
    const futureDate = moment(this.props.futureDate);

    const today = moment();

    const clockDuration = duration(futureDate.diff(today));

    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const mins = clockDuration.minutes();
    const secs = clockDuration.seconds();

    this.setState({ days, hours, mins, secs });
  }

  componentDidMount() {
    this.setCountdown();
    this.interval = setInterval(() => {
      this.setCountdown();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={classes.wrapper}>
        {Object.keys(this.state).map((key, i) => (
          <div className={classes.circle}>
            <div className={classes.numbers}>{this.state[key]}</div>
            <div className={classes.words}>{key.toUpperCase()}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Countdown;
