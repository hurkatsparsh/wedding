import Countdown from "../components/elements/Countdown";
import classes from "./HomePage.module.css";

function HomePage() {
  return (
    <section className={classes.section}>
      <img
        className={classes.bordertop}
        src="./images/display/bordertop.png"
        alt="design"
      />
      <div className={classes.top}>
        <div className={classes.hl}></div>
        THE WEDDING OF
        <div className={classes.hr}></div>
      </div>
      <div className={classes.heading}>Mayank & Stuti</div>
      <a
        className={classes.hashtag}
        href="https://www.instagram.com/explore/tags/themastiwedding/"
        target="_blank"
        rel="noopener noreferrer"
      >
        #TheMaStiWedding
      </a>
      <Countdown futureDate="2021-11-19 00:00:00"></Countdown>
      <div className={classes.onestop}>
        Welcome to the Official Website for Mayank & Stuti's Wedding. Your
        One-Stop destination for all things MaSti !!:p
      </div>
    </section>
  );
}

export default HomePage;
