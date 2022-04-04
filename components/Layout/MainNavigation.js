import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.size}>
        <div className={classes.logocontainer}>
          <Link to="/">
            <img
              src="../../images/logo2.png"
              alt="Logo"
              className={classes.logo}
            />
          </Link>
        </div>
        <div className={classes.linkright}>
          <div className={classes.linkcontainer}>
            <Link className={classes.links} to="/">
              Home
            </Link>
          </div>
          <div className={classes.linkcontainer}>
            <Link className={classes.links} to="/wedding">
              Wedding
            </Link>
          </div>
          <div className={classes.linkcontainer}>
            <Link className={classes.links} to="/story">
              Story
            </Link>
          </div>
          <div className={classes.linkcontainer}>
            <Link className={classes.links} to="/hosts">
              Hosts
            </Link>
          </div>
          <div className={classes.linkcontainer}>
            <Link className={classes.links} to="/gallery">
              Gallery
            </Link>
          </div>
          <div className={classes.linkcontainer}>
            <Link className={classes.links} to="/contact">
              Get in Touch
            </Link>
          </div>
          <div className={classes.linkcontainer}>
            <Link className={classes.links} to="/faq">
              Q & A
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
