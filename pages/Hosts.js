import classes from "./Hosts.module.css";
import Hostinfo from "./../components/elements/Hostinfo";

function Hosts() {
  return (
    <section className={classes.section}>
      <div className={classes.heading}>
        <div className={classes.hl}></div>The Hosts
        <div className={classes.hr}></div>
      </div>
      <Hostinfo />
    </section>
  );
}

export default Hosts;
