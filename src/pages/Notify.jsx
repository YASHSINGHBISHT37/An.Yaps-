import React, { useEffect, useState } from 'react'

const Notify = ({ onClose }) => {
    const [visible, setVisible] = useState(false)
    const [closing, setClosing] = useState(false)

    useEffect(() => {
        setVisible(true)
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = 'auto' }
    }, [])


    const handleClose = () => {
        setClosing(true)
        setVisible(false)
        setTimeout(() => {
            if (onClose) onClose();
        }, 600)
    }


    return (
        <div className='fixed top-0 z-1 w-screen h-screen transition-all duration-400 ease-in-out flex flex-col items-center justify-start pt-20'>

            {/* <div className='fixed bottom-0 w-full h-104 bg-[#161616] backdrop-blur-[1vh] rounded-t-3xl p-4 border-white/30'>
                <h1 className='text-6xl tracking-tighter mb-2 text-white/80 font-bold'>Notifications</h1>

                <div className="Notifications w-full h-60 border border-white/5 bg-[# rounded-4xl flex justify-center items-center p-4">
                    <h1 className='opacity-20 tracking-tight font-bold'>No Notifications</h1>
                </div>
            </div> */}

            <div className={`Baclground-Overlay absolute w-screen h-screen bg-transparent top-0 opacity transition-opacity duration-600 ${visible ? 'opacity-100' : 'opacity-0'}`} onClick={handleClose}></div>

            <div className={`fixed w-full h-104 bg-[white]/90 backdrop-blur-[2vh] rounded-t-3xl p-4 border-t border-[#161616]/70 transform transition-transform duration-800
            ${closing ? 'bottom-0' : visible ? 'bottom-0' : 'bottom-[-60vh]'}
                `}>
                    
                <h1 className='text-6xl tracking-tighter mb-2 text-[#161616]/80 font-bold'>Notifications</h1>

                <div className="Notifications w-full h-60 border border-[#161616]/30 bg-[#161616]/0 rounded-4xl flex justify-center items-center p-4">
                    <h1 className='opacity-20 text-[#161616]/80 tracking-tight font-bold'>No Notifications</h1>
                </div>
            </div>

        </div >

    )
}

export default Notify
