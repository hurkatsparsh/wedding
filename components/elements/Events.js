import Event from "./Event";
import classes from "./Event.module.css";

function Events(props) {
  return (
    <section className={classes.list}>
      {props.events.map((event) => (
        <Event
          key={event.id}
          id={event.id}
          source={event.source}
          title={event.title}
          date={event.date}
          time={event.time}
          venue={event.venue}
          icon={event.icon}
          back={event.back}
          dress={event.dress}
          description={event.description}
        />
      ))}
    </section>
  );
}

export default Events;
