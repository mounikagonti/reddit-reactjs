'use client'
import Image from 'next/image'
import {LuMenu} from 'react-icons/lu'
import {CiSearch} from 'react-icons/ci'
import {BiQrScan} from 'react-icons/bi'
import {GoKebabHorizontal} from 'react-icons/go'
import useWindowSize from '@/hooks/useWindowSize'
import useSidebarState from '@/hooks/useSidebarState'

const Header = () => {
  const {width} = useWindowSize()
  const {toggleSidebar} = useSidebarState()

  return (
    <>
      <header className='fixed top-0 left-0 w-full bg-bgColor border-b z-50'>
        <nav className='flex align-center justify-between px-4 py-2 h-[60px] gap-2 border-b'>
          <div className='flex align-center justify-center'>
            <div
              onClick={toggleSidebar}
              className={'lg:hidden flex items-center mr-1 cursor-pointer'}
            >
              <LuMenu size={24} />
            </div>
            <div>
              <div className='flex items-center gap-2 cursor-pointer'>
                <div className='flex items-center relative w-[40px] h-[40px]'>
                  <Image
                    src={
                      'https://logowik.com/content/uploads/images/reddit-icon2825.logowik.com.webp'
                    }
                    alt='reddit-logo'
                    fill
                    className='object-cover rounded-full'
                  />
                </div>
                <h1 className='text-3xl font-bold hidden lg:block text-customRedOrange'>
                  reddit
                </h1>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-2 border px-1 py-1 rounded-[30px] bg-white flex-grow lg:max-w-[600px]'>
            <CiSearch className='text-gray-500 mr-2' size={24} />
            <input
              className='outline-none border-none w-full text-sm text-black'
              type='text'
              placeholder='Search in r/reactjs'
            />
          </div>
          <div>
            <div className='flex align-center justify-center gap-1'>
              {width > 768 ? (
                <div className='flex items-center gap-2 bg-gray-600 text-white px-2 py-2 rounded-[30px] font-semibold cursor-pointer'>
                  <BiQrScan /> Get app
                </div>
              ) : null}
              <button
                className='bg-customRedOrange text-white px-4 py-2 
          rounded-[30px] font-semibold hover:bg-opacity-80'
              >
                Login
              </button>
              <button className='hover:bg-gray-600 px-4 rounded-full hover:text-white'>
                <GoKebabHorizontal />
              </button>
            </div>
          </div>
        </nav>
      </header>

    </>
  )
}

export default Header
