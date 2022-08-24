import Image from 'next/image'
import Cmsoverlay from '../html/Cmsoverlay'

const Card = ({ item }) => {
  return (
    <div className="item relative">
      <Cmsoverlay title={item.titre} subtitle={item.sousTitre} />
      <div className="relative h-[350px] md:h-[750px]">
        <Image
          alt=""
          src="/remove/slide-1.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Card
