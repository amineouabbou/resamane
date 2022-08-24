import { useRef } from 'react'
import Slider from 'react-slick'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Customarrows from '../../html/Customarrows'

import Chambreslidercard from './Chambreslidercard'
import Chambretabtitle from './Chambretabtitle'

export default function Noschambres() {
  const chamberSlider = useRef()
  const settings = {
    arrows: false,
    infinite: false,
    lazyLoad: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="chambres-appart  relative hidden md:block pl-[90px]">
      <div className="wrap pt-[90px] bg-[#013C50] xl:[clip-path:polygon(0_0,_100%_0,_100%_100%,_5%_100%)]">
        <div className="inner relative min-h-[870px]">
          <Tabs focusTabOnClick={false}>
            <div className="overlay absolute h-full w-full top-0 left-0 ">
              <div className="flex flex-col items-end h-full">
                <div className="md:w-1/2 relative z-10">
                  <TabPanel>
                    <Customarrows chamberSlider={chamberSlider} />
                    <Slider
                      {...settings}
                      ref={(currslide) => (chamberSlider.current = currslide)}
                    >
                      {[1, 2, 3].map((item) => (
                        <Chambreslidercard key={item} item={item} />
                      ))}
                    </Slider>
                  </TabPanel>
                  <TabPanel>
                    <Slider {...settings}>
                      {[8, 9, 10].map((item) => (
                        <Chambreslidercard key={item} item={item} />
                      ))}
                    </Slider>
                  </TabPanel>
                  <TabPanel>
                    <Slider {...settings}>
                      {[9, 10, 11].map((item) => (
                        <Chambreslidercard key={item} item={item} />
                      ))}
                    </Slider>
                  </TabPanel>
                </div>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="flex flex-row">
                <div className="column md:w-1/2 relative">
                  <h2 className="text-[32px] font-bold uppercase text-white leading-[40px] mb-[90px] mt-[45px]">
                    Chambres <br /> et appartements
                  </h2>
                  <div className="flex flex-col items-end">
                    <div className="bloc mb-[120px] vertical-tabs">
                      <TabList>
                        <Tab className="text-white/10 hover:text-white transition-all hover:bg-white/5">
                          <Chambretabtitle
                            title="Chambres<br/> de 20m²"
                            number="407"
                          />
                        </Tab>
                        <Tab className="text-white/10 hover:text-white transition-all hover:bg-white/5">
                          <Chambretabtitle
                            title="Chambres<br/> de 18m²"
                            number="3"
                          />
                        </Tab>
                        <Tab className="text-white/10 hover:text-white transition-all hover:bg-white/5">
                          <Chambretabtitle
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
    </section>
  )
}
