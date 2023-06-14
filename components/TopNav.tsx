import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function TopNav() {
  const opeExternal = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  }
  return (
    <div className='flex justify-between h-[60px] sticky top-0 items-center px-4'>
       <div className='font-semibold font-serif text-white text-xl'>DeTube</div>
        <div className='flex gap-3 py-2 bg-blue-500 items-center px-3 rounded-lg text-white cursor-pointer' >
          <a href='https://de-tube.vercel.app/' target="_blank">Launch app</a>
           <AiOutlineArrowRight className='animate-bounce' />
        </div>
    </div>
  )
}
