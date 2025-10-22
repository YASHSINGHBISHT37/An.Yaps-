import React, { useEffect, useState } from 'react'

const TopNav = () => {
    // saved theme from localStorage, default to 'Dark'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'Dark'
    })

    // Toggle theme
    const toggleTheme = () => {
        setTheme(prev => (prev === 'Light' ? 'Dark' : 'Light'));
    };

    useEffect(() => {
        if (theme === 'Dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        } localStorage.setItem('theme', theme)
    }, [theme]);


    return (
        <div className='Top-Nav z-[999] fixed w-screen h-auto pb-3 pt-4 px-4 flex justify-between items-center bg-[#161616]/0'>
            {/* <h1 className='font-bold mr-12 text-[2.2vh]'>Anynance<span className='font-normal'>®</span></h1> */}
            {/* <h1 className='font-bold mr-12 text-[2.2vh]'>An<sup className='text-[1.6vh]'>2</sup>Ya<span className='font-normal'>®</span></h1> */}
            <a href="/"><h1 className='font-bold mr-12 text-[2.2vh]'>An.Yaps<sup className='font-normal text-[1.6vh]'>®</sup></h1></a>

            {/* <img src="icons/notification.png" className='w-5.5 h-5.5 cursor-pointer mix-blend-difference' /> */}
        </div >
    )
}

export default TopNav
