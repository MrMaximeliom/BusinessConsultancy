import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
const Intrance = ({ border, boxShadow }) => {
  return (
    <div className="relative z-10 flex flex-col items-center">
      <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
        Beta Now Live!
      </span>
      <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
        Decrease your SaaS Churn by Over 90%
      </h1>
      <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam
        voluptates eos perspiciatis ipsam nobis voluptatum nesciunt impedit id
        cumque reprehenderit in ad aperiam saepe nostrum ea sunt, quod vero.
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
  );
};

export default Intrance;
