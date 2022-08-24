import React from 'react'

const Cmsoverlay = ({ subtitle, title }) => {
  return (
    <div className="overlay absolute bottom-[90px] left-[8%] z-10  flex flex-col justify-center items-center">
      <div className="bloc text-white">
        <div className="mb-[8px] md:mb-[8px] md:leading-[60px] md:text-[35px] font-medium tracking-[7px]">
          Des résidences pour
        </div>
        <div className="font-bold text-[30px] leading-[32px] mb-[20px] md:leading-[58px] md:text-[55px] md:mb-[25px]">
          Étudiantes, Stagiaires,
          <br /> Jeunes actives et plus encore…
        </div>
        <div>
          <a href="#" className="btn w-[180px]">
            Découvrir
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cmsoverlay
