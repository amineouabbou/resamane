import Image from 'next/image'

const Chambreslidercard = ({ item }) => {
  return (
    <div className="item relative z-10">
      <div className="img relative h-[320px] md:h-[870px]">
        <Image alt="" src={item.mediaItemUrl} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Chambreslidercard
