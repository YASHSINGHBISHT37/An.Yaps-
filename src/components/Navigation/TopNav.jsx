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
        <div className='Top-Nav z-[999] fixed w-screen h-auto pb-3 pt-4 px-4 flex justify-between items-center bg-[#161616]/0 select-none '>
            {/* <h1 className='font-bold mr-12'>Anynance</h1> */}
            {/* <h1 className='font-bold mr-12 text-[2.2vh]'>An<sup className='text-[1.6vh]'>2</sup>Ya<span className='font-normal'>®</span></h1> */}
            <a href="/"><h1 className='font-bold mr-12 text-[2.2vh] text-[#161616]0'>An.Yaps<span className='font-normal'>®</span></h1></a>

            <div className='flex items-center gap-4 opacity-70 bg-white0'>
                <img src="icons/search.png" className='w-5.5 h-5.5 cursor-pointer mix-blend-difference' />

                <div className={`Themes cursor-pointer relative border rounded-2xl text-[1.6vh] w-14 h-6 text-center overflow-hidden active:scale-80 transition-all duration-250 ${theme === 'Light' ? 'bg-white text-[#161616] border-[#161616]/50 transition-all duration-250 ' : 'bg-[#161616] text-white border-white/50 transition-all duration-250 '}
                `} onClick={toggleTheme}>

                    <div className={`transition-all duration-300 ease-in-out ${theme === 'Dark' ? 'mt-0' : 'mt-[-2.35vh]'}`}>
                        <p>Dark</p>
                        <p>Light</p>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default TopNav
