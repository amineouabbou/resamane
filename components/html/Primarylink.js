const Primarylink = ({ title, style }) => {
  const renderClasses = () => {
    if (style == 'outline') {
      return 'h-[46px] rounded-[27px] font-bold text-[15px] block leading-[46px] px-[30px] text-center text-white drop-shadow-[0px_13px_16px_rgba(29,100,125,0.1)] border-white border-2 bg-transparent leading-[42px] w-[180px] hover:bg-secondary hover:border-transparent'
    }

    return 'h-[46px] rounded-[27px] font-bold text-[15px] block leading-[46px] px-[30px] text-center bg-lightblue text-white drop-shadow-[0px_13px_16px_rgba(29,100,125,0.1)] w-[180px]'
  }

  return (
    <a href="#" className={renderClasses()}>
      {title}
    </a>
  )
}

export default Primarylink
