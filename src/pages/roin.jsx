import React from 'react'
import Input from '../components/Explore/Input'
import { motion, AnimatePresence } from "framer-motion"

const Explore = () => {

  const stocks = [
    { name: "Bitcoin", symbol: "BTC", value: "$100000", change: "+1000%", img: "icons/bitcoin.png" },
    { name: "Ethereum", symbol: "ETH", value: "$3800", change: "+12%", img: "icons/ethereum.png" },
    { name: "Solana", symbol: "SOL", value: "$220", change: "+5%", img: "icons/solana.png" },
    { name: "Cardano", symbol: "ADA", value: "$0.42", change: "-2%", img: "icons/cardano.png" },
  ]

  // Duplicate the array to create an infinite loop effect
  const loopStocks = [...stocks, ...stocks]

  return (
    <div className='w-screen h-screen'>
      <AnimatePresence>
        <div className="w-screen backdrop-blur-[0vh] bg-gradient-to-t from-[#161616] via-[#161616] to-[#161616] top-0 left-0 z-50 flex items-center px-6 py-2">
          <div className="overflow-auto">
            <motion.h1
              key='Notification'
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="text-[4vh] text-white tracking-tight">Explore</motion.h1>
          </div>
        </div>
      </AnimatePresence>

      <div className='mt-17 w-screen'>

        {/* Input Section */}
        <div className='Input fixed top-20 z-50'>
          <Input />
        </div>

        {/* Top Stock Section */}
        <div className='Top-Stock pt-20 px-4 overflow-hidden'>
          <h1 className='ml-2 mb-1 opacity-70 text-white'>Top Stock</h1>

          {/* Infinite scroll animation */}
          <motion.div
            className='flex items-center space-x-3 w-max'
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {loopStocks.map((item, i) => (
              <div
                key={i}
                className='rounded-2xl border border-white/30 py-1.5 px-2 pr-3 w-60 flex items-center space-x-2.5 bg-[#161616]'
              >
                <img src={item.img} className='h-10' alt={item.name} />
                <div className='flex justify-between w-full'>
                  <div className='flex flex-col -space-y-1.5'>
                    <h1 className='text-[2vh]'>{item.name}</h1>
                    <span className='uppercase opacity-70 text-[1.6vh]'>({item.symbol})</span>
                  </div>
                  <div className='-space-y-1.5 flex flex-col items-end'>
                    <p className='opacity-90'>{item.value}</p>
                    <p className={`${item.change.startsWith('-') ? 'text-red-500' : 'text-green-500'} opacity-80`}>
                      {item.change}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Explore
