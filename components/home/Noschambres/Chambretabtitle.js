const Chambretabtitle = ({ title, number, handlePopupClick }) => {
  return (
    <>
      <span className="block py-[40px] px-[65px] cursor-pointer text-[35px] leading-[40px] ">
        <span className="font-bold">{number} </span>
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
        <div
          onClick={() => handlePopupClick(number)}
          className="read-more text-lightblue text-[16px] font-normal hidden cursor-pointer"
        >
          Voir plus
        </div>
      </span>
    </>
  )
}

export default Chambretabtitle
