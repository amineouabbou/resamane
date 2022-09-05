import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import Standnav from '../../html/Standnav'
import { AnimatePresence, motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'
import Mobileheader from '../../html/Mobileheader'

const Header = () => {
  const [sticky, setSticky] = useState(false)
  const [showMobileNav, setshowMobileNav] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  const showMobileNavFun = useCallback(() => {
    setshowMobileNav((prevsate) => !prevsate)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sticky])
  return (
    <>
      <Mobileheader showMobileNavFun={showMobileNavFun} />
      {sticky ? (
        <motion.div
          initial={{ y: -90 }}
          animate={{
            y: 0,
            transition: {
              duration: 1,
              ease: globaleasing,
            },
          }}
          className="border-b-[#1D647D40] border-b-[1px] h-[80px] px-[30px] py-[12px] hidden md:flex items-center fixed top-0 w-full z-40 bg-white"
        >
          <div className="mr-[90px] overflow-hidden">
            <motion.div
              initial={{ scale: 0.7, y: 90 }}
              animate={{
                scale: 1,
                y: 0,
                transition: {
                  duration: 1.6,
                  ease: globaleasing,
                },
              }}
              className=""
            >
              <Link href="/">
                <a className="block h-[64px]">
                  <Image
                    alt="Résidence Amane"
                    src="/logo.svg"
                    width={46}
                    height={64}
                  />
                </a>
              </Link>
            </motion.div>
          </div>

          <nav className="main-nav">
            <Standnav />
          </nav>
        </motion.div>
      ) : null}

      <div
        className={`border-b-[#1D647D40] fixed ${
          showMobileNav ? `translate-x-0` : `-translate-x-full`
        }  transition-all duration-700  md:translate-x-0 w-[90%] md:w-full bg-white px-5 z-[100] top-0 bottom-0 my-auto md:static md:border-b-[1px] md:px-[30px] md:py-[12px] md:flex md:items-center`}
      >
        <div className="md:mr-[90px] py-5 md:py-0 flex flex-col md:block items-center overflow-hidden border-b-[#1D647D40] border-b-[1px] md:border-0 relative">
          <div
            className="close absolute top-[50%] -translate-y-[50%] left-[20px] font-light text-[21px] md:hidden"
            onClick={showMobileNavFun}
          >
            X
          </div>
          <motion.div
            initial={{ scale: 0.7, y: 90 }}
            animate={{
              scale: 1,
              y: 0,
              transition: {
                duration: 1.6,
                ease: globaleasing,
              },
            }}
            className=""
          >
            <Link href="/">
              <a className="block h-[64px]">
                <Image
                  alt="Résidence Amane"
                  src="/logo.svg"
                  width={46}
                  height={64}
                />
              </a>
            </Link>
          </motion.div>
        </div>

        <nav className="main-nav pt-5 md:pt-0">
          <Standnav />
        </nav>
      </div>

      <AnimatePresence>
        {showMobileNav && (
          <motion.div
            onClick={showMobileNavFun}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: globaleasing,
              },
            }}
            exit={{ opacity: 0 }}
            className="backdrop bg-[#000]/50 fixed top-0 bottom-0 left-0 right-0 my-auto mx-auto z-40"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
