import React, { Fragment } from "react";

const Footer = ({ footerAPI }) => {
  const { titles, links } = footerAPI;

  const date = new Date().getFullYear();
  return (
    <Fragment>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200 ">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((item, index) => (
              <div key={index} className="grid items-center">
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {item.title}
                </h1>
              </div>
            ))}
            {links.map((footerLink, index) => (
              <ul key={index} className="grid items-center gap-1">
                {footerLink.map((link, index) => (
                  <li key={index} className="text-sm sm:text-xl">
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center ">
            <p className="text-sm md:text-center ">
              Copyright &copy; All Reserved Rights {date}
              <span className="font-semibold">
                Rotimi Micheal,React Developer
              </span>
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
