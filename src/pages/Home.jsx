import React, { useState } from 'react'
import TopNav from '../components/Navigation/TopNav'
import BottomNav from '../components/Navigation/BottomNav'
import StockDetails from '../components/Home/StockDetails'
import Stock from '../components/Home/Stock'

import Favourites from './Favourites'
import Notify from './Notify'
import Settings from './Settings'
import Login from '../components/Login'
import Explore from './Explore'

const Home = () => {
    const [showNotify, setShowNotify] = useState(false)
    // const [showFavourites, setShowFavourites] = useState(false)

    return (
        <div className='w-screen h-screen z-[999997] bg-[#161616] select-none'>

            {/* Background-Gradient */}
            <div className='Background-Gradient fixed bg-[#161616] w-screen h-screen'>
                <div className="absolute rounded- bg-blue-900 blur-2xl -z-1 top-28 w-full h-3 0"></div>
                <div className="absolute rounded- bg-blue-700 blur-2xl -z-1 top-40 w-full h-20"></div>
                <div className="absolute rounded- bg-blue-600 blur-2xl -z-1 top-55 w-full h-20"></div>
                <div className="absolute rounded- bg-blue-500 blur-2xl -z-1 top-70 w-full h-20"></div>
                <div className="absolute rounded- bg-blue-300 blur-2xl -z-1 top-84 w-full h-full"></div>
            </div>
            {/* <div className="fixed z-1">
                <div className="absolute bg-white blur-2xl -left-10 rotate-18 -z-1 -top-12 w-[80vh] h-80"></div>
                <div className="absolute bg-blue-300 blur-2xl -left-10 rotate-18 -z-1 top-38 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-500 blur-2xl -left-10 rotate-18 -z-1 top-50 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-600 blur-2xl -left-10 rotate-18 -z-1 top-65 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-700 blur-2xl -left-10 rotate-18 -z-1 top-80 w-[70vh] h-20"></div>
                <div className="absolute bg-blue-900 blur-2xl -left-10 rotate-18 -z-1 top-94 w-[70vh] h-20"></div>
                <div className="absolute move bg-[#161616] blur-[5vh] rounded-full -left-40 -z-1 top-70 w-90 h-70"></div>
                <div className="absolute bg-[#161616] blur-2xl -left-40 rotate-18 -z-10 top-110 w-[90vh] h-full"></div>
            </div> */}

            {/* <AboutApp /> */}
            {/* <Login/> */}

            <TopNav />
            <BottomNav />

            <Stock />
            <StockDetails />

            {/* <Favourites /> */}
            {/* <Explore/> */}
            {/* <Settings/> */}


            {/* {showNotify && <Notify onClose={() => setShowNotify(false)} />} */}


        </div>
    )
}

export default Home
