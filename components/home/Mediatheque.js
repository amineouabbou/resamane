import Slider from 'react-slick'
import Mediacard from './Mediacard'

const Mediatheque = () => {
  const settings = {
    className: 'mediatheque-slide',
    centerMode: true,
    infinite: true,
    centerPadding: '300px',
    slidesToShow: 1,
    speed: 500,
  }

  return (
    <section className="mediatheque py-[85px] bg-[#F5FCFD] overflow-hidden hidden md:block">
      <div className="container mx-auto">
        <h2 className="text-[32px] font-bold leading-[37px]">Méditathèque</h2>
      </div>

      <div className="slides mt-[85px]">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((item) => {
            return <Mediacard key={item} />
          })}
        </Slider>
      </div>

      <div className="pagination h-[5px] flex justify-center mt-[90px] border-t-[1px] border-t-primary/20">
        <div className="item w-[220px] h-[4px] bg-transparent relative"></div>
        <div className="item w-[220px] h-[4px] bg-primary relative -top-[2px]"></div>
        <div className="item w-[220px] h-[4px] bg-transparent"></div>
      </div>
    </section>
  )
}

export default Mediatheque
