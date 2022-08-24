import Image from 'next/image'
import Link from 'next/link'

const Sidenav = () => {
  return (
    <div className="side-nav w-[90px] bg-white absolute top-0 left-0 h-full z-20 pt-[25px] pb-[10px] hidden md:flex md:flex-col">
      <div className="logo-box flex flex-col justify-center items-center mb-[25px]">
        <Link href="/">
          <a>
            <Image src="/logo.svg" width={51} height={72} />
          </a>
        </Link>
      </div>

      <div className="tall-bar grow flex flex-col justify-center items-center relative">
        <div className="line bg-[#1D647D1F] w-[1px] absolute top-0 bottom-0 mx-auto"></div>
        <div className="slogan text-primary text-[11px] font-bold bg-white px-[22px]">
          RÉSIDENCE UNIVERSITAIRE POUR ÉTUDIANTES
        </div>
      </div>

      <div className="toggle-menu"></div>
    </div>
  )
}

export default Sidenav
