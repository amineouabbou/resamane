import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { globaleasing } from '../../data/useVariants'
import clsx from 'clsx'

const Languages = ({ className, lang: propLang }) => {
  const router = useRouter()
  const [active, setActive] = useState(false)

  const handleLocaleChange = (lang) => {
    router.push(router.route, router.asPath, {
      locale: lang,
      shallow: false,
    })
  }
  return (
    <>
      <div
        className={clsx('relative w-[20px] md:w-[29px] h-[20px] md:h-[29px]', {
          [`${className}`]: className,
          'mr-auto visible': router.locale === 'ar',
          'ml-auto visible': router.locale !== 'ar',
        })}
        onMouseOver={() => setActive(true)}
        onMouseOut={() => setActive(false)}
      >
        <div>
          <div className="w-[20px] md:w-[29px] h-[20px] md:h-[29px] relative cursor-pointer">
            <Image
              src={`/icons/${router.locale}.png`}
              alt="lang"
              layout="fill"
            />
          </div>
        </div>
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ ease: globaleasing, duration: 0.8 }}
              className="bg-[#fff] -left-[20px] rounded-[5px] right-0 mx-auto p-4 absolute top-full shadow-2xl shadow-primary/40 z-50 flex flex-col items-center w-[75px]"
            >
              <div
                onClick={() => handleLocaleChange('en')}
                className="w-[20px] md:w-[29px] h-[20px] md:h-[29px] relative cursor-pointer mb-[5px]"
              >
                <Image src="/icons/en.png" alt="en" layout="fill" />
              </div>
              <div
                onClick={() => handleLocaleChange('fr')}
                className="w-[20px] md:w-[29px] h-[20px] md:h-[29px] relative cursor-pointer mb-[5px]"
              >
                <Image src="/icons/fr.png" alt="fr" layout="fill" />
              </div>
              <div
                onClick={() => handleLocaleChange('ar')}
                className="w-[20px] md:w-[29px] h-[20px] md:h-[29px] relative cursor-pointer "
              >
                <Image src="/icons/ar.png" alt="ar" layout="fill" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Languages
