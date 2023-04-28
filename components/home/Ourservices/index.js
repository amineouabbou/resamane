import { useContext, useRef, useState } from 'react'
import Slider from 'react-slick'
import Servicescard from './Servicescard'
import Servicespagination from './Servicespagination'

const Ourservices = ({ introductionGroup, tabs }) => {
  const mediaSlider = useRef()
  const [active, setActive] = useState(0)

  const settings = {
    arrows: false,
    dots: false,
    className: 'services-slide',
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    beforeChange: (current, next) => setActive(next),
  }

  return (
    <section className="our-services bg-[#F5FCFD] pt-[130px] pb-[120px] hidden md:block">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="item">
            <h2 className="text-[32px] font-bold leading-[37px]">
              {introductionGroup?.titre}
            </h2>
          </div>

          <div className="item relative w-3/5">
            <div className="bloc text-[26px] leading-[37px] font-medium text-[#084C64]">
              {introductionGroup?.texte}
            </div>
          </div>
        </div>

        <div className="asasasasa mt-[70px]">
          <div className="slides">
            <Slider
              {...settings}
              ref={(mslider) => (mediaSlider.current = mslider)}
            >
              {tabs.map((item, index) => {
                return <Servicescard key={index} {...item} />
              })}
            </Slider>
          </div>
        </div>
      </div>

      <Servicespagination
        servicesSlider={mediaSlider}
        tabs={tabs}
        Slidestate={{ active, setActive }}
      />
    </section>
  )
}

export default Ourservices
