import Image from 'next/image'

import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Header from '../components/Ui/Header'
import Layout from '../components/Ui/Layout'
import Footer from '../components/Ui/Footer'
import Cardmap from '../components/about/Cardmap'
import Link from 'next/link'

const About = ({ slug }) => {
  return (
    <>
      <Layout>
        <SEO />
        <Header />
        <Subheader title="QUI SOMMES-NOUS ?" />

        <section className="about">
          <div className="relative pl-[60px]">
            <div className="img h-[640px] xl:[clip-path:polygon(3%_0,_100%_0,_100%_100%,_0_100%)]">
              <Image
                src="/remove/slide-1.png"
                layout="fill"
                alt=""
                objectFit="cover"
              />
            </div>
          </div>

          <div className="bg-[#013C50] pt-[80px] pb-[120px] relative">
            <Link href="/preinscription">
              <div className="reserver absolute -top-[85px] left-0 drop-shadow-[0_13px_16px_rgba(0,0,0,0.15)]">
                <div className="inner group w-[180px] h-[120px] bg-white flex flex-col items-center justify-center transition-all hover:bg-lightblue border-[#084C6419] border-[1px] [clip-path:polygon(0_0,_89%_0,_100%_100%,_0%_100%)]">
                  <div className="icon mb-[3px] group-hover:brightness-0 group-hover:invert  transition-all">
                    <Image
                      alt=""
                      width={25}
                      height={25}
                      src="/icons/calendar.svg"
                    />
                  </div>
                  <div className="text-[16px] leading-[21px] font-semibold text-center group-hover:text-white transition-all">
                    RESERVER <br />
                    MAINTENANT
                  </div>
                </div>
              </div>
            </Link>
            <div className="container mx-auto relative">
              <div className="absolute -top-[240px] right-10 z-10">
                <Image
                  src="/icons/shape.svg"
                  alt="shape"
                  width={110}
                  height={451}
                />
              </div>
              <div className="w-8/12	mx-auto">
                <div className="grid grid-cols-2 gap-x-[65px] text-white">
                  <div>
                    <p>
                      Dans une ville comme Agadir, devenue un grand pôle urbain
                      et universitaire, recevant chaque année des centaines
                      d’étudiantes venant des quatre coins du Royaume, notre
                      résidence vient vous offrir une magique solution de
                      logement tout inclus et avec cela une expérience humaine
                      éminemment enrichissante et absolument singulière qui
                      érige le crédo de la sécurité, la quiétude, le confort, la
                      convivialité, et les belles valeurs du vivre ensemble et
                      de la convivance harmonieuse et joyeuse afin de vous aider
                      à atteindre la réussite dans chaque pas franchi durant
                      votre parcours académique. En effet, notre résidence a été
                      conçue en ayant anticipé tous vos besoins sans rien
                      laisser au hasard afin de favoriser le confort, la
                      satisfaction, l’épanouissement personnel, et la grande
                      réussite du parcours de nos locataires.
                    </p>
                  </div>

                  <div>
                    <p>
                      Nos locaux se distinguent avec brio grâce à l’espace
                      spacieux de leurs chambres et appartements. Notre
                      résidence s’étale sur une superficie globale de 10800
                      mètres carré et met à votre disposition un total de 425
                      chambres et 880 lits. Notre résidence propose des espaces
                      de vie où le confort est le maître mot, un lifestyle
                      empreint de convivialité promettant une belle expérience
                      humaine et immersive à sa communauté féminine. Une
                      communauté rassemblée chez nous car nous partageons un
                      objectif commun et une motivation collective : Réussir,
                      exceller et briller de mille feux.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-[110px] pb-[185px]">
          <div className="container mx-auto">
            <h2 className="font-bold uppercase text-[37px] text-center mb-[85px]">
              NOS VALEURS
            </h2>

            <div className="w-[75%]	mx-auto">
              <div className="grid grid-cols-3 gap-x-[60px]">
                <div className="mt-[80px]">
                  <div className="bloc flex flex-col justify-center items-center py-[50px]">
                    <div className="icone mb-[35px]">
                      <Image
                        src="/icons/vitalite.svg"
                        alt="Securité"
                        width={91}
                        height={123}
                      />
                    </div>
                    <div className="font-semibold uppercase text-[28px]">
                      VITALITÉ
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bloc flex flex-col justify-center items-center py-[50px] active bg-[#F5FCFD]">
                    <div className="icone mb-[35px]">
                      <Image
                        src="/icons/security.svg"
                        alt="Securité"
                        width={97}
                        height={108}
                      />
                    </div>
                    <div className="font-semibold uppercase text-[28px]">
                      SÉCURITÉ
                    </div>
                  </div>
                </div>

                <div className="mt-[80px]">
                  <div className="bloc flex flex-col justify-center items-center py-[50px]">
                    <div className="icone mb-[35px]">
                      <Image
                        src="/icons/hand-shake.svg"
                        alt="Securité"
                        width={180}
                        height={115}
                      />
                    </div>
                    <div className="font-semibold uppercase text-[28px]">
                      INTÉGRITÉ
                    </div>
                  </div>
                </div>

                <div className="mt-[40px]">
                  <div className="bloc flex flex-col justify-center items-center py-[50px] active bg-[#F5FCFD]">
                    <div className="icone mb-[35px]">
                      <Image
                        src="/icons/quality.svg"
                        alt="Securité"
                        width={91}
                        height={123}
                      />
                    </div>
                    <div className="font-semibold uppercase text-[28px]">
                      QUALITÉ
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bloc flex flex-col justify-center items-center py-[50px] active">
                    <div className="icone mb-[35px]">
                      <Image
                        src="/icons/diversite.svg"
                        alt="Securité"
                        width={116}
                        height={117}
                      />
                    </div>
                    <div className="font-semibold uppercase text-[28px]">
                      DIVERSITÉ
                    </div>
                  </div>
                </div>

                <div className="mt-[40px]">
                  <div className="bloc flex flex-col justify-center items-center py-[50px] bg-[#F5FCFD]">
                    <div className="icone mb-[35px]">
                      <Image
                        src="/icons/durabilite.svg"
                        alt="Securité"
                        width={116}
                        height={116}
                      />
                    </div>
                    <div className="font-semibold uppercase text-[28px]">
                      DURABILITÉ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-[125px] relative">
          <div className="absolute bg-[#F5FCFD] top-0 h-full left-0 w-[88%] xl:[clip-path:polygon(0_0,_100%_0%,_96%_100%,_0%_100%)]"></div>
          <div className="absolute h-[130px] bg-white w-full bottom-0"></div>
          <div className="container mx-auto relative">
            <div className="absolute -top-[280px] left-60 z-10">
              <Image
                src="/icons/shape.svg"
                alt="shape"
                width={110}
                height={451}
              />
            </div>
            <div className="w-2/5 mx-auto mb-[65px]">
              <h2 className="font-bold uppercase text-[37px] text-center mb-[40px]">
                NOTRE EMPLACEMENT
              </h2>
              <div className="px-[20px]">
                <p className="text-center">
                  Notre résidence est située sur le Boulevard 11 Janvier, près
                  de l’École Nationale d’Architecture, la Faculté des Sciences
                  Juridiques Économiques et Sociales et en face de McDonald’s
                  Adrar. Cet emplacement lui confrère de nombreux avantages, à
                  savoir un environnement estudiantin spécial, propice à la
                  concentration sur les objectifs liés à la réussite et à
                  l’excellence, en plus d’un accès pratique et rapide à la route
                  nationale N 1.
                </p>
              </div>
            </div>

            <Cardmap />
          </div>
        </section>

        <Footer />
      </Layout>
    </>
  )
}

export default About
