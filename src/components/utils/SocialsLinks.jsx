import React, { Fragment } from "react";

const SocialsLinks = ({ icon }) => {
  return (
    <Fragment>
      <img
        src={icon}
        alt="icon/img"
        className="w-8 h-8 items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-125 hover:rotate-[360deg] rotate-0"
      />
    </Fragment>
  );
};

export default SocialsLinks;
