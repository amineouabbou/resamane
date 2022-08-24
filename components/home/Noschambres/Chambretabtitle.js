const Chambretabtitle = ({ title, number }) => {
  return (
    <>
      <span className="block py-[40px] px-[65px] cursor-pointer text-[35px] leading-[40px] ">
        <span className="font-bold">{number} </span>
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
        <a href="#" className="text-lightblue text-[16px] font-normal hidden">
          Voir plus
        </a>
      </span>
    </>
  )
}

export default Chambretabtitle
