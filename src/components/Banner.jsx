import Typed from "typed.js";
import React, { useEffect, useRef } from "react";
import profile from "../assets/profile.png";

const Banner = () => {
  const element = useRef(null);
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["Frontend Developer", "Full Stack Developer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 500,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="flex flex-wrap-reverse mt-12 pt-5 pb-5 justify-evenly items-center text-white"
      id="home"
    >
      <div className="w-1/2">
        {/* <div> */}
        <h3 className="text-xl">Hi! I am,</h3>
        <h1 className="mt-2 text-5xl font-bold">Pranav Singh</h1>
        <h2 className="mt-3 text-3xl font-semibold">
          And I am a{" "}
          <span
            ref={element}
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"
          ></span>
        </h2>
        <p className="mt-1 mb-3 tracking-wider">
          {`I'm`} passionate about designing efficient web applications and
          committed to staying updated with the latest technologies in
          development and industry trends. I possess a strong understanding of
          data structures and algorithms, allowing me to excel in
          problem-solving.
        </p>
        <button className="mt-2 shadow-md shadow-orange-700 bg-black rounded-full text-inherit px-3 py-1">
          <a
            href="https://drive.google.com/file/d/1qgGg8qL2YuKA7-nCsN89QIYJ_k1TUGrs/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            Check Resume
          </a>
        </button>
        {/* </div> */}
      </div>
      <div className="">
        <img src={profile} alt="" style={{ maxHeight: "300px" }} />
      </div>
    </div>
  );
};

export default Banner;
