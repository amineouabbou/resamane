import { Loader } from '@googlemaps/js-api-loader'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

const Map = () => {
  const googlemap = useRef(null)

  {
    /*
    useEffect(() => {
        const myloader = new Loader({
            apiKey: '',
            version: 'weekly',
        });
        let map;
        myloader.load().then(() => {
            map = new google.maps.Map(googlemap.current, {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
            });
        });
    },[]);* */
  }

  return (
    <div className="px-[30px]">
      {/*<div className='map h-[579px]' id="google-map" ref={googlemap} />* */}
      <div className="img h-[575px] relative">
        <Image src="/remove/map.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Map
