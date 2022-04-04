import classes from "./Gallerycmp.module.css";
import Gallery from "react-grid-gallery";
import gallerylist from "./../components/data/gallerylist";

function Gallerycmp() {
  return (
    <section className={classes.section}>
      <div className={classes.heading}>
        <div className={classes.hl}></div>Gallery
        <div className={classes.hr}></div>
      </div>
      <img
        className={classes.bordertop}
        src="./images/display/bordertop.png"
        alt="design"
      />
      <div className={classes.gallery}>
        <Gallery
          images={gallerylist}
          enableImageSelection={false}
          rowHeight={240}
          margin={5}
        />
      </div>
    </section>
  );
}

export default Gallerycmp;
