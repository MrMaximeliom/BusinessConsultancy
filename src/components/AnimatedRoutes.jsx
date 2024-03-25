import { Route, Routes, useLocation } from "react-router-dom";
import Services from "../pages/Services";
import Home from "../pages/Home";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
      const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
