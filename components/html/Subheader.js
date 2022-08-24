import Image from 'next/image'
import React from 'react'
import Cmsoverlay from './Cmsoverlay'

const Subheader = ({ title, subtitle, description, type }) => {
  if (type === 'full') {
    return (
      <div className="page-sub-pres px-[30px] relative pb-[30px]">
        <Cmsoverlay title={title} subtitle={subtitle} />
        <div className="absolute top-0 bottom-0 w-3/5 right-0 bg-lightblue"></div>
        <div className="w-3/4">
          <div className="relative h-[515px]">
            <Image
              src="/remove/slide-1.png"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="page-sub-pres px-[30px] relative py-[85px]">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-5/12 flex flex-col items-center">
          <h1 className="text-[42px] font-bold leading-[40px]">{title}</h1>
          {description ? (
            <div className="text-center mt-[18px]">{description}</div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Subheader
