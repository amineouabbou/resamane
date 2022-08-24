import Image from 'next/image'

const Customarrows = ({ chamberSlider }) => {
  return (
    <div className="circle-arrow w-[62px] h-[62px] bg-white rounded-full absolute top-0 bottom-0 my-auto z-10 -left-[31px] p-[3px] hover:scale-110 transition-all">
      <div
        className="group flex flex-col items-center content-center h-[30px] border-b-[1px] border-b-[#1D647D]/10"
        onClick={() => chamberSlider?.current?.slickPrev()}
      >
        <div className="group-hover:scale-125 transition-all">
          <Image src="/icons/arrow-top.svg" width="13" height="7" />
        </div>
      </div>
      <div
        className="group flex flex-col items-center content-center h-[30px] border-b-[1px] border-b-[#1D647D]/10"
        onClick={() => chamberSlider?.current?.slickNext()}
      >
        <div className="group-hover:scale-125 transition-all">
          <Image
            className="rotate-180"
            src="/icons/arrow-top.svg"
            width="13"
            height="7"
          />
        </div>
      </div>
    </div>
  )
}

export default Customarrows
