import React, { Fragment } from "react";
import { Stories, FlexContent, Hero, Sales } from "./components";
import {
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
      <main className="flex flex-col gap-32 relative ">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
    </Fragment>
  );
};

export default App;
