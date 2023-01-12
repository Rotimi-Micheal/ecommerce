import React, { Fragment } from "react";

const Title = ({ title }) => {
  return (
    <Fragment>
      <div className="grid items-center ">
        <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
          {title}
        </h1>
      </div>
    </Fragment>
  );
};

export default Title;
