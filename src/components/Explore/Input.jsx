import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

const Input = () => {
    // const suggest = [
    //     { stock: "Bitcoin", symbol: "BTC", value: "$61,940.20", change: "+1.52%", img: "icons/bitcoin.png", changeColor: "text-green-500" },
    //     { stock: "Ethereum", symbol: "ETH", value: "$2,480.30", change: "-0.84%", img: "icons/ethereum.png", changeColor: "text-red-500" },
    //     { stock: "Solana", symbol: "SOL", value: "$146.25", change: "+3.15%", img: "icons/solana.png", changeColor: "text-green-500" },
    //     { stock: "Apple Inc.", symbol: "AAPL", value: "$228.10", change: "+0.45%", img: "icons/apple.png", changeColor: "text-green-500" },
    //     { stock: "Microsoft", symbol: "MSFT", value: "$412.60", change: "+0.32%", img: "icons/microsoft.png", changeColor: "text-green-500" },
    //     { stock: "NVIDIA", symbol: "NVDA", value: "$1,083.50", change: "+2.20%", img: "icons/nvidia.png", changeColor: "text-green-500" },
    //     { stock: "Amazon", symbol: "AMZN", value: "$182.90", change: "-0.40%", img: "icons/amazon.png", changeColor: "text-red-500" },
    //     { stock: "Meta", symbol: "META", value: "$503.70", change: "+1.12%", img: "icons/meta.png", changeColor: "text-green-500" },
    //     { stock: "Google", symbol: "GOOGL", value: "$179.23", change: "+0.67%", img: "icons/google.png", changeColor: "text-green-500" },
    //     { stock: "Tesla", symbol: "TSLA", value: "$245.17", change: "-0.22%", img: "icons/tesla.png", changeColor: "text-red-500" },
    //     { stock: "Bitcoin", symbol: "BTC", value: "$61,940.20", change: "+1.52%", img: "icons/bitcoin.png", changeColor: "text-green-500" },
    //     { stock: "Ethereum", symbol: "ETH", value: "$2,480.30", change: "-0.84%", img: "icons/ethereum.png", changeColor: "text-red-500" },
    //     { stock: "Solana", symbol: "SOL", value: "$146.25", change: "+3.15%", img: "icons/solana.png", changeColor: "text-green-500" },
    //     { stock: "Apple Inc.", symbol: "AAPL", value: "$228.10", change: "+0.45%", img: "icons/apple.png", changeColor: "text-green-500" },
    //     { stock: "Microsoft", symbol: "MSFT", value: "$412.60", change: "+0.32%", img: "icons/microsoft.png", changeColor: "text-green-500" },
    //     { stock: "NVIDIA", symbol: "NVDA", value: "$1,083.50", change: "+2.20%", img: "icons/nvidia.png", changeColor: "text-green-500" },
    //     { stock: "Amazon", symbol: "AMZN", value: "$182.90", change: "-0.40%", img: "icons/amazon.png", changeColor: "text-red-500" },
    //     { stock: "Meta", symbol: "META", value: "$503.70", change: "+1.12%", img: "icons/meta.png", changeColor: "text-green-500" },
    //     { stock: "Google", symbol: "GOOGL", value: "$179.23", change: "+0.67%", img: "icons/google.png", changeColor: "text-green-500" },
    //     { stock: "Tesla", symbol: "TSLA", value: "$245.17", change: "-0.22%", img: "icons/tesla.png", changeColor: "text-red-500" },
    // ]
    const inputRaf = useRef(null)
    const [userInput, setUserInput] = useState('')
    const [suggestions, SetSuggestions] = useState([])
    const API = 'd3sjt61r01qpdd5k0v60d3sjt61r01qpdd5k0v6g'

    useEffect(() => {
        if (!userInput) {
            SetSuggestions([])
            return
        }

        const stockSuggestion = async () => {
            try {
                const res = await axios.get(`https://finnhub.io/api/v1/search?q=${userInput}&token=${API}`)
                SetSuggestions(res.data.result || [])
            } catch (error) {
                console.log('Error in Stock-Suggestion.')
                SetSuggestions([])
            }
        }

        const deBounce = setTimeout(stockSuggestion, 300)
        return () => clearTimeout(deBounce)

    }, [userInput])

    const clearInput = () => {
        setUserInput('')
        SetSuggestions([])
        inputRaf.current.focus()
    }


    return (
        <div className='w-screen h-auto relative z-50'>
            <div className="w-screen h-auto flex items-center px-3">
                <div className="relative w-full">

                    <div className="Search-Stock relative z-50 flex items-center bg-[#161616] border border-white/50 rounded-4xl px-3 py-2 pr-6 space-x-2">
                        <img src="icons/search.png" className="h-6 opacity-50" />
                        <input
                            ref={inputRaf}
                            value={userInput}
                            type="text"
                            placeholder="Search Stock..."
                            className="w-full z-50 outline-0 focus:border-white/80"
                            onChange={(e) => setUserInput(e.target.value)} />
                        <img src="icons/close.png" className="absolute top-1/2 right-4 -translate-y-1/2 h-3.5 z-50 cursor-pointer" onClick={clearInput}
                        />
                    </div>

                    {/* Suggestions Box */}
                    <AnimatePresence>
                        {suggestions.length > 0 && (
                            <motion.div
                                key="suggestions"
                                initial={{ opacity: 0, y: 0, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: "auto" }}
                                exit={{ opacity: 0, y: 0, height: 0 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}

                                className={`suggestions absolute top-0 mt-1 left-0 border border-white/50 border-t-0 rounded-3xl w-full h-auto overflow-auto bg-[#161616]/70 backdrop-blur-[1vh]`}>
                                <ul className='max-h-80 overflow-auto'>
                                    {suggestions.map((stock, i) => (
                                        <motion.li
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            transition={{ delay: i * 0.03 }}
                                            key={i}
                                            className={`px-3 py-2 flex justify-between items-center cursor-pointer active:bg-white/10 hover:bg-white/20 transition-all duration-150 ease-in-out
                    ${i === 0 ? "mt-9" : ""} ${i === suggestions.length - 1 ? "" : "border-b border-white/30"}`} onClick={clearInput}>

                                            {/* <div className="flex items-center space-x-2"> */}
                                            {/* <img src={stock.img} className="w-7" /> */}
                                            {/* <h1>{stock.name}{" "}<span className="opacity-60 uppercase">({stock.symbol})</span></h1> */}
                                            {/* {stock.description} ({stock.displaySymbol}) */}
                                            {/* </div> */}

                                            <div className="flex items-center space-x-2">
                                                <span className=" capitalize">{stock.description}</span>
                                                <span className="opacity-60 uppercase">({stock.displaySymbol})</span>
                                            </div>

                                            {/* <h1 className={`text-right opacity-90 ${stock.changeColor}`}>{stock.price}</h1> */}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    )
}

export default Input
