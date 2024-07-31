'use client'
import React, {useContext} from 'react'
import Accordion from './Accordion'
import {IoHomeOutline} from 'react-icons/io5'
import {LuArrowUpRightFromCircle} from 'react-icons/lu'
import {RiFileSettingsLine, RiReactjsFill} from 'react-icons/ri'
import {BiMoviePlay} from 'react-icons/bi'
import {FaRegStar} from 'react-icons/fa'
import {GrTechnology} from 'react-icons/gr'
import {BsFillPatchQuestionFill} from 'react-icons/bs'
import {CgGames} from 'react-icons/cg'
import {
  MdCompress,
  MdLiveHelp,
  MdOutlineSignalWifiStatusbarConnectedNoInternet4,
} from 'react-icons/md'
import {FcAbout, FcAdvertising} from 'react-icons/fc'
import {ImBlogger2} from 'react-icons/im'
import useSidebarState from '@/hooks/useSidebarState'

const Sidebar = () => {
  const {isSidebarOpen} = useSidebarState()

  const sidebarClassName = isSidebarOpen
    ? 'fixed top-[60px] h-full z-10 left-0 w-[250px] px-4 py-2 bg-black text-white  overflow-y-scroll border-r border-gray-200 lg:hidden'
    : 'hidden lg:block px-4 py-2 bg-black text-white scroll overflow-y-scroll border-r border-gray-200 col-span-1 fixed top-[60px] h-full z-10 left-0 w-[250px]'

  return (
    <div className={sidebarClassName}>
      <div>
        <Accordion text='Home' icon={<IoHomeOutline />} showArrow={false} />
        <Accordion
          text='Popular'
          icon={<LuArrowUpRightFromCircle />}
          showArrow={false}
        />
      </div>
      <hr className='mt-2 mb-2 z' />
      <div>
        <Accordion
          text='Recent'
          showIcon={false}
          showArrow={true}
          additionalContent={
            <div>
              <Accordion
                text='r/reactjs'
                icon={<RiReactjsFill />}
                showArrow={false}
              />
            </div>
          }
        />
      </div>
      <hr className='mt-2 mb-2' />
      <div>
        <Accordion
          text='Topics'
          showIcon={false}
          showArrow={true}
          additionalContent={
            <div>
              <Accordion
                text='Internet'
                icon={<MdOutlineSignalWifiStatusbarConnectedNoInternet4 />}
                showArrow={false}
              />
              <Accordion text='Games' icon={<CgGames />} showArrow={false} />
              <Accordion
                text='Q&As'
                icon={<BsFillPatchQuestionFill />}
                showArrow={false}
              />
              <Accordion
                text='Technology'
                icon={<GrTechnology />}
                showArrow={false}
              />
              <Accordion
                text='Pop Culture'
                icon={<FaRegStar />}
                showArrow={false}
              />
              <Accordion
                text='Movies & TV'
                icon={<BiMoviePlay />}
                showArrow={false}
              />
            </div>
          }
        />
      </div>
      <hr className='mt-2 mb-2' />
      <div>
        <Accordion
          text='Resources'
          showIcon={false}
          showArrow={true}
          additionalContent={
            <div>
              <Accordion text='About' icon={<FcAbout />} showArrow={false} />
              <Accordion
                text='Advertise'
                icon={<FcAdvertising />}
                showArrow={false}
              />
              <Accordion text='Help' icon={<MdLiveHelp />} showArrow={false} />
              <Accordion text='Blog' icon={<ImBlogger2 />} showArrow={false} />
              <Accordion
                text='Careers'
                icon={<RiFileSettingsLine />}
                showArrow={false}
              />
              <Accordion text='Press' icon={<MdCompress />} showArrow={false} />
            </div>
          }
        />
      </div>
    </div>
  )
}

export default Sidebar
