import { space } from 'postcss/lib/list'
import React, { useState } from 'react'

const BottomNav = ({ openNotify, setActivePage }) => {
    const [navBtnClick, setNavBtnClick] = useState('Home')
    const [hasNotification, setHasNotification] = useState(true)
    const [highlightScale, setHighlightScale] = useState(1);

    const navClick = (btn) => {
        setNavBtnClick(btn)
        setHighlightScale(0.9)
        setActivePage(btn)

        setTimeout(() => {
            setHighlightScale(1)
        }, 400)
    }

    const navBtn = [
        { label: 'Home', img: 'home' },
        { label: 'Favorites', img: 'favourite' },
        { label: 'Explore', img: 'search' },
        { label: 'Notify', img: 'notification' },
        { label: 'Settings', img: 'settings' }
    ]

    const navHighlighter = {
        Home: "-1.5vh",
        Favourite: "7.45vh",
        Explore: "16.7vh",
        Notify: "25.8vh",
        Settings: "35.05vh"
    }

    return (
        <div className='Bottom-Nav fixed z-[99999] h-auto w-screen bottom-3 px-3 flex justify-center'>
            <div className='Cont backdrop-blur-[1vh] bg-[#161616]/50 border-1 border-white/20 w-[100%] sm:w-[80%] md:w-[60%] lg:w-[22%] h-full rounded-[3vh] flex justify-between items-center px-3 py-[1.3vh]'>
            
                <div className='highlight absolute z-[-1] bg-white/10 border-1 border-white/20 h-[56px] w-[66px] left-5 rounded-[2.2vh] transition-transform duration-400'
                    style={{
                        transform: navBtnClick ? `translateX(${navHighlighter[navBtnClick]})` : undefined
                    }}>
                </div>

                {/* Nav Buttons */}
                {navBtn.map((btn, i) => (

                    <div key={i} className='relative cursor-pointer active:scale-50 transition-all duration-500 ease-in-out flex flex-col items-center gap-0.5 w-14' onClick={() => navClick(btn.label)}>
                        <img src={`icons/${btn.img}.png`} className='h-5 mt-1' />

                        {btn.label === 'Notify' && hasNotification && (
                            <span
                                className={`absolute top-0 right-3 w-[0.4rem] h-[0.4rem] bg-red-500 rounded-full border border-white/30 transition-all duration-500 ease-out transform scale-0 opacity-0
                                    ${hasNotification ? 'scale-100 opacity-100' : ''}`}>
                            </span>
                        )}
                        <p className='text-[1.4vh]'>{btn.label}</p>
                    </div>

                ))}

            </div>
        </div >
    )
}

export default BottomNav
