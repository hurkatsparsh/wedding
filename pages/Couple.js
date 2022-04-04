import classes from "./Couple.module.css";
import couplelist from "../components/data/couplelist";
import Timeline from "../components/elements/Timeline";

function Story() {
  return (
    <section className={classes.section}>
      <div className={classes.heading}>
        <div className={classes.hl}></div>Dulha & Dulhan
        <div className={classes.hr}></div>
      </div>

      <div className={classes.couples}>
        <section className={classes.section1}>
          <div className={classes.box1}>
            <div className={classes.box2}>
              <div>
                <img
                  className={classes.image}
                  alt={couplelist[0].name}
                  src={couplelist[0].source}
                />
              </div>
              <div className={classes.name}>{couplelist[0].name}</div>
              <div className={classes.description}>
                {couplelist[0].description}
              </div>
            </div>
          </div>
        </section>

        <section className={classes.section1}>
          <div className={classes.box1}>
            <div className={classes.box2}>
              <div>
                <img
                  className={classes.image}
                  alt={couplelist[1].name}
                  src={couplelist[1].source}
                />
              </div>
              <div className={classes.name}>{couplelist[1].name}</div>
              <div className={classes.description}>
                {couplelist[1].description}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Timeline />
    </section>
  );
}

export default Story;
