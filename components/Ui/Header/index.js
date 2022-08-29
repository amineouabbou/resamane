import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Standnav from '../../html/Standnav'
import { motion } from 'framer-motion'
import { globaleasing } from '../../../data/useVariants'

const Header = () => {
  return (
    <div className="border-b-[#1D647D40] border-b-[1px] px-[30px] py-[12px] flex items-center">
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
    </div>
  )
}

export default Header
