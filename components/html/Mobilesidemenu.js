import React from 'react'
import Standnav from './Standnav'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { globaleasing } from '../../data/useVariants'

const Mobilesidemenu = ({ showMobileNavFun, showMobileNav }) => {
  return (
    <>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{
          x: '0',
          transition: {
            duration: 1.6,
            ease: globaleasing,
          },
        }}
        exit={{
          x: '-100%',
          transition: {
            duration: 0.8,
            ease: globaleasing,
          },
        }}
        className="fixed w-[90%] md:w-full bg-white py-5 px-5 z-[100] top-0 bottom-0 my-auto"
      >
        <div className="flex flex-col items-center relative overflow-hidden">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 1.4,
                ease: globaleasing,
              },
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: {
                duration: 1.6,
                ease: globaleasing,
              },
            }}
            className="close absolute top-[50%] -translate-y-[50%] left-[20px] font-light text-[21px] md:hidden"
            onClick={showMobileNavFun}
          >
            X
          </motion.div>
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
            exit={{
              scale: 0.7,
              y: 90,
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
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: '100%',
            transition: {
              duration: 1,
              ease: globaleasing,
            },
          }}
          exit={{ width: 0 }}
          className="devidor h-[1px] my-4 bg-[#1D647D40] mx-auto"
        ></motion.div>
        <div className="main-nav pt-5 md:pt-0">
          <Standnav />
        </div>
      </motion.div>

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
        exit={{
          opacity: 0,
          transition: {
            duration: 0.8,
            ease: globaleasing,
          },
        }}
        className="backdrop bg-[#000]/50 fixed top-0 bottom-0 left-0 right-0 my-auto mx-auto z-40"
      ></motion.div>
    </>
  )
}

export default Mobilesidemenu
