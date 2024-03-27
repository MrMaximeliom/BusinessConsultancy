import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = () => {
  return (
    <div className="bg-neutral-800">
      <ScrollSection />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll Up
        </span>
      </div> */}
    </div>
  );
};
const ScrollSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-nile-800">
      <div className="sticky top-0 flex h-1/4 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};
const cards = [
  {
    url: "/images/1.jpg",
    title: "Innovation",
    id: 1,
  },
  {
    url: "/images/2.jpg",
    title: "Strategy",
    id: 2,
  },
  {
    url: "/images/3.jpg",
    title: "Creativity",
    id: 3,
  },
  {
    url: "/images/4.jpg",
    title: "Leading",
    id: 4,
  },
  {
    url: "/images/5.jpg",
    title: "No Limits",
    id: 5,
  },
  {
    url: "/images/6.jpg",
    title: "Trustworthy",
    id: 6,
  },
  {
    url: "/images/7.jpg",
    title: "Leaders",
    id: 7,
  },
  {
    url: "/images/8.jpg",
    title: "Success Partners",
    id: 8,
  },
  {
    url: "/images/9.jpg",
    title: "Shipping Futures",
    id: 9,
  },
];

export default HorizontalScrollCarousel;
