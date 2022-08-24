import Image from 'next/image'

const Pagincard = ({ id, active, handleClick, paginationGroup }) => {
  //console.log("Pagincard rendered")
  return (
    <div
      data-index={id}
      className={`item flex flex-col items-center pt-[35px] relative ${
        active == id ? 'active' : ''
      }`}
      onClick={handleClick}
    >
      {paginationGroup?.icone?.sourceUrl ? (
        <div className={`${active != id ? 'opacity-30' : 'null'}`}>
          <Image
            src={paginationGroup.icone.sourceUrl}
            width={paginationGroup.icone.mediaDetails.width}
            height={paginationGroup.icone.mediaDetails.height}
          />
        </div>
      ) : (
        ''
      )}
      <div
        className={`text-[17px] pt-[20px] ${active != id ? 'opacity-30' : ''}`}
      >
        {paginationGroup.titreTab}
      </div>
    </div>
  )
}

export default Pagincard
