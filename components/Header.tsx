import React from 'react'
import Image from 'next/image'
import airbnbLogo from '../public/img/airbnbLogo.png'
import { SearchIcon } from '@heroicons/react/24/solid'

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

        <div>
            <input type="text"
            placeholder='Start your search'
            <SearchIcon />
            />
            


        </div>

    </header>
    
  )
}