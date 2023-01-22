import Image from 'next/image'
import Imgwrap from '../html/Imgwrap'

const Map = ({ imgUrl }) => {
  return (
    <div className="md:px-[30px]">
      <div className="img h-[315px] md:h-[575px] relative">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/Les+r%C3%A9sidences+Amane/@30.4066565,-9.5568408,14z/data=!4m9!1m2!2m1!1sr%C3%A9sidences+amane+agadir!3m5!1s0xdb3c98349108833:0xa17fe71ca9cbef6e!8m2!3d30.4121987!4d-9.5447961!15sChhyw6lzaWRlbmNlcyBhbWFuZSBhZ2FkaXKSARFzdHVkZW50X2Rvcm1pdG9yeQ?hl=fr"
        >
          <Imgwrap duration="2">
            <Image alt="" src={imgUrl} layout="fill" objectFit="cover" />
          </Imgwrap>
        </a>
      </div>
    </div>
  )
}

export default Map
