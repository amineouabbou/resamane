import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa'
import { GET_FOOTER_MENUS } from '../../../api/Queries'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const Footer = () => {
  const router = useRouter()
  const { locale } = router
  const current_lang = locale.toUpperCase()

  const { loading, data } = useQuery(GET_FOOTER_MENUS, {
    variables: { lang: current_lang },
  })
  console.log('Data', data)

  const { t } = useTranslation('common')

  const d = new Date()
  let year = d.getFullYear()

  if (data) {
    const filtred = data.menuItems.nodes.filter((item) => {
      return item.childItems.nodes.length > 0
    })
    return (
      <div className="footer bg-white">
        <div className="container mx-auto">
          <div className="logo-box flex flex-col items-center py-[20px] md:pb-[42px] border-b-[1px] border-b-[#09556F/10]">
            <div className="img h-[149px] w-[70px] md:w-[111px] md:h-[209px] relative">
              <Image src="/logo-big.svg" alt="" layout="fill" />
            </div>
          </div>

          <div className="footer-links py-[30px] md:pt-[65px] md:px-[30px]">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
              {filtred.map((item, index) => (
                <div key={index} className="item">
                  <div
                    className="font-semibold text-[#1D647D] md:text-[17px] leading-[20px] mb-[10px] md:mb-[20px] uppercase"
                    dangerouslySetInnerHTML={{ __html: item.label }}
                  />
                  <ul className="font-light leading-[#30] md:text-[16px]">
                    {item.childItems.nodes.map((item, index) => (
                      <li key={index}>
                        <Link href={item.url} className="cursor-pointer">
                          <a
                            className="text-[#023141] hover:text-lightblue"
                            dangerouslySetInnerHTML={{ __html: item.label }}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bottom-footer md:mt-[60px] text-[#09556F] relative">
          <div className="overlay hidden md:block absolute w-1/2 h-full bg-secondary top-0 right-0"></div>
          <div className="container mx-auto">
            <div className="inner bg-secondary p-8 md:pt-[45px] md:px-[45px] md:pb-[65px]">
              <div className="grid md:grid-cols-2 gap-8 md:gap-4">
                <div className="column">
                  <div className="bloc">
                    <div className="font-semibold text-[17px] leading-[20px] mb-[18px]">
                      {t('Contactez-nous')}
                    </div>
                    <div className="texte text-[15px] md:text-[16px] mb-[8px] font-light">
                      Boulevard du 11 Janvier, Quartier Dakhla, Bloc D1, Agadir.
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center text-[16px] font-light">
                      <div>+212 05 26 044 040</div>
                      <div className="md:ml-[20px]">
                        <a
                          className="font-medium underline"
                          href="mailto:info@residencesamane.ma"
                        >
                          info@residencesamane.ma
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="column relative">
                  <div className="bloc">
                    <div className="font-semibold text-[17px] leading-[20px] mb-[30px]">
                      {t('Suivez-nous sur')}
                    </div>
                    <ul className="flex items-center text-white">
                      <li className="mr-[20px] md:mr-[40px]">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.facebook.com/profile.php?id=100082696087998&sk=about"
                          className="hover:text-[#09556F]"
                        >
                          <FaFacebookF className="text-[24px] md:text-[30px]" />
                        </a>
                      </li>
                      <li className="mr-[20px] md:mr-[40px]">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href=" https://www.instagram.com/residencesamane/"
                          className="hover:text-[#09556F]"
                        >
                          <FaInstagram className="text-[24px] md:text-[30px]" />
                        </a>
                      </li>
                      <li className="mr-[20px] md:mr-[40px]">
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.linkedin.com/company/86589782/"
                          className="hover:text-[#09556F]"
                        >
                          <FaLinkedin className="text-[24px] md:text-[30px]" />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.youtube.com/channel/UCFqC-3lkLukwbTjmGcsHJLg"
                          className="hover:text-[#09556F]"
                        >
                          <FaYoutube className="text-[24px] md:text-[30px]" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto my-[20px] md:my-[30px]">
          <div className="copyrights flex flex-col items-center">
            <div className="text-[13px] font-light text-[#023141]">
              © {year} {t('Résidences Amane. Tous droits réservés')}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
