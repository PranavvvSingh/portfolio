import Typed from "typed.js";
import { useEffect, useRef } from "react";
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
        className="flex flex-col-reverse md:flex-row md:flex-wrap-reverse mt-4 md:mt-12 pt-5 pb-5 justify-evenly items-center text-white px-5"
        id="home"
     >
        <div className="w-[330px] sm:w-[500px] md:w-[600px] mt-10 md:mt-0 text-center sm:text-left">
           <h3 className="text-xl">Hi! I am,</h3>
           <h1 className="mt-2 text-5xl font-bold">Pranav Singh</h1>
           <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
              I am a{" "}
              <span
                 ref={element}
                 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500"
              ></span>
           </h2>
           <p className="mt-1 mb-3 tracking-widest sm:tracking-wider text-neutral-300">
              {`I'm`} passionate about designing efficient web applications and
              committed to staying updated with the latest technologies in
              development and industry trends. I possess a strong understanding
              of data structures and algorithms, allowing me to excel in
              problem-solving.
           </p>
           <button
              className="mt-2 shadow-md shadow-red-700 bg-black rounded-full text-white font-medium px-4 py-1 text-lg"
              style={{
                 background: `linear-gradient(166deg, rgba(253,29,29,1) 20%, rgba(224,153,54,1) 100%)`,
              }}
           >
              <a
                 href="https://drive.google.com/file/d/1PD9tHLzsJuvXLwsOtKmpnYR-Z79ii32b/view?usp=sharing"
                 target="_blank"
                 rel="noreferrer noopener"
              >
                 Check Resume
              </a>
           </button>
        </div>
        <div className="w-[240px] sm:w-[260px] md:w-[300px]">
           <img
              src={profile}
              alt="profile-picture"
              className="outline rounded-full outline-offset-4 outline-orange-600"
           />
        </div>
     </div>
  )
};

export default Banner;
