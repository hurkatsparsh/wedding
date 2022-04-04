import { Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Wedding from "./pages/Wedding";
import Couple from "./pages/Couple";
import Hosts from "./pages/Hosts";
import Gallerycmp from "./pages/Gallerycmp";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Layout from "./components/Layout/Layout";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <style>
              {
                'body {background-image: url("./images/display/back10.jpg");background-attachment:fixed;'
              }
            </style>
            <HomePage />
          </Route>
          <Route path="/wedding">
            <style>
              {
                'body {background-image: url("./images/display/back10.jpg");background-attachment:fixed;'
              }
            </style>
            <Wedding />
          </Route>
          <Route path="/couple">
            <style>
              {
                'body {background-image: url("./images/display/back9.png");background-attachment:fixed;'
              }
            </style>
            <Couple />
          </Route>
          <Route path="/hosts">
            <style>
              {
                'body {background-image: url("./images/display/back9.png");background-attachment:fixed;'
              }
            </style>
            <Hosts />
          </Route>
          <Route path="/gallery">
            <style>
              {
                'body {background-image: url("./images/display/back10.jpg");background-attachment:fixed;'
              }
            </style>
            <Gallerycmp />
          </Route>
          <Route path="/contact">
            <style>
              {'body {background-image: url("./images/display/back6.jpg");'}
            </style>
            <Contact />
          </Route>
          <Route path="/faq">
            <style>
              {
                'body {background-image: url("./images/display/back10.jpg");background-attachment:fixed;'
              }
            </style>
            <FAQ />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
