import { useLayoutEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Navbar";

import gsap from "gsap";
import AnimatedRoutes from "./AnimatedRoutes";
const Intro = () => {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .to("#welcome", {
          opacity: 0,
          duration: 0.5,
        })
        .to("#sub", {
          opacity: 0,
          display: "none",
          duration: 0.5,
        })
        .to("#main", {
          display: "block",
          duration: 0.5,
        });
    }, comp);
    return () => ctx.revert();
  }, []);
  return (
    <div className="relative" ref={comp} id="container">
      <div id="sub">
        <div
          className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight  "
          id="intro-slider"
        >
          <h1 className="text-7xl" id="title-1">
            Navigating Success Together
          </h1>
          <h1 className="text-7xl" id="title-2">
            Innovation in Consulting
          </h1>
          <h1 className="text-7xl" id="title-3">
            Transforming Visions into Reality
          </h1>
        </div>

        <div className="h-screen flex bg-gray-950 justify-center place-items-center">
          <h1
            id="welcome"
            className="text-9xl font-bold text-gray-100 font-spaceGrotesk"
          >
            Welcome.
          </h1>
        </div>
      </div>
      <main className="hidden" id="main">
        <BrowserRouter>
          <Navbar />
          <AnimatedRoutes />
        </BrowserRouter>
      </main>
    </div>
  );
};

export default Intro;
