import React, { Fragment } from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ ifExists, endpoint }) => {
  const { title, items } = endpoint;

  return (
    <Fragment>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center  gap-7 lg:gap-3 mt-7 ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {items?.map((item, index) => (
            <Item {...item} key={index} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Sales;
