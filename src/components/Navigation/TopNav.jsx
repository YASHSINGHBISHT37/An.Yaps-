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
        <div className='Top-Nav z-[99] fixed w-screen h-auto pb-3 pt-4 px-4 flex justify-between items-center bg-[#161616]/0'>
            {/* <h1 className='font-bold mr-12 text-[2.2vh]'>Anynance<span className='font-normal'>®</span></h1> */}
            {/* <h1 className='font-bold mr-12 text-[2.2vh]'>An<sup className='text-[1.6vh]'>2</sup>Ya<span className='font-normal'>®</span></h1> */}
            {/* <a href="/"><h1 className='font-bold mr-12 text-[2.2vh]'>An.Yaps<sup className='font-normal text-[1.6vh]'>®</sup></h1></a> */}

            <div className='flex justify-between items-center w-full h-auto space-x-1'>
                <div className=' flex items-center space-x-2'>
                    <img src="/favicon/An.Yasps(White).png" className='w-12 h-12 border border-white/40 rounded-full p-1.5' />
                    <div className='-space-y-1.5'>
                        <p className='opacity-70'>Welcome,</p>
                        <p className=''> Yash Singh Bisht</p>
                    </div>
                </div>

                <div className='flex items-center border border-white/30 rounded-full h-9 opacity-90'>
                    <div className='relative p-2 '>
                        <img src="icons/notification.png" className='w-5.5 h-5.5' />
                        <div className='absolute top-2 right-2 bg-blue-500 w-2.5 h-2.5 border-2 border-[#161616] rounded-full'></div>
                    </div>

                    <div className='p-2 cursor-pointer'>
                        <img src="icons/dark.png" className='w-4.5 h-4.5' />
                        {/* <img src="icons/light.png" className='w-5.5 h-5.5' /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopNav
