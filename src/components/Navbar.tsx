import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react'

const Navbar:FC = () => {
  return (
    <nav className='flex justify-between items-center py-2'>
        <Link href='/' className='flex items-center space-x-2'>
            <div className="relative w-[30px] h-[30px]">
                <Image src='/assets/football-info.png' alt='logo' fill className='object-cover' />
            </div>
            <span className="text-2xl font-bold none md:block">Soccer Stats</span>
        </Link>
        <p className="text-xs md:text-sm">Created by iefosa</p>
    </nav>
  )
}

export default Navbar;