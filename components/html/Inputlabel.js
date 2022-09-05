import React from 'react'

const Inputlabel = ({ name, mediumfont }) => {
  let fontClass = ''
  if (mediumfont) {
    fontClass = 'font-medium'
  } else {
    fontClass = 'font-semibold'
  }
  return (
    <label
      className={`text-[#023141] md:text-[16px] ${fontClass} block mb-[10px] leading-[18px]`}
    >
      {name}
    </label>
  )
}

export default Inputlabel
