import React from 'react'
import Image from 'next/image'
import airbnbLogo from '../public/img/airbnbLogo.png'
import { GoSearch } from 'react-icons/go';


type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image src={airbnbLogo} alt='airbnb logo'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
            />
        </div>

        <div className='flex items-center md:border-2 rounded-full py-2'>
            <input className='flex-grow pl-5 bg-transparent outline-none' type="text"
            placeholder='Start your search' />
            <GoSearch className='hidden md:inline-flex h-8 w-8 bg-red-400 text-white rounded-full p-2 cursor-pointer'/>
                  
        </div>

    </header>
    
  )
}