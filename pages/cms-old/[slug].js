import Image from 'next/image'

import Subheader from '../../components/html/Subheader'
import SEO from '../../components/SEO'
import Header from '../../components/Ui/Header'
import Layout from '../../components/Ui/Layout'
import Noschambres from '../../components/home/Noschambres'
import Footer from '../../components/Ui/Footer'

const Page = ({ slug }) => {
  return (
    <>
      <Layout>
        <SEO />
        <Header />
        <Subheader
          title="NOTRE OFFRE"
          description="Notre résidence est dotée d’installations modernes et ultra sophistiquées qui vous offre un confort absolu, une solution de logement tout inclus, abordables par-dessus tout car présentant un excellent rapport qualité prix."
        />

        <Noschambres />

        <section className="facilities-sections pt-[100px]">
          <div className="container mx-auto">
            <div className="inner py-[70px] relative pl-[40px]">
              <div className="box pb-[90px]">
                <div className="flex items-center mb-[65px] title relative">
                  <div className="icon mr-[22px]">
                    <Image
                      src="/icons/folders.svg"
                      width={51}
                      height={47}
                      alt=""
                    />
                  </div>
                  <h2 className="text-[35px] leading-[40px] font-semibold uppercase">
                    BIBLIOTHÈQUE
                  </h2>
                </div>

                <div className="flex flex-col items-end relative">
                  <div className="overlay bg-white py-[35px] px-[40px] absolute bottom-0 left-0 z-10 max-w-[350px]">
                    <p>
                      Notre résidence est située sur le Boulevard 11 Janvier,
                      près de l’École Nationale d’Architecture, la Faculté des
                      Sciences Juridiques Économiques et Sociales et en face de
                      McDonald’s Adrar. Cet emplacement lui confrère de nombreux
                      avantages, à savoir un environnement estudiantin spécial,
                      propice à la concentration sur les objectifs liés à la
                      réussite et à l’excellence, en plus d’un accès pratique et
                      rapide à la route nationale N 1.
                    </p>
                  </div>
                  <div className="w-[85%]">
                    <div className="img h-[580px] relative">
                      <Image
                        src="/remove/vue-1.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="box pb-[90px]">
                <div className="flex items-center mb-[65px] title relative">
                  <div className="icon mr-[22px]">
                    <Image src="/icons/tv.svg" width={43} height={47} alt="" />
                  </div>
                  <h2 className="text-[35px] leading-[40px] font-semibold uppercase">
                    SALLE MULTIMÉDIA
                  </h2>
                </div>

                <div className="flex flex-col items-end relative">
                  <div className="overlay bg-white py-[35px] px-[40px] absolute bottom-0 left-0 z-10 max-w-[350px]">
                    <p>
                      Une salle multimédia tout à fait à adaptée à l’ère du tout
                      numérique dans laquelle nous évoluons afin de vous
                      permettre d’être à la page des nouvelles technologies de
                      l’information et de la communication et de favoriser votre
                      réussite
                    </p>
                  </div>
                  <div className="w-[85%]">
                    <div className="img h-[580px] relative">
                      <Image
                        src="/remove/intro-bg.jpg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="box pb-[90px]">
                <div className="flex items-center mb-[65px] title relative">
                  <div className="icon mr-[22px]">
                    <Image src="/icons/restaurant.svg" width={42} height={52} />
                  </div>
                  <h2 className="text-[35px] leading-[40px] font-semibold uppercase">
                    RESTAURANT
                  </h2>
                </div>

                <div className="flex flex-col items-end relative">
                  <div className="overlay bg-white py-[35px] px-[40px] absolute bottom-0 left-0 z-10 max-w-[350px]">
                    <p>
                      Un grand restaurant de 624m² constitué de deux étages où
                      les résidentes et les externes peuvent y déguster de
                      délicieux et savoureux plats préparés par un personnel
                      hautement qualifiée. Derrière les fourneaux, une équipe
                      qui se serrent les coudes et exerçant son métier avec
                      passion et amour afin de satisfaire les bouches
                      gourmandes, il s’agit d’un staff composé d’un chef de
                      cuisine, d’un sous-chef, d’un chef de parti, d’un commis
                      et de plusieurs pâtissiers, et plongeurs qui vous
                      proposent une carte aussi riche que variés et des saveurs
                      bien de chez nous mais aussi d’ailleurs, d’Italie,
                      d’Espagne, d’Orient et d’Amérique
                    </p>
                  </div>
                  <div className="w-[85%]">
                    <div className="img h-[580px] relative">
                      <Image
                        src="/remove/360.jpg"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="flex items-center mb-[65px] title relative">
                  <a href="#" className="btn outborder ml-[35px]">
                    VOIR PLUS DE SERVICES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </Layout>
    </>
  )
}

export default Page

export const getServerSideProps = async ({ params }) => {
  console.log(params)

  return {
    props: {
      slug: params.slug,
    },
  }
}
