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
        "1D": "-16.1vh",
        "5D": "-11.2vh",
        "1M": "-6.6vh",
        "6M": "-2.2vh",
        "YTD": "2.3vh",
        "1Y": "7vh",
        "5Y": "11.3vh",
        "MAX": "16.1vh"
    }

    const data = [
        { month: "Jan", sales: 12 },
        { month: "Feb", sales: 19 },
        { month: "Mar", sales: 3 },
        { month: "Apr", sales: 5 },
        { month: "May", sales: 2 },
    ];

    return (
        <div className='fixed top-14 w-screen h-auto'>

            <div className='Background-Gradient fixed -z-1 w-screen h-screen'>
                <div className='fixed top-0 left-0 bg-[#161616]/0 w-full z-1 h-screen'></div>
                <div className="absolute bg-[#161616] blur-2xl -left-15 rotate-18 -z-1 -top-17 w-[90vh] h-80"></div>
                <div className="absolute bg-blue-300 blur-2xl -left-10 rotate-18 -z-1 top-38 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-500 blur-2xl -left-10 rotate-18 -z-1 top-50 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-600 blur-2xl -left-10 rotate-18 -z-1 top-65 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-700 blur-2xl -left-10 rotate-18 -z-1 top-80 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-900 blur-2xl -left-10 rotate-18 -z-1 top-94 w-[70vh] h-20"></div>
                <div className="absolute move bg-[#161616] blur-[5vh] rounded-full -left-40 -z-1 top-70 w-90 h-70"></div>
                <div className="absolute bg-[#161616] blur-2xl -left-40 rotate-18 -z-10 top-110 w-[90vh] h-full"></div>
            </div>

            <div className='w-full h-full mt-5 px-4 rounded-4xl border- border-white/30 py-4 flex flex-col items-center gap-2'>

                <div className="Price z-50 data w-full h-auto flex justify-between items-start bg-amber-00 pointer-events-none">

                    <div className="Left mb-2">
                        <div className='flex justify-center items-center gap-1 h-8 mb-4'>
                            <img src='icons/bitcoin.png' className='h-8 mr-1.5 mix-blend-difference' />
                            <p className='text-[2.6vh] font-bold leading-5.5'>Bitcoin (BTC)</p>
                            <p className='opacity- text-[1.7vh] leading-6 font-bold bg-[#204630]/70 text-[#30a633] rounded-[.8vh] px-1'>+0.20%</p>
                            <p className='opacity- text-[1.6vh] leading-6 font-bold text-[#30a633] rounded-[.8vh] px-1'>$300.69 Today</p>
                        </div>

                        <h1 className='text-[7vh] leading-12'>$2,000<span className='opacity-60 text-[2.8vh]'>.24</span></h1>
                        <p className='text-left text-[1.6vh] leading-3 opacity-50'>Wed 15, 11:12 PM UTC+5:30  · BTC</p>
                    </div>

                </div>

                <div className="Time relative overflow-au px-2 pr-3 py-1.5 mt-2 top-0 borde rounded-full borde border-white/20 w-90 lg:w-[40vh] h-auto rounded-2x flex justify-center items-center text-[1.8vh]">

                    <div className="Time-highlight absolute bg-white/70 bottom-0 w-9 h-[0.2vh] rounded-[1.46vh] transition-transform duration-400"
                        style={{ transform: time ? `translateX(${timeHighlighter[time]})` : undefined }}>
                    </div>

                    {times.map((t, i) => (
                        <h1 key={t} className={`cursor-pointer mx-1 w-10 flex justify-center active:scale-80 transition-all duration-150 ease-in-out
                                    ${i == times.length - 1 ? 'tracking-tighter ' : ''}`}
                            onClick={() => setGtime(t)}> {t} </h1>
                    ))}

                </div>

                <div className='Stock-graph border border-white/30 w-full h-70 rounded-4xl pointer-events-none flex justify-center items-center'>
                    <div className="cont bg-[#161616]/10 w-full h-full rounded-4xl">
                    </div>
                </div>

            </div>

        </div >

    )
}

export default Stock
