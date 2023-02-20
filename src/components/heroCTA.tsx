import Link from 'next/link'
import React from 'react'

const HeroCTA = () => {
  return (
    <div className='px-8 pt-16 pb-16'>
      <h1 className="text-4xl font-bold ">
        Custom Woodworking
      </h1>
      <p className='pt-4'>
        A small family business in<span className='block'>Charlevoix, MI.</span>
      </p>
      <div className='pt-10 pb-2'>
        <Link href="#" className='px-8 py-2 text-lg font-bold rounded-full bg-amber-900 text-amber-50'>
          See My Work
        </Link>
      </div>
    </div>
  )
}

export default HeroCTA