import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Home from "../../pages/Home";
import Favourites from "../../pages/Favourites";
import Explore from "../../pages/Explore";
import Notify from "../../pages/Notify";
import Settings from "../../pages/Settings";

import BottomNav from "../Navigation/BottomNav";

const Transition = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [openNotify, setOpenNotify] = useState(false)

    const navBtn = [
        { name: "Home", page: <Home /> },
        { name: "Favorites", page: <Favourites /> },
        { name: "Explore", page: <Explore /> },
        { name: "Settings", page: <Settings /> },
    ];

    const navigateTo = (newIndex) => {
        if (newIndex === activeIndex) return;
        setDirection(newIndex > activeIndex ? 1 : -1);
        setActiveIndex(newIndex);
    };

    return (
        <div className="relative w-screen z-1 h-screen bg-[#161616] overflow-hidden select-none">

            {/* Background layers */}
            <div className='Background-Gradient fixed -z-1 w-screen h-screen'>
                <div className='fixed top-0 left-0 bg-[#161616]/7 w-full h-screen'></div>
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
                        {navBtn[activeIndex].page}
                    </motion.div>
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {openNotify && (
                    <>
                        {/* Background blur */}
                        <motion.div
                            key="overlay-bg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5, }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 left-0 w-screen h-screen bg-[#161616] backdrop-blur-2xl z-20"
                            onClick={() => setOpenNotify(false)}
                        />

                        {/* Notify Sheet */}
                        <motion.div
                            key="notify-overlay"
                            initial={{ y: "100%", opacity: 1 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 1 }}
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                            className="fixed bottom-0 left-0 z-30 w-full h-[48vh] bg-[#161616] backdrop-blur-[1vh] border-t border-white/20 rounded-t-3xl p-4"
                        >
                            <Notify close={() => setOpenNotify(false)} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <BottomNav
                setActivePage={(pageName) => {
                    if (pageName === 'Notify') {
                        setOpenNotify((prev) => !prev)
                    } else {
                        setOpenNotify(false)
                        const newIndex = navBtn.findIndex(btn => btn.name === pageName)
                        if (newIndex !== -1) navigateTo(newIndex)
                    }

                }}
            />




        </div >
    );
};

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
        x: 0,
    },
    exit: (direction) => ({
        x: direction > 0 ? "-100%" : "100%",
    }),
};

export default Transition;
