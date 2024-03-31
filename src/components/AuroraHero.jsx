import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%,${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <motion.section className="relative grid min-h-screen place-content-center overflow-hidden bg-nile-700 px-4 py-24 text-gray-200">
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="max-w-3xl bg-gradient-to-br from-gray-400 to-white bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
          START YOUR BUSINESS IN DUBAI AND UAE WITH B4B CONSULTANCY
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-2xl md:leading-relaxed text-gray-200">
          Business 4 Business Consultancy provides a wide range of business
          setup services in Dubai and UAE for start-ups. We offer the best and
          most economical business setup and company registration services in
          Dubai.
        </p>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Start Free Trial
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12"></FiArrowRight>
        </motion.button>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas color="red">
          <Stars radius={50} count={2500} factor={4} fade speed={2}></Stars>
        </Canvas>
      </div>
    </motion.section>
  );
};

export default AuroraHero;
