import Image from 'next/image'
import Link from 'next/link'
import React, { memo } from 'react'
import Togglemobile from './Togglemobile'

const Mobileheader = ({ showMobileNavFun }) => {
  return (
    <div className="mobile-header flex relative justify-center mt-[10px] md:hidden border-b-[#1D647D40] border-b-[1px]">
      <div
        className="menu absolute top-[50%] -translate-y-[50%] left-[20px]"
        onClick={showMobileNavFun}
      >
        <Togglemobile />
      </div>
      <div className="logo">
        <Link href="/">
          <a>
            <Image alt="" src="/logo.svg" width={51} height={72} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default memo(Mobileheader)
