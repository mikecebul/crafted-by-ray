import Image from 'next/image'
import Avatar from '../../public/avatar.png'

const testimonies = [
  { avatar: Avatar, name: "Jane Doe", quote: "Ray&apos;s prices were so cheap I basically had to force him to take my money!" },
  { avatar: Avatar, name: "Jane Doe", quote: "Ray&apos;s prices were so cheap I basically had to force him to take my money!" },
  { avatar: Avatar, name: "Jane Doe", quote: "Ray&apos;s prices were so cheap I basically had to force him to take my money!" },
]

const Testimonials = () => {
  return (
    <>
      {testimonies.map((items, index) => (
        <div key={index} className='flex px-8 py-4 mb-4 rounded bg-amber-400 last:mb-0'>
          {/* avatar */}
          <div className="flex flex-col items-center justify-center">
            <Image src={Avatar} alt="profile picture of testimonial" className='object-cover w-16 rounded-full' />
            {/* name */}
            <p className='block w-16 text-xs font-semibold text-center'>Jane Doe</p>

          </div>
          {/* qoute */}
          <p className='pl-8'>“Ray&apos;s prices were so cheap I basically had to force him to take my money!”</p>
        </div>
      ))}

    </>
  )
}

export default Testimonials