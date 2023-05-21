import Link from 'next/link'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-10 bg-slate-600 p-4 drop-shadow-xl'>
      <div className='max-w-5xl mx-auto flex flex-col justify-between sm:flex-row md:px-6'>
        <h1 className='mb-2 grid place-content-center text-3xl font-bold text-white md:mb-0'>
          <Link href='/' className='text-white/90 no-underline hover:text-white'>
            Office Scripts Blog
          </Link>
        </h1>
        <div className='flex flex-row justify-center gap-4 align-middle text-4xl text-white sm:justify-evenly lg:text-5xl'>
          <Link
            className='text-white/90 hover:text-white'
            href='https://www.youtube.com/'>
            <FaYoutube />
          </Link>
          <Link className='text-white/90 hover:text-white' href='https://udemy.com/'>
            <FaLaptop />
          </Link>
          <Link className='text-white/90 hover:text-white' href='https://github.com/'>
            <FaGithub />
          </Link>
          <Link className='text-white/90 hover:text-white' href='https://twitter.com/'>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  )
}