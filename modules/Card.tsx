'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import EngagementButtons from './EngagementButtons'
import {FaThumbsUp} from 'react-icons/fa'
import {PiShareFat} from 'react-icons/pi'
import {FaRegMessage} from 'react-icons/fa6'
import axios from 'axios'

interface RedditPostData {
  id: string
  score: number
  title: string
  selftext: string
  url: string
}

interface RedditPost {
  data: RedditPostData
}

interface RedditResponse {
  data: {
    children: RedditPost[]
  }
}

const Card = ({}) => {
  const [redditData, setRedditData] = useState<RedditPostData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  console.log('redditData', redditData)

  useEffect(() => {
    const getRedditData = async () => {
      try {
        const response = await axios.get<RedditResponse>(
          'https://www.reddit.com/r/reactjs.json'
        )
        setRedditData(response.data.data.children.map((child) => child.data))
        setLoading(false)
      } catch (error: any) {
        setLoading(false)
        setError(error.message)
      }
    }

    getRedditData()
  }, [])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && redditData.length > 0 ? (
        redditData.map((item) => (
          <div
            key={item.id}
            className='bg-black rounded-md p-4 hover:bg-grayColor border-b'
          >
            <div className='flex'>
              <div className='flex items-center relative w-[20px] h-[20px]'>
                <Image
                  src='https://styles.redditmedia.com/t5_74pxz/styles/profileIcon_snoo61d4e00b-4366-4c44-ae26-3a62c28dc499-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=7bf167ec531985aa397b1020555f744ec61783e8'
                  alt='reddit-logo'
                  fill
                  className='object-cover rounded-full'
                />
              </div>
              <div className='text-[12px]'>u/dbbk</div>
            </div>
            <h1 className='mt-2 mb-2 text-[16px] font-bold break-words'>
              {item.title}
            </h1>
            <Link
              href={item.url}
              className='text-blue-500 hover:text-blue-700 active:text-blue-900'
            >
              {item.url}
            </Link>
            <p className='mt-4 mb-4 text-[14px] text-textGray break-words'>
              {item.selftext}
            </p>
            <span>score: {item.score}</span>
            <div className='flex gap-3 mt-4'>
              <EngagementButtons icon={<FaThumbsUp />} text='Like' />
              <EngagementButtons icon={<FaRegMessage />} text='48' />
              <EngagementButtons icon={<PiShareFat />} text='Share' />
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
}

export default Card
