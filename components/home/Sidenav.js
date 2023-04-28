import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { globaleasing } from '../../data/useVariants'
import Togglemobile from '../html/Togglemobile'
import Languages from '../html/Languages'
import { useTranslation } from 'next-i18next'

const Sidenav = ({ slogan }) => {
  const { t } = useTranslation()
  return (
    <div className="side-nav w-[90px] bg-white absolute top-0 left-0 h-full z-20 pt-[25px] pb-[10px] hidden md:flex md:flex-col">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            ease: globaleasing,
            duration: 0.8,
            delay: 1.8,
          },
        }}
        className="logo-box flex flex-col justify-center items-center mb-[25px]"
      >
        <Link href="/">
          <a>
            <Image alt="" src="/logo.svg" width={51} height={72} />
          </a>
        </Link>
      </motion.div>

      <div className="tall-bar grow flex flex-col justify-center items-center relative">
        <motion.div
          initial={{ visibility: 'hidden', height: 0 }}
          animate={{
            visibility: 'visible',
            height: '100%',
            transition: {
              duration: 2,
              ease: globaleasing,
              delay: 1.2,
            },
          }}
          className="line bg-[#0a2d3a1f] w-[1px] absolute top-0 bottom-0 mx-auto my-auto"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.9,
              delay: 2.5,
            },
          }}
          className="slogan text-primary text-[11px] font-bold bg-white px-[22px]"
        >
          {slogan}
        </motion.div>
      </div>

      {/* <Languages className="mx-auto mt-[10px]" /> */}
    </div>
  )
}

export default Sidenav
