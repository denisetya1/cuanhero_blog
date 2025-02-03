import { ThemeToggle } from '@/components/ThemeToggle'
import React from 'react'
import Image from 'next/image'

const freebookLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full relative pt-16'>
      <div className='p-4 bg-black text-white w-full fixed top-0 z-50 flex justify-between items-center shadow-md'>
        <div className='font-bold'>
          <Image
            color='#fff'
            src={'/assets/img/logo.svg'}
            width={140}
            height={30}
            alt='CUANHERO'
            className='invert'
          />
        </div>
        <ThemeToggle />
      </div>
      <div className='m-auto max-w-[760px]'>{children}</div>
    </div>
  )
}

export default freebookLayout