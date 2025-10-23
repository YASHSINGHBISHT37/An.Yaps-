import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const Notify = ({ close }) => {
  return (
    <div className="relative w-full h-full flex flex-col border border-white/20 rounded-3xl py-4 bg-[#161616]">

      <AnimatePresence>
        <div className="flex justify-between items-start px-4 overflow-auto px-2 border-b border-white/30">
          <motion.h1
            key='Notification'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}

            className="text-4xl mb-4">Notifications</motion.h1>
          <motion.img
            initial={{ opacity: 0, x: 30, rotate: 180 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: 30, rotate: 180 }}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}

            onClick={close}
            src="icons/close.png"
            className="cursor-pointer w-4 mr-1 mt-3.5 bg" />
        </div>



        <div className="w-full h-full rounded-3xl flex justify-center items-center p-4">
          <div className="flex justify-between items-start overflow-auto px-2">
            <motion.h1
              key='Notification'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.4, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.1 }}

              className="">No Notifications</motion.h1>
          </div>
        </div>

      </AnimatePresence>

    </div>
  );
};

export default Notify;
