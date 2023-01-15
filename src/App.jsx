import React, { Fragment } from "react";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import FlexContent from "./components/FlexContent";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import Stories from "./components/Stories";

import {
  footerAPI,
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
} from "./data/data";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Cart />
      <main className="flex flex-col gap-32 relative ">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </Fragment>
  );
};

export default App;
