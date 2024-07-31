'use client'
import React, {useState} from 'react'
import {IoChevronDownSharp, IoChevronUpSharp} from 'react-icons/io5'

interface accordionProps {
  text: string
  icon?: React.ReactNode
  showArrow?: boolean
  showIcon?: boolean
  additionalContent?: React.ReactNode
}

const Accordion = ({
  text,
  icon,
  showArrow = true,
  showIcon = true,
  additionalContent,
}: accordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleContent = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        onClick={toggleContent}
        className='flex items-center justify-between gap-2 px-4 py-2 rounded-md w-full hover:bg-red-600 cursor-pointer'
      >
        <div className='flex gap-2'>
          {showIcon && <div className='text-2xl cursor-pointer'>{icon}</div>}
          <div className='cursor-pointer'>{text}</div>
        </div>
        <div className='flex items-center'>
          {showArrow && (
            <div className='cursor-pointer'>
              {isOpen ? (
                <IoChevronUpSharp size={14} />
              ) : (
                <IoChevronDownSharp size={14} />
              )}
            </div>
          )}
        </div>
      </div>
      <div>
        {isOpen && additionalContent && (
          <div className='px-4 py-2'>{additionalContent}</div>
        )}
      </div>
    </>
  )
}

export default Accordion
