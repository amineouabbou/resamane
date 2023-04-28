import { useTranslation } from 'react-i18next'

const Chambretabtitle = ({ title, number, handlePopupClick }) => {
  const { t } = useTranslation()

  return (
    <>
      <span className="block py-[20px] px-[20px] md:py-[40px] md:px-[65px] cursor-pointer text-[25px] leading-[30px] md:text-[35px] md:leading-[40px] ">
        <span className="font-bold">{number} </span>
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
        <div
          onClick={() => handlePopupClick(number)}
          className="read-more text-lightblue text-[16px] font-normal hidden cursor-pointer"
        >
          {t('Voir plus')}
        </div>
      </span>
    </>
  )
}

export default Chambretabtitle
