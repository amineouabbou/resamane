import Pagincard from './Pagincard'
import { ServicesContext } from '../../../pages'
import { useContext } from 'react'

const Servicespagination = ({
  servicesSlider,
  Slidestate: { active, setActive },
  tabs,
}) => {
  const handleClick = (event) => {
    const el = event.currentTarget.dataset.index
    servicesSlider.current.slickGoTo(el)
    setActive(el)
  }

  return (
    <div className="slide-pagination border-t-[#09556F/5] border-t-[1px] mt-[58px]">
      <div className="container mx-auto flex flex-row justify-around">
        {tabs.map((item, index) => (
          <Pagincard
            id={index}
            key={index}
            active={active}
            handleClick={handleClick}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Servicespagination
