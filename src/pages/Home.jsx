import { motion } from "framer-motion";
import AuroraHero from "../components/AuroraHero";
import HorizontalScrollCarousel from "../components/HorizontalScrollCarousel";
import ImageCard from "../components/ImageCard";

const Home = () => {
  const first_content =
    "Business 4 Business Consultancy provides a wide range of business setup services in Dubai and UAE for start-ups. We offer the best and most economical business setup and company registration services in Dubai. Our services include business setup for Mainland, Free zone, and Offshore businesses. We serve as a helping hand for our esteemed clients and provide recommendations and support";
  const second_content =
    "We ensure the best auditing(By B4B Sister Company) and consulting services by customizing our services to client-specific needs. Other services that we offer are bank account opening, pro services, company liquidation, and many more. We help entrepreneurs establish their business roots and maximize productivity with our unique, innovative and strategic approach";
  const third_content =
    "As a one-stop solution, we offer complete business/company setup services for everything a new business/company needs in UAE. At B4B Consultancy, we focus on the needs of our clients and offer our services to accommodate their requirements. We are also committed to providing quality service to our clients.";
  const features = [
    {
      key: 1,
      title: "Best Team",
    },
    {
      key: 2,
      title: "Best Quality",
    },
    {
      key: 3,
      title: "Best Experience",
    },
  ];

  return (
    <motion.section
      className="h-screen bg-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AuroraHero />
      <HorizontalScrollCarousel />
      <ImageCard
        first_content={first_content}
        second_content={second_content}
        third_content={third_content}
        features={features}
      />
    </motion.section>
  );
};

export default Home;
