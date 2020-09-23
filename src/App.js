import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Credits from "./pages/Credits";
import GraphicDesign from "./pages/GraphicDesign";
import IndigoBall from "./pages/IndigoBall";
import HyperMock from "./pages/HyperMock";
import OtherLogos from "./pages/OtherLogos";
import OtherPrints from "./pages/OtherPrints";
import ScrollToTop from "./components/ScrollToTop";
import GDNav from "./components/GDNav";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/graphic-design">
            <GraphicDesign />
          </Route>
          <Route exact path="/graphic-design/indigo-ball">
            <IndigoBall />
            <GDNav />
          </Route>
          <Route exact path="/graphic-design/hypermock">
            <HyperMock />
            <GDNav />
          </Route>
          <Route exact path="/graphic-design/other-logos">
            <OtherLogos />
            <GDNav />
          </Route>
          <Route exact path="/graphic-design/other-prints">
            <OtherPrints />
            <GDNav />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/credits">
            <Credits />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
