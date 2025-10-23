import React, { useState } from 'react'
import StockDetails from '../components/Home/StockDetails'
import Stock from '../components/Home/Stock'
import TopNav from '../components/Navigation/TopNav'

const Home = () => {
    return (
        <div className='w-screen h-screen z-[999997] bg- select-none'>
            <TopNav/>
            <Stock />
            <StockDetails />
        </div>
    )
}

export default Home
