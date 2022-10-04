import { AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import Slider from 'react-slick'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Customarrows from '../../html/Customarrows'
import Popup from '../../html/Popup'

import Chambreslidercard from './Chambreslidercard'
import Chambretabtitle from './Chambretabtitle'

const apparts = [
  {
    url: '/remove/appartement/01.jpg',
  },
  {
    url: '/remove/appartement/02.jpg',
  },
  {
    url: '/remove/appartement/03.jpg',
  },
  {
    url: '/remove/appartement/04.jpg',
  },
]

const studios = [
  {
    url: '/remove/chambre-18m/01.jpg',
  },
  {
    url: '/remove/chambre-18m/02.jpg',
  },
  {
    url: '/remove/chambre-18m/03.jpeg',
  },
  {
    url: '/remove/chambre-18m/04.jpg',
  },
]

const PMR = [
  {
    url: '/remove/pmr/01.jpg',
  },
  {
    url: '/remove/pmr/02.jpg',
  },
  {
    url: '/remove/pmr/03.jpg',
  },
  {
    url: '/remove/pmr/04.jpg',
  },
  {
    url: '/remove/pmr/05.jpg',
  },
]

const DATA = [
  {
    id: 407,
    body: `Que vous préférez vivre seule ou en colocation, nous avons équipé nos studios de A à Z pour tous vos besoins individuels ou communs. 2 lits séparés, matelas avec oreiller, lampe à chevet, 2 bureaux à chaises, Placards ,Etagères de rangement, kitchenette équipée de lévier plaque chauffante de cuisson et petit frigo, salle de douche, toilette, une connexion internet, et des câbles d’antenne TV. Nous respectons l’inclusion des personnes en situation d’handicap. Pour vous, nous avons conçu et aménagé des studios spacieux spécialement adaptés à toutes vos nécessités. <br />
    1 Lit 1 place, matelas avec oreiller, lampe à chevet, bureaux à chaises, placard , étagères de rangement, cuisine avec évier, plaque chauffantede cuisson, frigo, douche, toilette, , une connexion internet, et des câbles d’antenne TV.`,
  },
  {
    id: 3,
    body: `Nous respectons l’inclusion des personnes à mobilité réduite ou en situation d’handicap. Pour vous, nous avons conçu et aménagé des studios spacieux spécialement adaptés à toutes vos nécessités. <br /> 1 Lit 1 place, matelas avec oreiller, lampe à chevet, bureaux à chaises, placard , étagères de rangement, cuisine avec évier, plaque chauffantede cuisson, frigo, douche, toilette, , une connexion internet, et des câbles d’antenne TV.`,
  },
  {
    id: 15,
    body: `Nos appartements totalement équipés accueillent 2 à 4 personnes. Chaque appartement est composé de 2 chambres, un salon, une salle de douche et des toilettes, avec une cuisine spacieuse aménagée pour votre quotidien.<br />
    Salon canapé, 4 lits, matelas oreillers, lampes à chevet, bureaux à chaises, placard, étagères de rangement, cuisine avec évier, plaque chauffante de cuisson, réfrigérateur, douche, toilette, une connexion internet, et des câbles d’antenne TV.`,
  },
]

export default function Noschambres() {
  const [popupData, setPopupData] = useState('')

  const handleClosePopup = () => {
    setPopupData('')
  }

  const handlePopupClick = (id) => {
    const found = DATA.find((item) => item.id == id)

    setPopupData(found.body)
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
                  <TabPanel>
                    <Customarrows chamberSlider={chamberSlider} />
                    <Slider
                      {...settings}
                      ref={(currslide) => (chamberSlider.current = currslide)}
                    >
                      {studios.map((item, index) => (
                        <Chambreslidercard key={index} item={item} />
                      ))}
                    </Slider>
                  </TabPanel>
                  <TabPanel>
                    <Customarrows chamberSlider={chamberSlider2} />
                    <Slider
                      {...settings}
                      ref={(currslide) => (chamberSlider2.current = currslide)}
                    >
                      {PMR.map((item, index) => (
                        <Chambreslidercard key={index} item={item} />
                      ))}
                    </Slider>
                  </TabPanel>
                  <TabPanel>
                    <Customarrows chamberSlider={chamberSlider3} />
                    <Slider
                      {...settings}
                      ref={(currslide) => (chamberSlider3.current = currslide)}
                    >
                      {apparts.map((item, index) => (
                        <Chambreslidercard key={index} item={item} />
                      ))}
                    </Slider>
                  </TabPanel>
                </div>
              </div>
            </div>
            <div className="container mx-auto order-1 md:order-2">
              <div className="md:flex flex-row">
                <div className="column md:w-1/2 relative">
                  <h2 className=" text-[27px] md:text-[32px] font-bold uppercase text-white leading-[40px] mb-[70px] md:mb-[90px] mt-[45px]">
                    Chambres <br /> et appartements
                  </h2>
                  <div className="md:flex flex-col items-end">
                    <div className="bloc mb-[20px] md:mb-[120px] vertical-tabs">
                      <TabList>
                        <Tab className="text-white/10 hover:text-white transition-all hover:bg-white/5">
                          <Chambretabtitle
                            handlePopupClick={handlePopupClick}
                            title="Chambres<br/> de 18m²"
                            number="407"
                          />
                        </Tab>
                        <Tab className="text-white/10 hover:text-white transition-all hover:bg-white/5">
                          <Chambretabtitle
                            handlePopupClick={handlePopupClick}
                            title="Studios de <br/> 18m² (PMR)"
                            number="3"
                          />
                        </Tab>
                        <Tab className="text-white/10 hover:text-white transition-all hover:bg-white/5">
                          <Chambretabtitle
                            handlePopupClick={handlePopupClick}
                            title="Appartements<br /> de 50m²"
                            number="15"
                          />
                        </Tab>
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
