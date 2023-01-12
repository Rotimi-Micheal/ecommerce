import React, { Fragment } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Title from "./utils/Title";
import { HeartIcon, ClockIcon, HashtagIcon } from "@heroicons/react/24/solid";

const Stories = ({ story }) => {
  const { title, news } = story;

  return (
    <Fragment>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div className="">
          <Splide>
            {news.map((item, index) => (
              <SplideSlide key={index} className="mb-0.5">
                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200 ">
                  <div className="flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={`img/story/${index}`}
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                    />
                  </div>
                  <div className="">
                    <div className="">
                      <HeartIcon className="icon-style" />
                      <span>{item.like}</span>
                      <ClockIcon className="icon-style" />
                      <span>{item.time}</span>
                      <HashtagIcon className="icon-style" />
                      <span>{item.by}</span>
                    </div>
                    <div className="">
                      <h1>{item.title}</h1>
                      <p>{item.text}</p>
                    </div>
                    <div className="">
                      <a href={item.url}>{item.btn}</a>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </Fragment>
  );
};

export default Stories;
