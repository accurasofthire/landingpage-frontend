import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoSvg from '../assets/keepcodein.svg';
import { CiSearch } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { AiFillPieChart } from "react-icons/ai";
import { LuCopyPlus } from "react-icons/lu";
import { MdAutoGraph } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";

import AnchorLink from 'react-anchor-link-smooth-scroll';

const linkClass = "block rounded-md px-6 py-4 bg-gradient-to-r from-[#FC466B]/5 to-[#3F5EFB]/5 text-base font-medium text-gray-300 hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:opacity-60"

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="bg-[#110D2E] w-full z-50 fixed top-0 lg:static">
      <div className="mx-auto container px-2 sm:px-4 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          <div>
            <img
              className="block h-10 w-auto"
              src={logoSvg}
              alt='img'
            />
          </div>

          <div className="lg:flex justify-center px-2 hidden ml-2 xl:ml-6">
            <div className="p-[1px] relative bg-[#110D2E] opacity-60 rounded-full max-w-sm bg-gradient-to-r from-[#FC466B] to-[#3F5EFB]">
              <input className="pl-3 pr-10 2xl:py-2 py-1 w-full text-[#3F5EFB] border-none rounded-full bg-inherit z-50" type="text" id="name" placeholder="Enter Your Name" />
              <button type="submit" className="absolute right-0 top-0 2xl:mt-3 mt-2 mr-4 z-50">
                <CiSearch className='h-5 w-5 fill-current text-white' />
              </button>
            </div>
          </div>

          <div className="hidden lg:ml-6 lg:block">
            <div className="flex space-x-2 xl:space-x-4">
              <div className="rounded-md px-3 py-2 font-medium text-sm 2xl:text-lg text-white hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200">
                <AnchorLink offset={70} href='#hero'>Home</AnchorLink>
              </div>
              <div className="rounded-md px-3 py-2 font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200">
                <AnchorLink offset={70} href='#services'>Services</AnchorLink>
              </div>
              <div className="rounded-md px-3 py-2 font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200">
                <AnchorLink offset={70} href='#case-study' className='text-nowrap'>Case Studies</AnchorLink>
              </div>
              <div className="rounded-md px-3 py-2 font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200">
                Careers
              </div>
              <div className="rounded-md px-3 py-2 font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200">
                Testimonials
              </div>
              <div className="rounded-md px-3 py-2 font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200">
                <AnchorLink offset={70} href='#about'>About</AnchorLink>
              </div>
              <div className="rounded-md px-3 py-2 font-medium text-sm 2xl:text-lg text-gray-300 hover:text-[#6318F1] cursor-pointer hover:scale-105 duration-200">
                <AnchorLink offset={70} href='#contact'>Contact</AnchorLink>
              </div>
            </div>
          </div>

          <div className="flex">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="hidden ml-2 lg:block">
            <button className="text-nowrap 2xl:px-6 px-2 py-2 bg-[#6318F1] text-[10px] xl:text-sm text-white font-bold rounded-full transition-transform transform-gpu hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 duration-150">
              Apply Now
            </button>
          </div>

        </div>
      </div>

      <div className={`${open ? 'block' : 'hidden'} lg:hidden bg-[#080326] mt-3 mx-10 py-4 pb-8 bg-gradient-to-r from-[#FC466B]/10 to-[#3F5EFB]/10`}>

        <div className="absolute inset-0 left-0 top-0 bg-gradient-to-b w-[33%] h-[200px] rounded-full blur-3xl from-purple-600/60 opacity-50 -z-10 via-purple-500/60 to-purple-400/60"></div>

        <div className="space-y-3 flex flex-col mx-[15%] pb-3 pt-2">

          <div className="p-[1px] relative my-5 mt-10">
            <input id="username" type="text" className="w-full pl-4 pr-10 py-2 mt-4 text-blue-600 opacity-70 bg-transparent formBorder-gradient focus:ring-0" placeholder='enter your name' />
            <button type="submit" className="absolute right-0 top-0 mt-7 mr-4 z-50">
              <CiSearch className='h-5 w-5 fill-current text-white' />
            </button>
          </div>

          <AnchorLink offset={70} href='#hero' onClick={closeMenu} className={linkClass}>
            <div className='flex gap-x-3'>
              <span><IoHomeOutline size={25} /></span>
              <span className='text-xl'>Home</span>
            </div>
          </AnchorLink>

          <AnchorLink offset={70} href='#services' onClick={closeMenu} className={linkClass}>
            <div className='flex gap-x-3'>
              <span><GrServices size={25} /></span>
              <span className='text-xl'>Services</span>
            </div>
          </AnchorLink>

          <AnchorLink offset={70} href='#case-study' onClick={closeMenu} className={linkClass}>
            <div className='flex gap-x-3'>
              <span><AiFillPieChart size={25} /></span>
              <span className='text-xl'>Case Studies</span>
            </div>
          </AnchorLink>

          <div className={linkClass}>
            <div className='flex gap-x-3'>
              <span><LuCopyPlus size={25} /></span>
              <span className='text-xl'>Careers</span>
            </div>
          </div>

          <div className={linkClass}>
            <div className='flex gap-x-3'>
              <span><MdAutoGraph size={25} /></span>
              <span className='text-xl'>Testimonials</span>
            </div>
          </div>

          <AnchorLink offset={70} href='#about' onClick={closeMenu} className={linkClass}>
            <div className='flex gap-x-3'>
              <span><IoHomeOutline size={25} /></span>
              <span className='text-xl'>About</span>
            </div>
          </AnchorLink>

          <AnchorLink offset={70} href='#contact' onClick={closeMenu} className={linkClass}>
            <div className='flex gap-x-3'>
              <span><GrContactInfo size={25} /></span>
              <span className='text-xl'>Contact</span>
            </div>
          </AnchorLink>

        </div>
      </div>
    </nav>
  )
}
