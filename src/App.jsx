import React, { Fragment } from "react";
import {
  Footer,
  Stories,
  FlexContent,
  Hero,
  Sales,
  NavBar,
  Cart,
} from "./components/Index.js";
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
