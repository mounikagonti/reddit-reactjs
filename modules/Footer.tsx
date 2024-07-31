import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import {IoLogoYoutube} from 'react-icons/io'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      title: 'Company',
      feature1: 'Reddit, Inc.',
      feature2: 'Reddit for Business',
      feature3: 'Careers',
      feature4: 'Investors',
      feature5: 'Press Contact',
      feature6: 'Blog',
    },
    {
      id: 2,
      title: 'Community',
      feature1: 'Reddit.com',
      feature2: 'Reddit for community',
      feature3: 'Content Policy',
      feature4: 'Help Center',
      feature5: 'Moderator Code of Conduct',
    },
    {
      id: 3,
      title: 'Privacy & Safety',
      feature1: 'Privacy Policy',
      feature2: 'User Agreement',
      feature3: 'Transparency Report',
      feature4: 'r/redditsecurity',
      feature5: 'Other Terms and Policies',
    },
  ]

  const socialLinks = [
    {
      id: 1,
      icon: <BsFacebook />,
    },
    {
      id: 2,
      icon: <FaInstagram />,
    },
    {
      id: 3,
      icon: <FaXTwitter />,
    },
    {
      id: 4,
      icon: <IoLogoYoutube />,
    },
    {
      id: 5,
      icon: <FaLinkedin />,
    },
  ]

  return (
    <footer className='bg-black px-4 py-2 lg:w-custom lg:ml-auto'>
      <div className='flex items-center lg:justify-between flex-wrap gap-4'>
        <div className='flex items-center gap-2'>
          <div className='flex items-center relative w-[50px] h-[50px]'>
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
        <div className='flex gap-4 lg:gap-16 flex-wrap'>
          {footerLinks.map((item) => (
            <div key={item.id} className='flex flex-col'>
              <h1 className='text-xl font-bold text-customRedOrange'>
                {item.title}
              </h1>

              <Link className='mt-4 text-white' href={'/'}>
                {item.feature1}
              </Link>
              <Link className='mt-2 text-white' href={'/'}>
                {item.feature2}
              </Link>
              <Link className='mt-2 text-white' href={'/'}>
                {item.feature3}
              </Link>
              <Link className='mt-2 text-white' href={'/'}>
                {item.feature4}
              </Link>
              <Link className='mt-2 text-white' href={'/'}>
                {item.feature5}
              </Link>
              <Link className='mt-2 text-white' href={'/'}>
                {item.feature6}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='flex text-white justify-between py-4 flex-wrap gap-2'>
        <div className='flex gap-4'>
          {socialLinks.map((link) => (
            <Link className='text-2xl' key={link.id} href={'/'}>
              {link.icon}
            </Link>
          ))}
        </div>
        <div>
          <p>
            &copy; {new Date().getFullYear()} Reddit, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
