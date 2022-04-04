import classes from "./Event.module.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Event(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function onClick() {
    setIsFlipped(!isFlipped);
  }
  return (
    <section>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <div
            className={classes.outerbox}
            style={{ backgroundImage: props.source }}
          >
            <div className={classes.innerbox}>
              <div>
                <img
                  className={classes.icon}
                  alt={props.title}
                  src={props.icon}
                />
              </div>
              <div className={classes.title}>{props.title}</div>
              <div className={classes.date}>{props.date}</div>
              <div className={classes.date}>{props.time}</div>
              <div className={classes.venue}>{props.venue}</div>
              <div className={classes.actions}>
                <button onClick={onClick}>Dress Code</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={classes.backbox}>
            <div className={classes.dresstitle}>{props.dress}</div>
            <div>
              <img
                className={classes.dress}
                alt={props.title}
                src={props.back}
              />
            </div>

            <div className={classes.description}>{props.description}</div>
            <div className={classes.actions}>
              <button onClick={onClick}>Event Details</button>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </section>
  );
}

export default Event;
