import Image from 'next/image'
import React from 'react'

const SubredditHeader = () => {
  return (
    <div className='hidden lg:block w-full bg-grayColor h-[70px] rounded-md mt-2'>
      <div className='relative bg-blue-800 w-[80px] h-[80px] rounded-full ml-6 top-8'>
        <Image
          src={
            'https://styles.redditmedia.com/t5_2zldd/styles/communityIcon_fbblpo38vy941.png'
          }
          alt='reddit-logo'
          fill
          className='object-cover rounded-full'
        />
      </div>
      <div className='flex justify-between px-32'>
        <h1 className='text-[32px] font-bold'>r/reactjs</h1>
        <div className='flex gap-4 mt-4'>
          <button className=' bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-blue-600'>
            + Create a Post
          </button>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-gray-800'>
            Join
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubredditHeader
