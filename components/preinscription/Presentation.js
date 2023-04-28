import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../data/useVariants'

const Presentation = ({ titre, description, stepsList }) => {
  return (
    <section className="mb-[90px] mt-[70px]">
      <div className="md:w-[50%] mx-auto px-[15px] md:px-0">
        <div
          className="text-[22px] md:text-[32px] text-center md:leading-[40px] uppercase font-bold mb-[35px] origin-center"
          dangerouslySetInnerHTML={{ __html: titre }}
        />
        <div
          className="text-[20px] md:text-[28px] text-center md:leading-[32px] mb-[55px] text-lightblue"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {stepsList.map((item, index) => (
          <div
            key={index}
            className="section border-[#ccc]/70 border-b-[1px] pb-[40px] mb-[40px] last:border-b-0 last:mb-0 last:pb-0"
          >
            <h2 className="text-[24px] md:text-[32px] font-bold leading-[37px] mb-6 text-center">
              {item.title}
            </h2>
            <div className="std">
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Presentation
