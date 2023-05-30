import { motion } from 'framer-motion'
import Image from 'next/image'
import Cmsoverlay from '../html/Cmsoverlay'

const Card = ({ data }) => {
  return (
    <div className="item relative overflow-hidden">
      <Cmsoverlay
        title={data?.titre}
        subtitle={data?.sousTitre}
        cta={data?.bouttonGroup}
      />

      <motion.div
        initial={{ scale: 1.03 }}
        animate={{
          scale: 1,
          transition: { duration: 2, ease: [0, 0, 0, 0] },
        }}
        className="relative h-[250px] md:h-[750px] bg-no-repeat origin-center bg-cover"
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
