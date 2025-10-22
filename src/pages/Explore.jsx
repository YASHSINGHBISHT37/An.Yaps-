import React from 'react'
import Input from '../components/Explore/Input'

const Explore = () => {




  return (
    <div className='w-screen h-screen'>

      {/* <div className="w-screen backdrop-blur-[0vh] bg-[#161616] fixed top-0 left-0 z-50 flex items-center px-3 py-2 space-x-2">
        <h1 className="text-[4vh] text-white">Explore</h1>
      </div> */}

      <div className="w-screen backdrop-blur-[0vh] bg-gradient-to-t from-[#161616] via-[#161616] to-[#161616] top-0 left-0 z-50 flex items-center px-6 py-2">
        <h1 className="text-[4vh] text-white tracking-tight ">Explore</h1>
      </div>

      <div className='mt-17 w-screen '>
        <div className='fixed top-20 z-50'>
          <Input />

        </div>


        <div className='Top-Stock pt-20 px-4'>
          <h1 className='ml-2 font- mb-1 opacity-70'>Top Stock</h1>
          <div className='Cont'>

            <div className=' rounded-3xl border border-white/30 p-2 w-60 h-auto flex space-x-2.5'>
              <img src="icons/bitcoin.png" className='w-18' />

              <div className='flex justify-between w-full'>

                <div className='flex justify-between pr-2 flex-col'>
                  <h1 className='text-[2vh]'>Bitcoin</h1>
                  <span className='uppercase opacity-70 text-[1.7vh]'>(btc)</span>
                </div>

                <div className='leading-4.5 text-lef'>
                  <p className='opacity-50'>$100000</p>
                  <p className='text-green-500'>+1000%</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Explore
