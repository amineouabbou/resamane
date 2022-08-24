import Slider from 'react-slick'
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaRegEnvelopeOpen,
  FaMapMarkerAlt,
} from 'react-icons/fa'

import SEO from '../components/SEO'
import Layout from '../components/Ui/Layout'
import Navmain from '../components/Navmain'
import Card from '../components/mainslider/Card'
import Sidenav from '../components/home/Sidenav'
import Aboutsection from '../components/home/Aboutsection'
import Ourservices from '../components/home/Ourservices'
import Panoramic from '../components/home/Panoramic'
import Mediatheque from '../components/home/Mediatheque'
import Footer from '../components/Ui/Footer'
import { FethCmsPage } from '../api'

import Image from 'next/image'
import Link from 'next/link'

export default function Home({ data }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    lazyLoad: 'progressive',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Layout>
      <SEO />
      <div className="main-screen-home relative pl-[90px]">
        <Sidenav />

        <div className="main-slideshow xl:[clip-path:polygon(3%_0,_100%_0,_100%_100%,_0_100%)]">
          <Slider {...settings}>
            {[1, 2, 3].map((item) => (
              <Card key={item} item={item} />
            ))}
          </Slider>
        </div>
      </div>

      <Navmain />

      <section className="intro-section">
        <div className="container mx-auto">
          <div className="text-[32px] leading-[40px] uppercase font-bold mb-[45px]">
            VOUS L’AVEZ IMAGINÉ… <br />
            NOUS L’AVONS CONSTRUIT.
          </div>
        </div>

        <div className="inner relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
            <div className="container mx-auto h-full relative">
              <div className="overlay bg-white w-2/5 absolute bottom-0 right-0 p-[35px]">
                Dans une ville comme Agadir, devenue un grand pôle urbain et
                universitaire, recevant chaque année des centaines d’étudiantes
                venant des quatre coins du Royaume, notre offre est une solution
                de logement tout inclus, marquée par une expérience humaine
                éminemment enrichissante et singulière qui érige le crédo de la
                sécurité, la quiétude, le confort, la convivialité, et les
                belles valeurs du vivre ensemble et de la convivance
                harmonieuse, afin de vous aider à réussir chaque pas franchi
                durant votre parcours académique ou professionnel.
              </div>
            </div>
          </div>
          <div className="h-[475px] relative w-2/3">
            <Image
              src="/remove/intro-bg.jpg"
              layout="fill"
              alt=""
              objectFit="cover"
            />
          </div>
        </div>

        <div className="w-2/3 mx-auto">
          <div className="cta relative pt-[60px] pb-[90px]">
            <div className="absolute -top-[32px] left-[30px]">
              <Image src="/icons/quoate.svg" alt="" width={99} height={64} />
            </div>
            <div className="absolute -bottom-[40px] right-[50px] scale-y-[-1]">
              <Image src="/icons/quoate.svg" alt="" width={190} height={123} />
            </div>
            <div className="uppercase leading-[41px] font-medium text-center">
              <span className="text-[32px]">
                BIENVENUE DANS VOTRE HAVRE DE PAIX ET DE SÉRÉNITÉ !
              </span>{' '}
              <br />
              <span className="text-[41px] text-lightblue">
                RESIDENCES AMANE
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="nos-atouts">
        <div className="container mx-auto relative">
          <div className="absolute -bottom-[230px] left-[15px] z-50">
            <Image
              src="/icons/shape.svg"
              alt="shape"
              width={110}
              height={451}
            />
          </div>
          <div className="inner bg-[#013C50] py-[100px] xl:[clip-path:polygon(0_0,_100%_0,_100%_100%,_5%_100%)]">
            <div className="text-white font-bold uppercase text-[37px] text-center mb-[100px]">
              NOS ATOUTS
            </div>

            <div className="blocs w-2/3 mx-auto grid grid-cols-2 gap-x-20">
              <div className="bloc text-white mb-[85px] flex flex-col items-center">
                <div className="w-3/4">
                  <div className="icon mb-[50px]">
                    <Image
                      src="/icons/proximite.svg"
                      alt=""
                      width={130}
                      height={116}
                    />
                  </div>
                  <div className="uppercase font-semibold text-[28px] leading-[40px] mb-[10px]">
                    PROXIMITÉ
                  </div>
                  <div className="font-light text-[18px] leading-[24px]">
                    Hébergements spacieux
                    <br /> modernes équipés connectés, et <br /> espaces communs
                    pratiques.
                  </div>
                </div>
              </div>

              <div className="bloc text-white mb-[85px] flex flex-col items-center">
                <div className="w-3/4">
                  <div className="icon mb-[50px]">
                    <Image
                      src="/icons/security.svg"
                      alt=""
                      width={97}
                      height={109}
                    />
                  </div>
                  <div className="uppercase font-semibold text-[28px] leading-[40px] mb-[10px]">
                    SÉCURITE
                  </div>
                  <div className="font-light text-[18px] leading-[24px]">
                    24/7
                  </div>
                </div>
              </div>

              <div className="bloc text-white mb-[85px] flex flex-col items-center">
                <div className="w-3/4">
                  <div className="icon mb-[50px]">
                    <Image
                      src="/icons/comodities.svg"
                      alt=""
                      width={121}
                      height={109}
                    />
                  </div>
                  <div className="uppercase font-semibold text-[28px] leading-[40px] mb-[10px]">
                    COMMODITES
                  </div>
                  <div className="font-light text-[18px] leading-[24px]">
                    Supérette, GAB, pharmacie, laboratoires d’analyses
                    médicales, centre de copie, laverie…
                  </div>
                </div>
              </div>

              <div className="bloc text-white mb-[85px] flex flex-col items-center">
                <div className="w-3/4">
                  <div className="icon mb-[50px]">
                    <Image
                      src="/icons/happy-face.svg"
                      alt=""
                      width={126}
                      height={126}
                    />
                  </div>
                  <div className="uppercase font-semibold text-[28px] leading-[40px] mb-[10px]">
                    SÉRÉNITÉ
                  </div>
                  <div className="font-light text-[18px] leading-[24px]">
                    Hébergements spacieux
                    <br /> modernes équipés connectés, et <br /> espaces communs
                    pratiques.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Panoramic />

      <section className="bg-[#F5FCFD] py-[150px]">
        <div className="container mx-auto">
          <div className="leading-[45px] text-[30px] text-center mb-[45px] font-medium">
            HABITER LES RÉSIDENCES AMANE VOUS INTÉRESSE ? <br />
            <span className="text-lightblue font-bold">
              RÉSERVEZ VOTRE PLACE DÈS MAINTENANT !
            </span>
          </div>
          <div className="cta flex flex-col items-center">
            <Link href="/preinscription">
              <a href="#" className="btn w-[220px] outborder">
                PRÉ-INSCRIPTION
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-section bg-[#F5FCFD] relative">
        <div className="absolute bottom-0 w-full h-[130px] bg-white right-0"></div>
        <div className="bg-[#013C50] absolute top-0 left-0 w-4/5 bottom-0 h-full [clip-path:polygon(0_0,_100%_0%,_97%_100%,_0%_100%)]"></div>
        <div className="container mx-auto relative z-10 py-[120px]">
          <div className="absolute -top-[150px] left-[145px] z-10">
            <Image
              src="/icons/shape.svg"
              alt="shape"
              width={110}
              height={451}
            />
          </div>
          <h2 className="text-white font-bold uppercase text-[32px] text-center mb-[40px]">
            CONTACTEZ-NOUS
          </h2>
          <div className="bloc text-[21px] text-white flex flex-col items-center">
            <div className="w-2/5">
              <div className="flex mb-[15px]">
                <span className="text-lightblue text-[26px] mr-[15px]">
                  <FaPhoneAlt />
                </span>
                <div className="leading-[25px]">
                  <span className="font-medium">PAR TÉLÉPHONE :</span> +212 661
                  892 951
                </div>
              </div>

              <div className="flex mb-[15px]">
                <span className="text-lightblue text-[28px] mr-[15px]">
                  <FaWhatsapp />
                </span>
                <div className="leading-[25px]">
                  <span className="font-medium">PAR WHATSAPP :</span> +212 661
                  892 951
                </div>
              </div>

              <div className="flex mb-[15px]">
                <span className="text-lightblue text-[26px] mr-[15px]">
                  <FaRegEnvelopeOpen />
                </span>
                <div className="leading-[25px]">
                  <span className="font-medium">PAR EMAIL :</span>{' '}
                  <a
                    className="text-lightblue underline hover:text-white"
                    href="#"
                  >
                    INFO@RESIDENCESAMANE.MA
                  </a>
                </div>
              </div>

              <div className="flex mb-[15px]">
                <span className="text-lightblue text-[26px] mr-[15px]">
                  <FaMapMarkerAlt />
                </span>
                <div className="leading-[25px]">
                  <span className="font-medium">VISITEZ-NOUS : </span>{' '}
                  <span className="text-[19px]">
                    Du Lundi au vendredi de 8h30 à 17h30 hors jours fériés. Au
                    Boulevard 11 Janvier, quartier Dakhla, Bloc D1, Agadir.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/*
      {data.Page_Acfhome_SectionsFlex_NosServices ? <Ourservices {...data.Page_Acfhome_SectionsFlex_NosServices} /> : "" }

      

      <h2 className='text-5xl font-proxima-nova font-bold uppercase text-[32px] leading-[40px]'>VOUS L’AVEZ IMAGINÉ… <br />NOUS L’AVONS CONSTRUIT.</h2>
      
      {data.Page_Acfhome_SectionsFlex_Presentation ? <Aboutsection {...data.Page_Acfhome_SectionsFlex_Presentation} /> : ""}
      <Noschambres /> 

      {data.Page_Acfhome_SectionsFlex_NosServices ? <ServicesContext.Provider value={data.Page_Acfhome_SectionsFlex_NosServices}><Ourservices {...data.Page_Acfhome_SectionsFlex_NosServices} /></ServicesContext.Provider> : "" }

      <Panoramic />

      <Mediatheque />

       */}
    </Layout>
  )
}

/**
export const getServerSideProps = async () => {
  const data = await FethCmsPage('5')

  return {
    props: {
      data,
    },
  }
}
 */
