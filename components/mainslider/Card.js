import { motion } from 'framer-motion'
import Image from 'next/image'
import Cmsoverlay from '../html/Cmsoverlay'

const Card = ({ item, photo, photomobile, showread }) => {
  const classes = ''
  return (
    <div className="item relative overflow-hidden">
      <Cmsoverlay
        showread={showread}
        title={item?.titre}
        subtitle={item?.sousTitre}
      />

      <motion.div
        initial={{ scale: 1.1 }}
        animate={{
          scale: 1,
          transition: { duration: 12, ease: [0, 0, 0, 0] },
        }}
        className="relative hidden md:block h-[350px] md:h-[750px] bg-no-repeat origin-center bg-cover"
      >
        <Image alt="" src={photo} layout="fill" objectFit="cover" />
      </motion.div>

      {photomobile && (
        <div className="relative h-[450px] md:hidden bg-no-repeat origin-center bg-cover">
          <Image alt="" src={photomobile} layout="fill" objectFit="cover" />
        </div>
      )}
    </div>
  )
}

export default Card
