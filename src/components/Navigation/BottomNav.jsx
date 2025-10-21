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
        }, 300)
    }

    const navBtn = [
        { label: 'Home', img: 'home' },
        { label: 'Favorites', img: 'favourite' },
        { label: 'Explore', img: 'search' },
        { label: 'Notify', img: 'notification' },
        { label: 'Settings', img: 'settings' }
    ]

    // Horizontal highlight positions
    const navHighlighter = {
        Home: "0%",
        Favorites: "121%",
        Explore: "243%",
        Notify: "363%",
        Settings: "491%"
    }

    return (
        <div className='Bottom-Nav fixed z-[99999] w-screen bottom-3 flex justify-center'>
            <div className='relative backdrop-blur-[1vh] bg-[#161616]/50 border border-white/20 w-[45vh] h-auto rounded-[3vh] flex justify-between items-center px-2.5 py-[1.5vh] overflow-hidden'>

                {/* Highlight behind icons */}
                <div
                    className='highlight absolute z-0 bg-white/10 border border-white/20 h-[56px] w-[66px] rounded-[2.2vh] transition-all duration-400 ease-in-out'
                    style={{
                        transform: `translateX(${navHighlighter[navBtnClick]}) scale(${highlightScale})`,
                    }}
                ></div>

                {navBtn.map((btn, i) => (
                    <div
                        key={i}
                        className='relative z-10 cursor-pointer active:scale-90 transition-all duration-300 ease-in-out flex flex-col items-center gap-0.5 w-[66px]'
                        onClick={() => navClick(btn.label)}
                    >
                        <img src={`icons/${btn.img}.png`} className='h-5 mt-1' />

                        {btn.label === 'Notify' && hasNotification && (
                            <span
                                className={`absolute top-0 right-3 w-[0.4rem] h-[0.4rem] bg-red-500 rounded-full border border-white/30 transition-all duration-500 ease-out`}
                            ></span>
                        )}

                        <p className='text-[1.4vh]'>{btn.label}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default BottomNav
