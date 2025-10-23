import React, { useContext } from 'react';
import { StockDataContext } from '../data/Data'

const StockDetails = () => {
  let marketStats = [];

  // if (stockData) {
  //   marketStats = [
  //     { label: 'Open', value: stockData.o },
  //     { label: 'Volume', value: stockData.v },
  //     { label: 'P/E Ratio', value: stockData.pe },
  //     { label: 'Market Cap', value: stockData.marketCap },
  //     { label: '24H High', value: stockData.h },
  //     { label: '24H Low', value: stockData.l },
  //     { label: 'EPS (TTM)', value: stockData.eps },
  //     { label: '3M High', value: stockData.high3m },
  //   ];
  // }

  const assets = [
    { stock: 'Bitcoin', symbol: 'BTC', value: '$61,940.20', change: '+1.52%', img: 'icons/bitcoin.png', changeColor: 'text-green-500' },
    { stock: 'Ethereum', symbol: 'ETH', value: '$2,480.30', change: '-0.84%', img: 'icons/ethereum.png', changeColor: 'text-red-500' },
    { stock: 'Solana', symbol: 'SOL', value: '$146.25', change: '+3.15%', img: 'icons/solana.png', changeColor: 'text-green-500' },
    { stock: 'Apple Inc.', symbol: 'AAPL', value: '$228.10', change: '+0.45%', img: 'icons/apple.png', changeColor: 'text-green-500' },
  ];

  return (
    <div className="Stock-Details pt-110 relative w-screen h-auto pointer-events-none z-[50]">
      <div className="cont z-[999] relative w-full h-full mt-32 rounded-t-3xl py-14 flex flex-col gap-4
                      bg-[#272627] border-t border-white/30 text-white">
        <div className="bar absolute left-1/2 top-4 w-20 h-[0.4vh] bg-white rounded-full transform -translate-x-1/2"></div>

        {/* Market Stats */}
        <div className="Market-stats mx-4 border-b border-white/50 pb-4">
          <h1 className='font-bold opacity-70 text-[1.8vh] text-left tracking-tight'>Market Stats</h1>
          <div className='cont mt-3 flex flex-wrap justify-center gap-x-2 gap-y-3'>

            {marketStats.map((item, i) => (
              <div key={i} className='stat leading-4.5 px-2 py-2 rounded-lg bg-white/5 text-center max-w-[10.4vh] min-w-[9.5vh]'>
                {/* <h1 className='opacity-70 text-[1.6vh]'>{item.label}</h1> */}
                {/* <p className='text-[1.8vh]'>{item.value}</p> */}
              </div>
            ))}

          </div>
        </div>

        {/* About */}
        <div className="About mx-4 border-b border-white/50 pb-4">
          <h1 className='font-bold opacity-70 text-[1.8vh]'>About</h1>
          <p className='leading-4.5 mt-3 text-[1.6vh]'>
            Apple Inc. is an American multinational technology company headquartered in Cupertino, California,
            best known for its consumer electronics, software and online services.
          </p>
        </div>

        {/* Assets */}
        <div className="Assets h-auto pb-4 mb-4 ">
          <div className='flex mx-4 justify-between items-end mb-5'>
            <h1 className='font-bold opacity-70 text-[1.8vh]'>Assets</h1>

            <div className='ViewAll flex items-center gap-1 active:scale-85 border px-2 pl-1.5 rounded-2xl border-white/30 bg-white/7 pb-1 active:bg-white/50 transition-all duration-250 text-white pt-1 bg pointer-events-auto'>
              <img src="icons/link.png" className='w-4' />
              <h1 className='font-bold text-[1.2vh] cursor-pointer'>View All</h1>
            </div>

          </div>

          <div className="Cont mx-3 border border-white/30 rounded-3xl">
            {assets.map((item, i, arr) => (
              <div key={i} className={`Stock bg-white/7 px-4 flex justify-between items-center py-2.5 active:bg-white/20 hover:bg-white/10
                                      transition cursor-pointer pointer-events-auto
                                      ${i === 0 ? 'pt-3 rounded-t-3xl' : ''} 
                                      ${i === arr.length - 1 ? 'pb-3 rounded-b-3xl' : 'border-b border-white/30'}`}>
                <div className='Left flex items-center'>
                  <img src={item.img} alt={item.stock} className='w-10' />

                  <div className='ml-3 -space-y-1'>
                    <h1 className='text-[2vh]'>{item.stock}</h1>
                    <p className='opacity-50 tracking-tight text-[1.4vh]'>{item.symbol}</p>
                  </div>

                </div>

                <div className="Right -space-y-1.5 flex flex-col items-end">
                  <h1 className='text-[1.7vh]'>{item.value}</h1>
                  <p className={`opacity-60 text-[1.6vh] ${item.changeColor}`}>{item.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default StockDetails;
