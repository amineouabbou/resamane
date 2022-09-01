import { motion } from 'framer-motion'
import Cmsoverlay from '../html/Cmsoverlay'

const Card = ({ item }) => {
  return (
    <div className="item relative ">
      <Cmsoverlay title={item?.titre} subtitle={item?.sousTitre} />
      <motion.div
        initial={{ backgroundSize: '105% 105%' }}
        animate={{
          backgroundSize: '100% 100%',
          transition: { duration: 12, type: 'spring', stiffness: 3 },
        }}
        className="relative h-[350px] md:h-[750px] bg-no-repeat origin-center bg-cover"
        style={{
          backgroundImage: `url("https://residencesamane.ma/wp-content/themes/amane/assets/images/remove/slide-1.png")`,
        }}
      ></motion.div>
    </div>
  )
}

export default Card
