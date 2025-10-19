import React, { useState } from 'react'
import ApexCharts from 'apexcharts'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


const Stock = () => {
    const [time, setGtime] = useState('1D')

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

            {/* <div className=''>

                <div className="Price z-50 data w-screen h-auto px-4 bg-amber-00 flex flex-col items-center">
                    <p className='flex justify-center items-center text-[2vh] opacity-70 '>BTC - Bitcoin <div className='w-1 h-1 rounded-full mx-1.5 bg-white'></div> USA</p>
                    <div>
                        <h1 className='text-7xl font'>$92,882<span className='opacity-70 text-[3vh]'>.40</span></h1>
                    </div>
                </div>

                <div className='w-full h-auto px-4 mt-6'>
                    <div className='w-full h-full rounded-4xl border-1 border-white/30 p-2 flex flex-col gap-2'>

                        <div className="Time bg-black/30 backdrop-blur-[1vh] w-full h-10 rounded-4xl flex justify-center items-center gap-5 text-[1.8vh]">

                            <div className={`graph-highlight absolute bg-[#161616] w-11 h-8 rounded-full -z-1 transition-transform duration-400
                            ${time === "1D" ? "translate-x-[-17.9vh]" : ""}
                            ${time === "5D" ? "translate-x-[-13.4vh]" : ""}
                            ${time === "1M" ? "translate-x-[-8.6vh]" : ""}
                            ${time === "6M" ? "translate-x-[-3.7vh]" : ""}
                            ${time === "YTD" ? "translate-x-[1.7vh]" : ""}
                            ${time === "1Y" ? "translate-x-[6.9vh]" : ""}
                            ${time === "5Y" ? "translate-x-[11.3vh]" : ""}
                            ${time === "MAX" ? "translate-x-[17.9vh]" : ""}

                        `}></div>

                            {times.map((t) => (
                                <h1 key={t} className='cursor-pointer' onClick={() => setGtime(t)}> {t} </h1>
                            ))}

                        </div>

                        <div className='stock-graph bg-[#161616]/30 w-full h-full rounded-4xl'>
                            <LineChart width={330} height={80} data={data} className='bg-red-500/0  text-black mt-30 '>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="sales" stroke="#161616" />
                            </LineChart>
                        </div>
                    </div>


                </div>

            </div> */}


            <div className='w-full h-full mt-5 px-4 rounded-4xl border- border-white/30 py-4 flex flex-col items-center gap-2'>

                <div className="Price z-50 data w-full h-auto flex justify-between items-start bg-amber-00 pointer-events-none">

                    <div className="Left mb-2">

                        <div className='flex justify-center items-center gap-1 h-8 mb-4'>
                            <img src="icons/bitcoin.png" className='h-8 mr-1.5' />
                            <p className='text-[2.6vh] font-bold leading-5.5'>BITCOIN</p>
                            <p className='opacity- text-[1.7vh] leading-6 font-bold bg-[#204630]/70 text-[#30a633] rounded-[.8vh] px-1'>+0.20%</p>
                            <p className='opacity- text-[1.6vh] leading-6 font-bold text-[#30a633] rounded-[.8vh] px-1'>$300.69 Today</p>
                        </div>

                        <h1 className='text-[7vh] leading-12'>$92,882<span className='opacity-60 text-[2.8vh]'>.40</span></h1>
                        <p className='text-left text-[1.6vh] leading-2 opacity-50'>Wed 15, 11:12 PM UTC+5:30  · BTC</p>

                    </div>

                    <div className="Right leading-6">
                        {/* <h1 className='text-[1.6vh] font-bold opacity-50 bg-[#161616]/30 border-1 border-white/20 px-2 h-5 leading-5 rounded-[120vh]'>USD</h1> */}
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
                        {/* <LineChart width={360} height={200} data={data} className='mt-4'>
                                    <CartesianGrid strokeDasharray="1 1" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="sales" stroke="white" />
                                </LineChart> */}
                    </div>
                </div>

            </div>





        </div >

    )
}

export default Stock
