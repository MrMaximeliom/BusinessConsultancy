import { motion } from "framer-motion";
import AuroraHero from "../components/AuroraHero";
import HorizontalScrollCarousel from "../components/HorizontalScrollCarousel";
const Home = () => {
  return (
    <motion.section
      className="h-screen bg-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <AuroraHero />
        <HorizontalScrollCarousel />
      </div>
      <div className="bg-gray-950">
        <div className="mx-auto max-w-7xl py-14 sm:px-6 sm:py-15 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 pb-10 shadow-2x sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boost your productivity!
                <br />
                Start using our app today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
