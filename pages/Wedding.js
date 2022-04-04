import Events from "../components/elements/Events";
import classes from "./Wedding.module.css";
import eventlist from "../components/data/eventlist";
import video1 from "../components/invitations/savethedatevideo.mp4";
import video2 from "../components/invitations/invitationvideo.mp4";

function Wedding() {
  return (
    <section className={classes.section}>
      {/*<div className={classes.heading}>When & Where</div>
      <div className={classes.whenwhere}>
        <div className={classes.when}>18-19th November, 2021</div>
        <div className={classes.outer}>
          <div className={classes.inner}></div>
        </div>
        <div className={classes.where}>Vedik Resort, Surat</div>
  </div>*/}

      <div className={classes.heading}>
        <div className={classes.hl}></div>Events
        <div className={classes.hr}></div>
      </div>
      <img
        className={classes.bordertop}
        src="./images/display/bordertop.png"
        alt="design"
      />
      <Events events={eventlist} />
      <div className={classes.meetgreet}>
        Followed by Meet & Greet from 8:30pm onwards.
      </div>

      <div className={classes.heading}>Save the Date</div>
      <video
        src={video1}
        className={classes.video1}
        controls
        autoplay
        muted
        loop
      />

      <div className={classes.heading}>E-Invite</div>
      <video
        src={video2}
        className={classes.video2}
        controls
        autoplay
        muted
        loop
      />
    </section>
  );
}

export default Wedding;
