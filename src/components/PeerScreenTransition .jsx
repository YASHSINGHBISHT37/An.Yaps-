import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Favourites = () => {
    const [favoritesStocks, setFavoritesStocks] = useState([
        { stock: "Bitcoin", symbol: "BTC", value: "$61,940.20", change: "+1.52%", img: "icons/bitcoin.png", changeColor: "text-green-500" },
        { stock: "Ethereum", symbol: "ETH", value: "$2,480.30", change: "-0.84%", img: "icons/ethereum.png", changeColor: "text-red-500" },
        { stock: "Solana", symbol: "SOL", value: "$146.25", change: "+3.15%", img: "icons/solana.png", changeColor: "text-green-500" },
        { stock: "Apple Inc.", symbol: "AAPL", value: "$228.10", change: "+0.45%", img: "icons/apple.png", changeColor: "text-green-500" },
        { stock: "Bitcoin", symbol: "BTC", value: "$61,940.20", change: "+1.52%", img: "icons/bitcoin.png", changeColor: "text-green-500" },
        { stock: "Ethereum", symbol: "ETH", value: "$2,480.30", change: "-0.84%", img: "icons/ethereum.png", changeColor: "text-red-500" },
        { stock: "Solana", symbol: "SOL", value: "$146.25", change: "+3.15%", img: "icons/solana.png", changeColor: "text-green-500" },
        { stock: "Apple Inc.", symbol: "AAPL", value: "$228.10", change: "+0.45%", img: "icons/apple.png", changeColor: "text-green-500" },
        { stock: "Bitcoin", symbol: "BTC", value: "$61,940.20", change: "+1.52%", img: "icons/bitcoin.png", changeColor: "text-green-500" },
        { stock: "Ethereum", symbol: "ETH", value: "$2,480.30", change: "-0.84%", img: "icons/ethereum.png", changeColor: "text-red-500" },
        { stock: "Solana", symbol: "SOL", value: "$146.25", change: "+3.15%", img: "icons/solana.png", changeColor: "text-green-500" },
        { stock: "Apple Inc.", symbol: "AAPL", value: "$228.10", change: "+0.45%", img: "icons/apple.png", changeColor: "text-green-500" },

    ]);

    const removeStock = (index) => {
        setFavoritesStocks((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="relative z-10 w-full min-h-screen bg-[#f5f5f5] px-4 py-6">
            <h1 className="text-5xl sm:text-6xl tracking-tight mb-8 mt-3 text-[#161616]/80 font-bold">
                Favorites
            </h1>

            <div className="Favorites w-full flex flex-col gap-3">
                <AnimatePresence initial={false}>
                    {favoritesStocks.map((item, i) => (
                        <motion.div
                            key={item.symbol + i}
                            className="Stock relative border border-[#e5e5e5] bg-white rounded-2xl shadow-sm flex flex-col cursor-pointer overflow-hidden"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, info) => {
                                if (info.offset.x < -120) removeStock(i);
                            }}
                            style={{ touchAction: "pan-y" }}
                            whileDrag={{ backgroundColor: "rgba(255, 0, 0, 0.15)" }}
                            exit={{
                                opacity: 0,
                                x: -300,
                                position: "absolute",
                                transition: { duration: 0.25, ease: "easeOut" },
                            }}
                            transition={{ type: "tween", ease: "easeOut", duration: 0 }}
                            layout={false} // 🚫 disables re-layout animations
                        >
                            <div className="Cont flex justify-between px-4 py-3 rounded-2xl select-none">
                                {/* Left side */}
                                <div className="Left flex items-center">
                                    <img src={item.img} alt={item.stock} className="w-10 h-10" />
                                    <div className="ml-3">
                                        <h1 className="text-[2.2vh] font-semibold">{item.stock}</h1>
                                        <p className="text-gray-500 text-[1.8vh]">{item.symbol}</p>
                                    </div>
                                </div>

                                {/* Right side */}
                                <div className="Right flex flex-col items-end">
                                    <h1 className="text-[2vh] font-semibold">{item.value}</h1>
                                    <p className={`text-[1.8vh] ${item.changeColor}`}>{item.change}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

            </div>

            {favoritesStocks.length === 0 && (
                <p className="text-center mt-10 text-gray-500 text-lg">
                    No favorite stocks left 👋
                </p>
            )}
        </div>
    );
};

export default Favourites;
