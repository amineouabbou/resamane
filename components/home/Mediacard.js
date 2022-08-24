import Image from 'next/image'

const Mediacard = () => {
  return (
    <div className="item px-[20px]">
      <div className="img relative  h-[650px]">
        <Image src="/remove/vue-1.jpg" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Mediacard
