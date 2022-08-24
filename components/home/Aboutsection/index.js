import Link from 'next/link'

const Aboutsection = ({ title, contentColumns, intro }) => {
  return (
    <section className="mb-[90px]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="item">
            <h2 className="text-[32px] font-bold leading-[37px]">{title}</h2>
          </div>

          <div className="item">
            <div className="font-medium text-[26px] leading-[37px] mb-[50px]">
              {intro}
            </div>
            <div className="grid md:grid-cols-2 gap-14">
              {contentColumns.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.content}</p>
                  <div className="mt-[35px]">
                    <Link href="/page/about">
                      <a className="btn w-[180px]">Lire plus</a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutsection
