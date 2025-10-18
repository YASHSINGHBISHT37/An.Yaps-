import React, { useState } from 'react'
import TopNav from '../components/Navigation/TopNav'
import BottomNav from '../components/Navigation/BottomNav'
import StockDetails from '../components/Home/StockDetails'
import Stock from '../components/Home/Stock'
// import AboutApp from '../components/aboutApp/aboutApp'
import Favourites from './Favourites'
import Notify from './Notify'
import Settings from './Settings'

const Home = () => {
    const [showNotify, setShowNotify] = useState(false)
    // const [showFavourites, setShowFavourites] = useState(false)

    return (
        <div className='w-screen h-screen bg-[#161616]'>

            {/* Background-Gradient */}
            <div className='Background-Gradient fixed bg-[#161616] w-screen h-screen'>
                <div className="absolute rounded- bg-blue-900 blur-2xl -z-1 top-28 w-full h-3 0"></div>
                <div className="absolute rounded- bg-blue-700 blur-2xl -z-1 top-40 w-full h-20"></div>
                <div className="absolute rounded- bg-blue-600 blur-2xl -z-1 top-55 w-full h-20"></div>
                <div className="absolute rounded- bg-blue-500 blur-2xl -z-1 top-70 w-full h-20"></div>
                <div className="absolute rounded- bg-blue-300 blur-2xl -z-1 top-84 w-full h-full"></div>
            </div>

            {/* <AboutApp /> */}

            <TopNav />
            <Stock />
            <StockDetails />

            {/* <Favourites/> */}

            {/* <Settings/> */}

            {showNotify && <Notify onClose={() => setShowNotify(false)} />}
            <BottomNav openNotify={(value) => setShowNotify(value)} />


        </div>
    )
}

export default Home
