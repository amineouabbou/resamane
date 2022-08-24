import Image from 'next/image'

import vuePanImg from '../../public/remove/360.jpg'
import playIcon from '../../public/icons/play.svg'

const Panoramic = () => {
  return (
    <section className="360-section relative hidden md:block">
      <div className="overlay absolute h-full w-full left-0 right-0 flex flex-col justify-end items-center z-10 bg-primary/25 bg-blend-darken">
        <div className="container mx-auto mb-[60px]">
          <div className="bloc text-white flex justify-between items-center">
            <div className="font-bold uppercase text-[55px] leading-[61px]">
              Visite 360 <br /> de la résidence
            </div>
            <div>
              <a
                className="w-[144px] h-[144px] rounded-full bg-white/70 flex flex-col justify-center items-center hover:scale-125 hover:bg-white/90"
                href="#"
              >
                <i className="block">
                  <Image src={playIcon} width="26px" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="img relative min-h-[830px]">
        <Image src={vuePanImg} layout="fill" objectFit="cover" />
      </div>
    </section>
  )
}

export default Panoramic
