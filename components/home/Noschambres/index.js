import { AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Slider from 'react-slick'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Customarrows from '../../html/Customarrows'
import Popup from '../../html/Popup'

import Chambreslidercard from './Chambreslidercard'
import Chambretabtitle from './Chambretabtitle'

const DATA = [
  {
    id: 407,
    imageURL: '/remove/pops/double.png',
  },
  {
    id: 3,
    imageURL: '/remove/pops/pmr.png',
  },
  {
    id: 15,
    imageURL: '/remove/pops/appart.png',
  },
]

export default function Noschambres(props) {
  const [popupData, setPopupData] = useState('')

  const { sectionTitle, tabsRep } = props

  const handleClosePopup = () => {
    setPopupData('')
  }

  const handlePopupClick = (id) => {
    const found = DATA.find((item) => item.id == id)
    setPopupData(found)
  }

  const chamberSlider = useRef()
  const chamberSlider2 = useRef()
  const chamberSlider3 = useRef()
  const settings = {
    arrows: false,
    infinite: true,
    lazyLoad: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  }

  return (
    <section className="chambres-appart  relative md:pl-[90px]">
      <div className="wrap md:pt-[90px] bg-[#013C50] xl:[clip-path:polygon(0_0,_100%_0,_100%_100%,_5%_100%)]">
        <div className="inner relative min-h-[320px] md:min-h-[870px]">
          <Tabs className="flex flex-col md:block" focusTabOnClick={false}>
            <div className="overlay md:absolute md:h-full w-full top-0 left-0 order-2 md:order-1">
              <div className="md:flex flex-col items-end h-full">
                <div className="md:w-1/2 relative z-10">
                  {tabsRep.map((item, index) => (
                    <TabPanel key={index}>
                      <Customarrows chamberSlider={chamberSlider} />
                      <Slider
                        {...settings}
                        ref={(currslide) => (chamberSlider.current = currslide)}
                      >
                        {item.gallery.map((item, index) => (
                          <Chambreslidercard key={index} item={item} />
                        ))}
                      </Slider>
                    </TabPanel>
                  ))}
                </div>
              </div>
            </div>
            <div className="container mx-auto order-1 md:order-2">
              <div className="md:flex flex-row">
                <div className="column md:w-1/2 relative">
                  <h2 className=" text-[27px] md:text-[32px] font-bold uppercase text-white leading-[40px] mb-[70px] md:mb-[90px] mt-[45px]">
                    <div dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                  </h2>
                  <div className="md:flex flex-col items-end">
                    <div className="bloc mb-[20px] md:mb-[120px] vertical-tabs">
                      <TabList>
                        {tabsRep.map((item, index) => (
                          <Tab
                            key={index}
                            className="text-white/10 hover:text-white transition-all hover:bg-white/5"
                          >
                            <Chambretabtitle
                              handlePopupClick={handlePopupClick}
                              title={item?.tabLabelGroup?.label}
                              number={item?.tabLabelGroup?.number}
                            />
                          </Tab>
                        ))}
                      </TabList>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>
        </div>
      </div>

      <AnimatePresence>
        {popupData && (
          <Popup handleClosePopup={handleClosePopup} data={popupData} />
        )}
      </AnimatePresence>
    </section>
  )
}
