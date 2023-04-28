import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { memo, useCallback, useState } from 'react'
import Standnav from './Standnav'
import Togglemobile from './Togglemobile'
import { motion } from 'framer-motion'
import Mobilesidemenu from './Mobilesidemenu'
import { globaleasing } from '../../data/useVariants'
import Languages from './Languages'

const Mobileheader = () => {
  const [showMobileNav, setshowMobileNav] = useState(false)

  const showMobileNavFun = useCallback(() => {
    setshowMobileNav((prevsate) => !prevsate)
  }, [])
  return (
    <>
      <div className="mobile-header flex px-[40px] relative items-center justify-around mt-[10px] md:hidden border-b-[#1D647D40] border-b-[1px]">
        <div
          className="menu absolute top-[50%] -translate-y-[50%] left-[20px]"
          onClick={showMobileNavFun}
        >
          <Togglemobile />
        </div>
        <div className="logo">
          <Link href="/">
            <a>
              <Image alt="" src="/logo-big.svg" width={51} height={72} />
            </a>
          </Link>
        </div>
        {/* <Languages /> */}
      </div>

      <AnimatePresence>
        {showMobileNav && (
          <Mobilesidemenu
            showMobileNavFun={showMobileNavFun}
            showMobileNav={showMobileNav}
          />
        )}
      </AnimatePresence>

      {/** 
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
      </AnimatePresence>*/}
    </>
  )
}

export default memo(Mobileheader)
