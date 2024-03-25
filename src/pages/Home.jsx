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
    </motion.section>
  );
};

export default Home;
