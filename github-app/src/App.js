import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { useSelector } from "react-redux";

import "./App.css";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import Landing from "./components/containers/Landing";
import DetailsPage from "./components/layouts/DetailsPage";

const App = () => {
  const themeObj = useSelector((state) => state.theme.theme);
  return (
    <ThemeProvider theme={themeObj}>
      <>
        <GlobalStyles />
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/:id" component={DetailsPage} />

          {/* <Route exact path="/movie/:id" component={Movie} /> */}
          <Footer />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
