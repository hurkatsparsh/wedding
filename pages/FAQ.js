import classes from "./FAQ.module.css";
import questionslist from "../components/data/questionslist";

function FAQ() {
  return (
    <section className={classes.section}>
      <div className={classes.heading}>
        <div className={classes.hl}></div>Frequently asked questions
        <div className={classes.hr}></div>
      </div>

      <div className={classes.description}>
        For all our friends and family who have lots of questions, please check
        out our Q & A first!
      </div>
      <div>
        <img
          className={classes.bordertop}
          src="./images/display/bordertop.png"
          alt="design"
        />
      </div>
      {questionslist.map((question) => (
        <section className={classes.faqbox}>
          <div className={classes.questions}>
            <span className={classes.q}>Q.</span>
            {question.q}
          </div>
          <div className={classes.answers}>{question.ans}</div>
        </section>
      ))}
    </section>
  );
}

export default FAQ;
