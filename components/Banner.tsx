import React from 'react'
import Image from 'next/image'
import bgBanner from '../public/img/bgBanner.webp'

type Props = {}

export default function Banner({}: Props) {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:[700px]'>
        <Image src={bgBanner} 
        alt='background image' 
        layout='fill' 
        objectFit='cover' />
    </div>
  )
}