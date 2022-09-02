import Image from 'next/image'
import Link from 'next/link'

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer bg-white">
      <div className="container mx-auto">
        <div className="logo-box flex flex-col items-center pt-[30px] pb-[42px] border-b-[1px] border-b-[#09556F/10]">
          <div className="img">
            <Image src="/logo-big.svg" alt="" width={111} height={209} />
          </div>
        </div>

        <div className="footer-links pt-[65px] md:px-[30px]">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4">
            <div className="item">
              <div className="font-semibold text-[#1D647D] text-[17px] leading-[20px] mb-[20px] uppercase">
                QUI SOMMES-NOUS
              </div>
              <ul className="font-light leading-[#30] text-[16px]">
                <li>
                  <Link href="/about">
                    <a className="text-[#023141] hover:text-lightblue">
                      Présentation
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-[#023141] hover:text-lightblue">
                      Nos valeurs
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-[#023141] hover:text-lightblue">
                      Notre emplacement
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="item">
              <div className="font-semibold text-[#1D647D] text-[17px] leading-[20px] mb-[20px] uppercase">
                NOTRE OFFRE
              </div>
              <ul className="text-[#023141] font-light leading-[#30] text-[16px]">
                <li>
                  <Link href="/offre">
                    <a className="text-[#023141] hover:text-lightblue">
                      Chambres et appartements
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/offre">
                    <a className="text-[#023141] hover:text-lightblue">
                      Bibliothèque
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/offre">
                    <a className="text-[#023141] hover:text-lightblue">
                      Salle multimédia
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="item">
              <div className="font-semibold text-[#1D647D] text-[17px] leading-[20px] mb-[20px] uppercase">
                Mon dossier
              </div>
              <ul className="text-[#023141] font-light leading-[#30] text-[16px]">
                <li>
                  <Link href="/mondossier">
                    <a className="text-[#023141] hover:text-lightblue">
                      Pré-inscription
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="item">
              <div className="font-semibold text-[#1D647D] text-[17px] leading-[20px] mb-[20px] uppercase">
                Ville d’Agadir
              </div>
              <ul className="text-[#023141] font-light leading-[#30] text-[16px]">
                <li>
                  <a href="#" className="text-[#023141] hover:text-lightblue">
                    Étudier à Agadir
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#023141] hover:text-lightblue">
                    Vivre à Agadir
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#023141] hover:text-lightblue">
                    Plan de la ville
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer mt-[60px] text-[#09556F] relative">
        <div className="overlay hidden md:block absolute w-1/2 h-full bg-secondary top-0 right-0"></div>
        <div className="container mx-auto">
          <div className="inner bg-secondary pt-[45px] px-[45px] pb-[65px]">
            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="column">
                <div className="bloc">
                  <div className="font-semibold text-[17px] leading-[20px] mb-[18px]">
                    Contactez-nous
                  </div>
                  <div className="texte text-[16px] mb-[8px] font-light">
                    Boulevard du 11 Janvier, Quartier Dakhla, Bloc D1, Agadir.
                  </div>
                  <div className="flex items-center text-[16px] font-light">
                    <div>+212 661 892 951</div>
                    <div className="ml-[20px]">
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
                    Suivez-nous sur
                  </div>
                  <ul className="flex items-center text-white">
                    <li className="mr-[40px]">
                      <a href="#" className="hover:text-[#09556F]">
                        <FaFacebookF className="text-[30px]" />
                      </a>
                    </li>
                    <li className="mr-[40px]">
                      <a href="#" className="hover:text-[#09556F]">
                        <FaInstagram className="text-[30px]" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-[#09556F]">
                        <FaYoutube className="text-[30px]" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-[30px]">
        <div className="copyrights flex flex-col items-center">
          <div className="text-[13px] font-light text-[#023141]">
            © 2022 Résidences Amane. Tous droits réservés
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
