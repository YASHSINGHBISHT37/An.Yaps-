import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Favourites = () => {
    const [favoritesStocks, setFavoritesStocks] = useState([
        { stock: 'Bitcoin', symbol: 'BTC', value: '$61,940.20', change: '+1.52%', img: 'icons/bitcoin.png', changeColor: 'text-green-500' },
        { stock: 'Ethereum', symbol: 'ETH', value: '$2,480.30', change: '-0.84%', img: 'icons/ethereum.png', changeColor: 'text-red-500' },
        { stock: 'Solana', symbol: 'SOL', value: '$146.25', change: '+3.15%', img: 'icons/solana.png', changeColor: 'text-green-500' },
        { stock: 'Apple Inc.', symbol: 'AAPL', value: '$228.10', change: '+0.45%', img: 'icons/apple.png', changeColor: 'text-green-500' },
        { stock: 'Bitcoin', symbol: 'BTC', value: '$61,940.20', change: '+1.52%', img: 'icons/bitcoin.png', changeColor: 'text-green-500' },
        { stock: 'Ethereum', symbol: 'ETH', value: '$2,480.30', change: '-0.84%', img: 'icons/ethereum.png', changeColor: 'text-red-500' },
        { stock: 'Solana', symbol: 'SOL', value: '$146.25', change: '+3.15%', img: 'icons/solana.png', changeColor: 'text-green-500' },
        { stock: 'Apple Inc.', symbol: 'AAPL', value: '$228.10', change: '+0.45%', img: 'icons/apple.png', changeColor: 'text-green-500' },
        { stock: 'Bitcoin', symbol: 'BTC', value: '$61,940.20', change: '+1.52%', img: 'icons/bitcoin.png', changeColor: 'text-green-500' },
        { stock: 'Ethereum', symbol: 'ETH', value: '$2,480.30', change: '-0.84%', img: 'icons/ethereum.png', changeColor: 'text-red-500' },
        { stock: 'Solana', symbol: 'SOL', value: '$146.25', change: '+3.15%', img: 'icons/solana.png', changeColor: 'text-green-500' },
        { stock: 'Apple Inc.', symbol: 'AAPL', value: '$228.10', change: '+0.45%', img: 'icons/apple.png', changeColor: 'text-green-500' },
        { stock: 'Bitcoin', symbol: 'BTC', value: '$61,940.20', change: '+1.52%', img: 'icons/bitcoin.png', changeColor: 'text-green-500' },
        { stock: 'Ethereum', symbol: 'ETH', value: '$2,480.30', change: '-0.84%', img: 'icons/ethereum.png', changeColor: 'text-red-500' },
        { stock: 'Solana', symbol: 'SOL', value: '$146.25', change: '+3.15%', img: 'icons/solana.png', changeColor: 'text-green-500' },
        { stock: 'Apple Inc.', symbol: 'AAPL', value: '$228.10', change: '+0.45%', img: 'icons/apple.png', changeColor: 'text-green-500' },
    ])

    const removeStock = (stock) => {
        setFavoritesStocks(prev => prev.filter((_, i) => i !== stock));
    }

    return (
        <div className='relative z-1 w-screen min-h-screen bg- px-4 py-4 bg-amber-90'>


            <h1 className='text-7xl tracking-tighter mb-10 mt-3 text-[#161616]/80 font-bold'>Favorites</h1>

            <div className="Favorites w-full h-auto">
                <AnimatePresence>

                    {favoritesStocks.map((item, i) => (

                        < motion.div

                            key={item.symbol + i}
                            className='relative'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -200, transition: { duration: 0.3 } }}

                        >

                            <div className='w-full h-full space-x-1 opacity-60 text-[#FC0005] rounded-3xl top-0 left-0 absolute flex justify-end items-center z-10 font-bold pr-6'>
                                <img src="icons/remove.png" className='w-4'/>
                                <h1>Remove</h1>
                            </div>


                            < motion.div
                                className={`Stock z-20 relative border border-white/10 backdrop-blur-2xl bg-white/4 mb-2 rounded-3xl flex flex-col cursor-pointer`}
                                drag='x'
                                dragElastic={{ left: 0, right: 0 }}
                                onDrag={(e, info) => {
                                    if (info.offset.x < -200) removeStock(i)
                                }}
                                animate={{ x: 0 }}
                                style={{ touchAction: "pan-y" }}
                                whileDrag={{ scale: 1.04 }}
                                transition={{ type: "tween", ease: "easeOut", duration: 0 }}
                                layout={false} 



                            >

                                <div className='Cont flex justify-between active:bg-white/20 hover:bg-white/10 px-2 pr-4 py-1 rounded-3xl'>
                                    {/* Left side */}
                                    <div className='Left flex items-center'>
                                        <img src={item.img} alt={item.stock} className='w-11.5' />
                                        <div className='ml-3 pt-1'>
                                            <h1 className='text-[1.8vh] leading-3.5'>{item.stock}</h1>
                                            <div className='flex flex-col'>
                                                <p className='opacity-50 tracking-tight text-[1.5vh]'>{item.symbol}</p>
                                                <p className='opacity-80 text-[1.6vh]'>{item.value}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right side */}
                                    <div className="Right flex flex-col items-end pt-3.5">
                                        <h1 className='text-[1.8vh] mt-1.5'>{item.value}</h1>
                                        <p className={`opacity-60 text-[1.6vh] leading-2 ${item.changeColor}`}>{item.change}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>

            </div >

        </div >
    )
}

export default Favourites


// <div key={i} className={`Stock relative border border-white/10 bg-white/8 mb-2 rounded-3xl flex flex-col transition duration-200 ease-in-out cursor-pointer
// ${i == 0 ? 'pt- rounded-t-4x' : ''}
// ${removingIndex === i ? '' : 'active:scale-90'} 
// ${i == 0 ? 'pt- rounded-t-4x' : ''}
// ${i !== arr.length - 1 ? 'border-b border-white/10' : 'mb-19'}`}>

{/* <div className='Remove-Button text-right absolute text-red-500 right-3.5 top-1 bg-[#161616]/70 font-bold text-[1.2vh] opacity- cursor-pointer border-1
                        border-white/20 rounded-full px-1.5 active:scale-92 transition-all duration-250 ease-in-out active:bg-[#161616]/40 z-50'
                            onClick={(e) => {
                                e.stopPropagation()
                                setRemovingIndex(i)
                                removeStock(i)
                            }}
                        >Remove</div> */}
