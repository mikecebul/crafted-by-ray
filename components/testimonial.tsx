'use client'

import Image from 'next/image'
import Avatar from 'public/avatar.png'
import { motion } from "framer-motion"

const testimonies = [
  { avatar: Avatar, name: "Jane Doe", quote: "Ray&apos;s prices were so cheap I basically had to force him to take my money!" },
  { avatar: Avatar, name: "Jane Doe", quote: "Ray&apos;s prices were so cheap I basically had to force him to take my money!" },
  { avatar: Avatar, name: "Jane Doe", quote: "Ray&apos;s prices were so cheap I basically had to force him to take my money!" },
  { avatar: Avatar, name: "Jane Doe", quote: "Ray&apos;s prices were so cheap I basically had to force him to take my money!" },
  { avatar: Avatar, name: "Jane Doe", quote: "Ray&apos;s prices were so cheap I basically had to force him to take my money!" },
  { avatar: Avatar, name: "Jane Doe", quote: "Ray&apos;s prices were so cheap I basically had to force him to take my money!" },
]

const Testimonials = () => {
  return (
    <motion.div
      className='flex py-8 overflow-hidden bg-amber-200'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {testimonies.map((items, index) => (
        <motion.div
          key={index}
          className='flex px-4 py-4 mr-4 rounded bg-amber-400'
          initial={{ x: -160 }}
          animate={{ x: -1072 }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" }}
        >
          {/* avatar */}
          <div className="flex flex-col items-center justify-center">
            <Image src={Avatar} alt="profile picture of testimonial" className='object-cover w-12 rounded-full' />
            {/* name */}
            <p className='block w-16 text-xs font-semibold text-center'>Jane Doe</p>
          </div>
          {/* qoute */}
          <p className='w-48 pl-4 text-sm'>“Ray&apos;s prices were so cheap I basically had to force him to take my money!”</p>
        </motion.div>
      ))}

    </motion.div>
  )
}

export default Testimonials
