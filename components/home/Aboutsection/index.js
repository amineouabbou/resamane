import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  imgScaling,
  fadeIn,
  fadeUpOverlayBox,
  globaleasing,
} from '../../../data/useVariants'

const imgSlash = {
  initial: { width: 0 },
  animate: {
    width: ['0%', '100%', '0%'],
    right: [null, 0, 0],
    transition: {
      duration: 2,
      ease: globaleasing,
    },
  },
}

const Aboutsection = ({ title, contentColumns, intro }) => {
  return (
    <section className="intro-section">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUpOverlayBox(1, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-[32px] leading-[40px] uppercase font-bold mb-[45px] origin-center"
        >
          VOUS L’AVEZ IMAGINÉ… <br />
          NOUS L’AVONS CONSTRUIT.
        </motion.div>
      </div>

      <div className="inner relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto h-full relative">
            <motion.div
              variants={fadeUpOverlayBox(1, 0)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="overlay bg-white w-2/5 absolute bottom-0 right-0 p-[35px]"
            >
              <motion.div
                variants={fadeIn(0.8, 0.4)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                Dans une ville comme Agadir, devenue un grand pôle urbain et
                universitaire, recevant chaque année des centaines d’étudiantes
                venant des quatre coins du Royaume, notre offre est une solution
                de logement tout inclus, marquée par une expérience humaine
                éminemment enrichissante et singulière qui érige le crédo de la
                sécurité, la quiétude, le confort, la convivialité, et les
                belles valeurs du vivre ensemble et de la convivance
                harmonieuse, afin de vous aider à réussir chaque pas franchi
                durant votre parcours académique ou professionnel.
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="h-[475px] relative w-2/3 overflow-hidden">
          {/*<motion.div
            variants={imgSlash}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-lightblue/80 h-full absolute  z-[5] "
          ></motion.div>* */}
          <motion.div
            className="h-[475px]"
            variants={imgScaling}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Image
              src="/remove/intro-bg.jpg"
              layout="fill"
              alt=""
              objectFit="cover"
            />
          </motion.div>
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
          <motion.div
            variants={fadeUpOverlayBox(1, 0)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="uppercase leading-[41px] font-medium text-center"
          >
            <span className="text-[32px]">
              BIENVENUE DANS VOTRE HAVRE DE PAIX ET DE SÉRÉNITÉ !
            </span>{' '}
            <br />
            <span className="text-[41px] text-lightblue">RESIDENCES AMANE</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Aboutsection
