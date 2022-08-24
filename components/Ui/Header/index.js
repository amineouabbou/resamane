import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Standnav from '../../html/Standnav'

const Header = () => {
  return (
    <div className="border-b-[#1D647D40] border-b-[1px] px-[30px] py-[12px] flex items-center">
      <div className="mr-[90px]">
        <Link href="/">
          <a className="block h-[64px]">
            <Image src="/logo.svg" width={46} height={64} />
          </a>
        </Link>
      </div>

      <nav className="main-nav">
        <Standnav />
      </nav>
    </div>
  )
}

export default Header
