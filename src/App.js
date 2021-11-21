import React, { useState, useEffect, useLayoutEffect } from "react";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Building from "./components/Building";
import Buildings from "./components/Buildings";

import GlobalStyle from "./globalStyles";
import Footer from "./components/Footer";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages";

import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buildings" component={Buildings} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/:slug" component={Building} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
