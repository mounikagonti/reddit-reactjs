import React from 'react'

const CommunityHeader = () => {
  return (
    <div className='w-full bg-black rounded-sm p-2'>
      <h1 className='text-[14px] font-bold'>
        /r/ReactJS - The Front Page of React
      </h1>
      <p className='text-[14px] mt-1'>
        A community for discussing anything related to the React UI framework
        and its ecosystem. Join the Reactiflux Discord (reactiflux.com) for
        additional React discussion and help.
      </p>
      <div className='flex gap-4 mt-4'>
        <div>
          <h1 className='font-bold'>412K</h1>
          <div className='text-[12px]'>Members</div>
        </div>
        <div>
          <h1 className='font-bold'>68</h1>
          <div className='text-[12px]'>Online</div>
        </div>
        <div>
          <h1 className='font-bold'>Top 1%</h1>
          <div className='text-[12px]'>Rank by size</div>
        </div>
      </div>
      <hr className='mt-2 mb-2' />
      <div className='text-[12px]'>COMMUNITY BOOKMARKS</div>
      <div className='mt-2 flex flex-col items-center gap-2'>
        <button className='bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-blue-600 w-full'>
          Wiki
        </button>
        <button className='bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-blue-600 w-full'>
          Rules
        </button>
        <button className='bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-blue-600 w-full'>
          Who Available
        </button>
      </div>
      <hr className='mt-2 mb-2' />
      <div className='text-[12px]'>View by Post Types</div>
      <div className='mt-2 flex flex-col gap-2'>
        <button
          className='bg-aquaBlue
         text-white px-4 py-2 rounded-full'
        >
          Featured
        </button>
        <button className='bg-aquaBlue text-white px-4 py-2 rounded-full'>
          Rules
        </button>
        <button className='bg-yellow text-white px-4 py-2 rounded-full'>
          Rules
        </button>
        <button className='bg-limeGreen text-white px-4 py-2 rounded-full'>
          Rules
        </button>
        <button className='bg-deepBlue text-white px-4 py-2 rounded-full'>
          Rules
        </button>
        <button className='bg-goldenrod text-white px-4 py-2 rounded-full'>
          Rules
        </button>
      </div>
    </div>
  )
}

export default CommunityHeader
