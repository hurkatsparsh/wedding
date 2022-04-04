import MainNavbar from "./MainNavbar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <section>
      <MainNavbar />
      <main className={classes.main}>{props.children}</main>
    </section>
  );
}

export default Layout;
