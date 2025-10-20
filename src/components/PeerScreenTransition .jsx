import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Home from "../../pages/Home";
import Favourites from "../../pages/Favourites";
import Explore from "../../pages/Explore";
import Notify from "../../pages/Notify";
import Settings from "../../pages/Settings";

const Transition = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navBtn = [
    { name: "Home", component: <Home /> },
    { name: "Favorites", component: <Favourites /> },
    { name: "Explore", component: <Explore /> },
    { name: "Notify", component: <Notify /> },
    { name: "Settings", component: <Settings /> },
  ];

  const navigateTo = (newIndex) => {
    if (newIndex === activeIndex) return; // Prevent re-click animation
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative w-screen h-screen bg-[#161616] overflow-hidden select-none">
      {/* Background gradient lights */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute bg-white blur-2xl left-0 top-0 w-[80vh] h-80"></div>
        <div className="absolute bg-blue-400 blur-3xl left-10 top-60 w-[60vh] h-60"></div>
        <div className="absolute bg-blue-700 blur-3xl left-40 top-96 w-[60vh] h-60"></div>
      </div>

      {/* Animated Page Container */}
      <div className="relative h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            className="absolute w-full h-full overflow-y-auto scrollbar-none"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 350, damping: 40 },
              opacity: { duration: 0.2 },
            }}
            custom={direction}
          >
            {navBtn[activeIndex].component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="w-full fixed z-[999999999] bottom-0 flex justify-around border-t border-white/20 bg-[#161616]/90 backdrop-blur-md py-3 rounded-t-3xl">
        {navBtn.map((btn, i) => (
          <button
            key={btn.name}
            onClick={() => navigateTo(i)}
            className={`cursor-pointer px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ease-in-out ${
              i === activeIndex
                ? "bg-blue-600 text-white scale-105"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {btn.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

// Real "Peer" Sliding Animation (side-by-side feeling)
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 1,
    position: "absolute",
  }),
};

export default Transition;
