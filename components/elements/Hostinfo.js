import classes from "./Hostinfo.module.css";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

function Hostinfo() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  function onClick1() {
    setIsFlipped1(!isFlipped1);
  }
  function onClick2() {
    setIsFlipped2(!isFlipped2);
  }
  return (
    <section className={classes.list}>
      <div className={classes.couples}>
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
          <section onClick={onClick1} className={classes.section1}>
            <div className={classes.box1}>
              <div className={classes.box2}>
                <div className={classes.name}>Hurkat's</div>
                <div className={classes.description}>
                  They are a Joint family based out of Santacruz, Mumbai for
                  last more than 42 years. Stuti’s Grand-father Shri Manakchand
                  Hurkat or more popularly known as Bauji aged 86 years is head
                  of family and is presently retired,since the age of 65 years.
                  The family’s origins are rooted from Sambharlake, Rajasthan
                  where they still have ancestral property in the heart of the
                  town.
                </div>
              </div>
            </div>
          </section>
          <section onClick={onClick1} className={classes.section1}>
            <div className={classes.box1}>
              <div className={classes.box2}>
                <img
                  className={classes.host}
                  src="./images/display/profiles/bauji.jpg"
                  alt="Manakchand Hurkat"
                />
                <div className={classes.hostname}>Shri Manakchand Hurkat</div>
                <div className={classes.relation}>Grandfather of the Bride</div>

                <div className={classes.inline}>
                  <div style={{ marginRight: "20px" }}>
                    <img
                      className={classes.host}
                      src="./images/display/profiles/sunil.jpg"
                      alt="Sunil Hurkat"
                    />
                    <div className={classes.hostname}>Sunil Hurkat</div>
                    <div className={classes.relation}>Father of the Bride</div>
                  </div>
                  <div>
                    <img
                      className={classes.host}
                      src="./images/display/profiles/vinita.jpg"
                      alt="Vinita Hurkat"
                    />
                    <div className={classes.hostname}>Vinita Hurkat</div>
                    <div className={classes.relation}>Mother of the Bride</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
          <section onClick={onClick2} className={classes.section1}>
            <div className={classes.box1}>
              <div className={classes.box2}>
                <div className={classes.name}>Somani's</div>
                <div className={classes.description}>
                  They are a joint family based out of Model Town, Delhi for
                  last more than 55 years. Mayank’s Grand-mother Smt. Jamunaji
                  Somani is a very active amongst the Maheshwari community in
                  Delhi. The family’s origins are rooted from Bewar, Rajasthan.
                </div>
              </div>
            </div>
          </section>
          <section onClick={onClick2} className={classes.box1}>
            <div className={classes.box2}>
              <img
                className={classes.host}
                src="./images/display/profiles/jamunaji.jpg"
                alt="Jamunaji Somani"
              />
              <div className={classes.hostname}>Smt Jamunaji Somani</div>
              <div className={classes.relation}>Grandmother of the Groom</div>

              <div className={classes.inline}>
                <div style={{ marginRight: "20px" }}>
                  <img
                    className={classes.host}
                    src="./images/display/profiles/atul.jpg"
                    alt="Atul Somani"
                  />
                  <div className={classes.hostname}>Atul Somani</div>
                  <div className={classes.relation}>Father of the Groom</div>
                </div>
                <div>
                  <img
                    className={classes.host}
                    src="./images/display/profiles/annu.jpg"
                    alt="Annu Somani"
                  />
                  <div className={classes.hostname}>Annu Somani</div>
                  <div className={classes.relation}>Mother of the Groom</div>
                </div>
              </div>
            </div>
          </section>
        </ReactCardFlip>
      </div>
    </section>
  );
}

export default Hostinfo;
