import React, { useContext, useState } from 'react'
import ApexCharts from 'apexcharts'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { StockDataContext } from '../data/Data'


const Stock = () => {
    const [time, setGtime] = useState('1D')
    // const { stockData, loading } = useContext(StockDataContext)
    // if (!stockData) return

    const times = ['1D', '5D', '1M', '6M', 'YTD', '1Y', '5Y', 'MAX']
    const timeHighlighter = {
        "1D": "-16.6vh",
        "5D": "-11.8vh",
        "1M": "-7.1vh",
        "6M": "-2.3vh",
        "YTD": "2.65vh",
        "1Y": "7.3vh",
        "5Y": "12.1vh",
        "MAX": "16.9vh"
    }

    const data = [
        { month: "Jan", sales: 12 },
        { month: "Feb", sales: 19 },
        { month: "Mar", sales: 3 },
        { month: "Apr", sales: 5 },
        { month: "May", sales: 2 },
    ];

    return (
        <div className='fixed z-50 top-14 w-screen h-auto pointer-events-auto'>

            <div className='w-full h-full mt-5 px-4 rounded-4xl border- border-white/30 py-4 flex flex-col items-center gap-2'>

                <div className="Price z-50 data w-full h-auto flex justify-between items-start bg-amber-00 pointer-events-none">

                    <div className="Left mb-2">

                        <div className='flex justify-center items-center gap-1 h-8 mb-4'>
                            {/* <img src={stockData.logo} className='h-8 mr-1.5 mix-blend-difference' /> */}
                            {/* <p className='text-[2.6vh] font-bold leading-5.5'>{stockData.name} ({stockData.ticker})</p> */}
                            <p className='opacity- text-[1.7vh] leading-6 font-bold bg-[#204630]/70 text-[#30a633] rounded-[.8vh] px-1'>+0.20%</p>
                            <p className='opacity- text-[1.6vh] leading-6 font-bold text-[#30a633] rounded-[.8vh] px-1'>$300.69 Today</p>
                        </div>

                        <h1 className='text-[7vh] leading-12'><span className='opacity-60 text-[2.8vh]'>.40</span></h1>
                        {/* <h1 className='text-[7vh] leading-12'>${stockData.c}<span className='opacity-60 text-[2.8vh]'></span></h1> */}
                        <p className='text-left text-[1.6vh] leading-2 opacity-50'>Wed 15, 11:12 PM UTC+5:30  · BTC</p>

                    </div>

                </div>

                <div className="Time relative px-2 pr-3 py-1.5 mt-2 bg-[#161616]/0 top-0 borde rounded-full border-white/20 w-90 lg:w-[40vh] h-auto rounded-2x flex justify-center items-center text-[1.8vh]">

                    <div className="Time-highlight absolute bg-[#161616]/70 bottom-0 w-9 h-[0.4vh] rounded-[1.46vh] z-1 transition-transform duration-400"
                        style={{ transform: time ? `translateX(${timeHighlighter[time]})` : undefined }}>
                    </div>

                    {times.map((t, i) => (
                        <h1 key={t} className={`cursor-pointer mx-1 w-10 flex justify-center active:scale-80 transition-all duration-150 ease-in-out
                                    ${i == times.length - 1 ? 'tracking-tighter ' : ''}`}
                            onClick={() => setGtime(t)}> {t} </h1>
                    ))}

                </div>

                <div className='Stock-graph w-full h-70 rounded-4xl pointer-events-none flex justify-center items-center'>
                    <div className="cont bg-[#161616]/10 w-full h-full rounded-4xl">
                    </div>
                </div>

            </div>

        </div >

    )
}

export default Stock
