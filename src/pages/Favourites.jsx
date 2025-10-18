import React, { useState } from 'react'

const Favourites = () => {
    const [removingIndex, setRemovingIndex] = useState(null);
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
        <div className='relative z-[99999] w-screen min-h-screen bg-[#161616] px-4 py-4 bg-amber-90 select-none'>
            {/* <h1 className="fixed z-[99999] font-bold text-[#161616]/80 mr-12 text-[2.2vh]">An.Yaps®</h1> */}

            {/* Background layers */}
            <div className='Background-Gradient fixed -z-1 w-screen h-screen'>
                <div className='fixed top-0 left-0 bg-[#161616]/20 w-full h-screen'></div>
                <div className="absolute bg-white blur-2xl -left-15 rotate-18 -z-1 -top-17 w-[90vh] h-80"></div>
                <div className="absolute bg-blue-300 blur-2xl -left-10 rotate-18 -z-1 top-38 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-500 blur-2xl -left-10 rotate-18 -z-1 top-50 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-600 blur-2xl -left-10 rotate-18 -z-1 top-65 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-700 blur-2xl -left-10 rotate-18 -z-1 top-80 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-900 blur-2xl -left-10 rotate-18 -z-1 top-94 w-[70vh] h-20"></div>
                <div className="absolute move bg-[#161616] blur-[5vh] rounded-full -left-40 -z-1 top-70 w-90 h-70"></div>
                <div className="absolute bg-[#161616] blur-2xl -left-40 rotate-18 -z-10 top-110 w-[90vh] h-full"></div>
            </div>

            <h1 className='text-7xl tracking-tighter mb-10 mt-3 text-[#161616]/80 font-bold'>Favorites</h1>

            <div className="Favorites w-full h-auto">
                {favoritesStocks.map((item, i, arr) => (

                    <div key={i} className={`Stock relative border border-white/10 bg-white/8 mb-2 rounded-3xl flex flex-col transition duration-200 ease-in-out cursor-pointer
                    ${i == 0 ? 'pt- rounded-t-4x' : ''}
                    ${removingIndex === i ? '' : 'active:scale-90'} 
                    ${i == 0 ? 'pt- rounded-t-4x' : ''}

                     ${i !== arr.length - 1 ? 'border-b border-white/10' : 'mb-19'}`}>

                        {/* Remove Button */}
                        <div className='Remove-Button text-right absolute text-red-500 right-3.5 top-1 bg-[#161616]/70 font-bold text-[1.2vh] opacity-80 cursor-pointer border-1
                        border-white/20 rounded-full px-1.5 active:scale-80 transition duration-150 ease-in-out active:bg-white/5 z-50'
                            onClick={(e) => {
                                e.stopPropagation()
                                setRemovingIndex(i)
                                removeStock(i)
                            }}
                        >Remove</div>

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

                    </div>
                ))}
            </div>



        </div>
    )
}

export default Favourites
