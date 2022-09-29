import { motion } from 'framer-motion'
import Image from 'next/image'
import Cmsoverlay from '../html/Cmsoverlay'

const Card = ({ data }) => {
  return (
    <div className="item relative overflow-hidden">
      <Cmsoverlay title={data?.titre} subtitle={data?.sousTitre} />

      <motion.div
        initial={{ scale: 1.1 }}
        animate={{
          scale: 1,
          transition: { duration: 12, ease: [0, 0, 0, 0] },
        }}
        className="relative hidden md:block h-[350px] md:h-[750px] bg-no-repeat origin-center bg-cover"
      >
        <Image
          alt=""
          src={data?.photo?.sourceUrl}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </div>
  )
}

export default Card
