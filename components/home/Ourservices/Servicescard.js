import Image from 'next/image'

const Servicescard = ({ texteGroup }) => {
  return (
    <div className="item flex justify-end relative">
      <div className="overlay bg-[#F5FCFD] p-[25px] absolute bottom-0 left-0 z-10 max-w-[555px]">
        <div className="text-[55px] font-medium mb-[15px] leading-[65px]">
          {texteGroup?.titre}
        </div>
        <p className="leading-[23px] text-[#084C64]">{texteGroup?.texte}</p>
      </div>
      <div className="inner w-[90%]">
        <div className="img h-[570px] relative">
          {texteGroup?.photo?.sourceUrl ? (
            <Image
              alt=""
              src={texteGroup.photo.sourceUrl}
              layout="fill"
              objectFit="cover"
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Servicescard
