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
        <div className="relative w-screen h-screen bg- overflow-hidden select-none">
            {/* Background layers */}
            <div className='Background-Gradient fixed -z-1 w-screen h-screen'>
                {/* <div className='fixed top-0 left-0 bg-[#161616]/0 w-full z-1 h-screen'></div> */}
                <div className="absolute bg-white blur-2xl -left-15 rotate-18 -z-1 -top-17 w-[90vh] h-80"></div>
                <div className="absolute bg-blue-300 blur-2xl -left-10 rotate-18 -z-1 top-38 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-500 blur-2xl -left-10 rotate-18 -z-1 top-50 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-600 blur-2xl -left-10 rotate-18 -z-1 top-65 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-700 blur-2xl -left-10 rotate-18 -z-1 top-80 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-900 blur-2xl -left-10 rotate-18 -z-1 top-94 w-[70vh] h-20"></div>
                <div className="absolute move bg-[#161616] blur-[5vh] rounded-full -left-40 -z-1 top-70 w-90 h-70"></div>
                <div className="absolute bg-[#161616] blur-2xl -left-40 rotate-18 -z-10 top-110 w-[90vh] h-full"></div>
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
            <nav className="w-full fixed z-40 bottom-0 flex justify-around border-t border-white/20 bg-[#161616]/90 backdrop-blur-md py-3 rounded-t-3xl">
                {navBtn.map((btn, i) => (
                    <button
                        key={btn.name}
                        onClick={() => navigateTo(i)}
                        className={`cursor-pointer px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-300 ease-in-out ${i === activeIndex
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
