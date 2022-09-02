import { motion } from 'framer-motion'
import Image from 'next/image'
import Cmsoverlay from '../html/Cmsoverlay'

const Card = ({ item }) => {
  return (
    <div className="item relative overflow-hidden">
      <Cmsoverlay title={item?.titre} subtitle={item?.sousTitre} />
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{
          scale: 1,
          transition: { duration: 12, ease: [0, 0, 0, 0] },
        }}
        className="relative h-[350px] md:h-[750px] bg-no-repeat origin-center bg-cover"
      >
        <Image
          alt=""
          src="/remove/slide-1.png"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </div>
  )
}

export default Card
