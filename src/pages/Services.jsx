import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Services</h2>
    </motion.section>
  );
};

export default Services;
