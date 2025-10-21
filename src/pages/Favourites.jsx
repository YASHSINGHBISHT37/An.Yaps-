import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Favourites = () => {
  const [favoritesStocks, setFavoritesStocks] = useState([
    { stock: "Bitcoin", symbol: "BTC", value: "$61,940.20", change: "+1.52%", img: "icons/bitcoin.png", changeColor: "text-green-500" },
    { stock: "Ethereum", symbol: "ETH", value: "$2,480.30", change: "-0.84%", img: "icons/ethereum.png", changeColor: "text-red-500" },
    { stock: "Solana", symbol: "SOL", value: "$146.25", change: "+3.15%", img: "icons/solana.png", changeColor: "text-green-500" },
    { stock: "Apple Inc.", symbol: "AAPL", value: "$228.10", change: "+0.45%", img: "icons/apple.png", changeColor: "text-green-500" },
    { stock: "Microsoft", symbol: "MSFT", value: "$412.60", change: "+0.32%", img: "icons/microsoft.png", changeColor: "text-green-500" },
    { stock: "NVIDIA", symbol: "NVDA", value: "$1,083.50", change: "+2.20%", img: "icons/nvidia.png", changeColor: "text-green-500" },
    { stock: "Amazon", symbol: "AMZN", value: "$182.90", change: "-0.40%", img: "icons/amazon.png", changeColor: "text-red-500" },
    { stock: "Meta", symbol: "META", value: "$503.70", change: "+1.12%", img: "icons/meta.png", changeColor: "text-green-500" },
    { stock: "Google", symbol: "GOOGL", value: "$179.23", change: "+0.67%", img: "icons/google.png", changeColor: "text-green-500" },
    { stock: "Tesla", symbol: "TSLA", value: "$245.17", change: "-0.22%", img: "icons/tesla.png", changeColor: "text-red-500" },
  ]);

  const removeStock = (index) => {
    setFavoritesStocks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative z-1 w-screen min-h-screen px-4 py-4">
      <h1 className="text-7xl tracking-tighter mb-10 mt-3 text-[#161616]/80 font-bold">
        Favorites
      </h1>

      <div className="Favorites w-full h-auto">
        <AnimatePresence>
          {favoritesStocks.map((item, i) => (
            <motion.div
              key={item.symbol + i}
              layout // ✅ layout only on parent (instant reposition)
              transition={{ layout: { duration: 0 } }}
              className="relative"
            >
              {/* Red “Remove” background */}
              <div className="absolute inset-0 flex justify-end items-center pr-6 opacity-60 text-[#FC0005] font-bold pointer-events-none z-10">
                <img src="icons/remove.png" className="w-4 mr-1" />
                <h1>Remove</h1>
              </div>

              <AnimatePresence>
                <motion.div
                  key={item.symbol + i + "-inner"}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, info) => {
                    if (info.offset.x < -150) removeStock(i);
                  }}
                  animate={{ x: 0 }}
                  whileDrag={{ scale: 1.04 }}
                  style={{ touchAction: "pan-y" }}
                  transition={{ type: "tween", ease: "easeOut", duration: 0 }}
                  exit={{
                    opacity: 0,
                    x: -250, // ✅ only this card moves left
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className="relative z-20 mb-2 rounded-3xl border border-white/10 backdrop-blur-2xl bg-white/5 flex flex-col cursor-pointer select-none"
                >
                  <div className="flex justify-between px-2 pr-4 py-1 rounded-3xl hover:bg-white/10 active:bg-white/20 transition">
                    {/* Left */}
                    <div className="flex items-center">
                      <img src={item.img} alt={item.stock} className="w-11" />
                      <div className="ml-3 pt-1">
                        <h1 className="text-[1.8vh] leading-3.5">
                          {item.stock}
                        </h1>
                        <div className="flex flex-col">
                          <p className="opacity-50 text-[1.5vh]">{item.symbol}</p>
                          <p className="opacity-80 text-[1.6vh]">{item.value}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col items-end pt-3.5">
                      <h1 className="text-[1.8vh] mt-1.5">{item.value}</h1>
                      <p
                        className={`opacity-60 text-[1.6vh] leading-2 ${item.changeColor}`}
                      >
                        {item.change}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Favourites;
