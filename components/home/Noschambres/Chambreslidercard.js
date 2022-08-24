import Image from 'next/image'

const Chambreslidercard = ({ item }) => {
  return (
    <div className="item relative z-10">
      <div className="overlay absolute w-full h-full top-0 left-0 z-10 flex flex-col justify-center items-center hidden">
        <div className="bloc w-96 text-white  text-center">
          <div className="font-medium md:leading-[35px] md:text-[30px] mb-[40px]">
            3 chambres de 18m² pour les personnes à besoin spécifiques
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="btn w-border w-[217px]">
              Plus de détails / {item}
            </a>
          </div>
        </div>
      </div>
      <div className="img relative h-[870px]">
        <Image src="/remove/chambre-1.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Chambreslidercard
