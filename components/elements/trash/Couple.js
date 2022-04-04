import classes from "./Couple.module.css";

function Couple(props) {
  return (
    <section className={classes.section}>
      <div className={classes.box1}>
        <div className={classes.box2}>
          <div>
            <img
              className={classes.image}
              alt={props.name}
              src={props.source}
            />
          </div>
          <div className={classes.name}>{props.name}</div>
          <div className={classes.description}>{props.description}</div>
        </div>
      </div>
    </section>
  );
}

export default Couple;
