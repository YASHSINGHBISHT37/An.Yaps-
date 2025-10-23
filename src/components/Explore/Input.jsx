import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

const Input = () => {
    const inputRef = useRef(null)
    const [userInput, setUserInput] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const API = 'd3sjt61r01qpdd5k0v60d3sjt61r01qpdd5k0v6g'

    useEffect(() => {
        if (!userInput) {
            setSuggestions([])
            return
        }

        const stockSuggestion = async () => {
            try {
                const res = await axios.get(`https://finnhub.io/api/v1/search?q=${userInput}&token=${API}`)
                const results = res.data.result || []

                // Fetch company logos for top 5 results (to avoid spamming API)
                const withLogos = await Promise.allSettled(
                    results.slice(0, 5).map(async (stock) => {
                        const logoRes = await axios.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${stock.displaySymbol}&token=${API}`)
                        return { ...stock, logo: logoRes.data.logo || null };
                    })
                )

                setSuggestions(withLogos.filter((r) => r.status === "fulfilled").map((r) => r.value))

            } catch (error) {
                console.log('Error fetching stock suggestions:', error)
                setSuggestions([])
            }
        }

        const deBounce = setTimeout(stockSuggestion, 300)
        return () => clearTimeout(deBounce)

    }, [userInput])

    const clearInput = () => {
        setUserInput('')
        setSuggestions([])
        inputRef.current.focus()
    }

    const capital = (text) => {
        if (!text) return ''
        return text.charAt(0).toUpperCase() + text.slice(1)
    }


    return (
        <div className='w-screen h-auto relative z-50'>
            <div className="w-screen h-auto flex items-center px-3">
                <div className="relative w-full">

                    <div className="Search-Stock relative z-50 flex items-center bg-[#161616] border overflow-auto border-white/50 rounded-4xl px-3 py-2 pr-6 space-x-2">
                        <img src="icons/search.png" className="h-6 opacity-50" />
                        <input
                            ref={inputRef}
                            value={userInput}
                            type="text"
                            placeholder="Search Stock..."
                            className="w-full z-50 outline-0 focus:border-white/80"
                            onChange={(e) => {
                                const value = e.target.value
                                const capital = value.charAt(0).toUpperCase() + value.slice(1)
                                setUserInput(capital)
                            }} />

                        <AnimatePresence>
                            {userInput && (
                                <motion.img
                                    key='closeIcon'
                                    src="icons/close.png"
                                    initial={{ opacity: 0, x: 30, rotate: 90 }}
                                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                                    exit={{ opacity: 0, x: 30, rotate: 90 }}
                                    transition={{ duration: 0.25, ease: 'easeInOut' }}

                                    className='absolute top-1/2 right-4 -translate-y-1/2 h-3.5 z-50 cursor-pointer'
                                    onClick={clearInput}
                                />
                            )}
                        </AnimatePresence>
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

                                className={`suggestions absolute top-0 mt-1 left-0 border border-white/50 border-t-0 rounded-3xl w-full h-auto overflow-auto bg-[#161616]/70 backdrop-blur-[3vh]`}>
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

                                            <div className='w-full flex items-center space-x-3'>
                                                <img src={stock.logo || 'icons/stock.png'} className="w-7 h-7 rounded-full bg-white/10 p-1 object-contain" />

                                                <div className="w-full flex items-center justify-between">
                                                    <span className='text-sm text-white'>{capital(stock.description)}</span>
                                                    <span className="opacity-60 text-xs uppercase">({stock.displaySymbol})</span>
                                                </div>
                                            </div>
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
