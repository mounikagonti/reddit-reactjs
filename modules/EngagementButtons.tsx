import React from 'react'
import {FaThumbsUp} from 'react-icons/fa'

interface EngagementButtonsProps {
  text: string
  icon?: React.ReactNode
  showIcon?: boolean
}
const EngagementButtons = ({icon, text}: EngagementButtonsProps) => {
  return (
    <div>
      <button className='flex items-center gap-2 text-white hover:text-blue-700 transition-colors rounded-full bg-grayColor px-2 py-1'>
        {icon}
        <span>{text}</span>
      </button>
    </div>
  )
}

export default EngagementButtons
