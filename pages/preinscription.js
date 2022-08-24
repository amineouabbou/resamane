import { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Subheader from '../components/html/Subheader'
import SEO from '../components/SEO'
import Header from '../components/Ui/Header'
import Layout from '../components/Ui/Layout'
import Footer from '../components/Ui/Footer'
import Inputerror from '../components/html/Inputerror'
import Inputlabel from '../components/html/Inputlabel'
import {
  radioBtns,
  countries,
  requiredMessage,
  sendMessage,
} from '../data/services'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup
  .object({
    datedu: yup.string().required(requiredMessage),
    dateau: yup.string().required(requiredMessage),
    nom: yup.string().required(requiredMessage),
    prenom: yup.string().required(requiredMessage),
    phone: yup
      .string()
      .required(requiredMessage)
      .matches(phoneRegExp, 'Téléphone non valide'),
    email: yup.string().email('E-mail non valide').required(requiredMessage),
    ville: yup.string().required(requiredMessage),
    etablissement: yup.string().required(requiredMessage),
    cycle: yup.string().required(requiredMessage),
    chambre: yup.string().required(requiredMessage),
  })
  .required()

const Preinscription = () => {
  const [mailMessage, setmailMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data) => {
    const {
      data: { status, message },
    } = await sendMessage(data)

    setmailMessage(message)
  }

  return (
    <>
      <Layout>
        <SEO />
        <Header />
        <Subheader title="" subtitle="" type="full" />

        <section className="mb-[90px] mt-[70px]">
          <div className="w-[60%] mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="item">
                <h2 className="text-[32px] font-bold leading-[37px]">
                  Pré-inscription
                </h2>
              </div>

              <div className="item">
                Les Résidences Amane vous souhaite la bienvenue sur son nouveau
                site. Avec une capacité d’accueil de 880 lits répartis entre
                chambres standards, chambres pour personnes à besoins
                spécifiques et appartements. Les Résidences Amane vous offre une
                expérience de logement adaptée à vos besoins et comprenant une
                multitude de services et de commodités utiles et abordables avec
                un excellent rapport qualité/prix. Pour effectuer une demande
                d’inscription à nos résidences, nous vous invitons à renseigner
                le formulaire ci-dessous. Après avoir complété le formulaire, un
                email de confirmation vous sera envoyé.
              </div>
            </div>
          </div>
        </section>

        <section className="form">
          <div className="w-[60%] mx-auto">
            <div className="bg-[#F5FCFD] py-[35px] px-[85px]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-[#023141] text-[16px] font-bold block mb-[20px] leading-[18px]">
                  Période de séjour
                </div>
                <div className="grid grid-cols-2 gap-x-[20px]">
                  <div className="field mb-[35px]">
                    <Inputlabel name="Du *" mediumfont="true" />
                    <input
                      className="input calendar"
                      type="text"
                      placeholder="JJ/MM/AAAA"
                      {...register('datedu')}
                    />
                    {errors.datedu ? (
                      <Inputerror message={errors.datedu?.message} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="field mb-[35px]">
                    <Inputlabel name="AU *" mediumfont="true" />
                    <input
                      className="input calendar"
                      placeholder="JJ/MM/AAAA"
                      type="text"
                      {...register('dateau')}
                    />
                    {errors.dateau ? (
                      <Inputerror message={errors.dateau?.message} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="field mb-[35px]">
                    <Inputlabel name="Nom *" />
                    <input className="input" type="text" {...register('nom')} />
                    {errors.nom ? (
                      <Inputerror message={errors.nom?.message} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="field mb-[35px]">
                    <Inputlabel name="Prénom *" />
                    <input
                      className="input"
                      type="text"
                      {...register('prenom')}
                    />
                    {errors.prenom ? (
                      <Inputerror message={errors.prenom?.message} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="field mb-[35px]">
                    <Inputlabel name="Téléphone *" />
                    <input
                      className="input"
                      type="text"
                      {...register('phone')}
                    />
                    {errors.phone ? (
                      <Inputerror message={errors.phone?.message} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="field mb-[35px]">
                    <Inputlabel name="CIN, Carte de séjour ou Passeport" />
                    <input className="input" type="text" {...register('cin')} />
                    {errors.cin ? (
                      <Inputerror message={errors.cin?.message} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="field mb-[35px]">
                    <Inputlabel name="Adresse" />
                    <input
                      className="input"
                      type="text"
                      {...register('adresse')}
                    />
                    {errors.adresse ? (
                      <Inputerror message={errors.adresse?.message} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="field mb-[35px]">
                    <Inputlabel name="Adresse e-mail *" />
                    <input
                      className="input"
                      type="text"
                      {...register('email')}
                    />
                    {errors.email ? (
                      <Inputerror message={errors.email?.message} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="field mb-[35px]">
                    <Inputlabel name="Pays *" />
                    <select
                      className="selectinput"
                      {...register('pays')}
                      defaultValue="Maroc"
                    >
                      {countries.map((item) => (
                        <option value={item.name} {...item} key={item.code}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {errors.pays ? (
                      <Inputerror message={errors.pays?.message} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="field mb-[35px]">
                    <Inputlabel name="Ville *" />
                    <input
                      className="input"
                      type="text"
                      {...register('ville')}
                    />
                    {errors.ville ? (
                      <Inputerror message={errors.ville?.message} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="field mb-[35px]">
                    <Inputlabel name="Etablissement *" />
                    <input
                      className="input"
                      type="text"
                      {...register('etablissement')}
                    />
                    {errors.etablissement ? (
                      <Inputerror message={errors.etablissement?.message} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className="field mb-[35px]">
                    <Inputlabel name="Cycle d’étude *" />
                    <input
                      className="input"
                      type="text"
                      {...register('cycle')}
                    />
                    {errors.cycle ? (
                      <Inputerror message={errors.cycle?.message} />
                    ) : (
                      ''
                    )}
                  </div>
                </div>

                <div className="field mb-[35px]">
                  <Inputlabel name="Type de chambre" />
                  <select className="selectinput" {...register('chambre')}>
                    <option value=""></option>
                    <option value="Chambre PMR">Chambre PMR</option>
                    <option value="Chambre single">Chambre single</option>
                    <option value="Chambre double">Chambre double</option>
                    <option value="Appartement 3 personnes">
                      Appartement 3 personnes
                    </option>
                    <option value="Appartement 4 personnes">
                      Appartement 4 personnes
                    </option>
                  </select>
                  {errors.chambre ? (
                    <Inputerror message={errors.chambre?.message} />
                  ) : (
                    ''
                  )}
                </div>

                <div className="field mb-[35px]">
                  <Inputlabel name="Comment avez-vous connu Résidences Amane?" />
                  <div className="grid grid-rows-3 grid-flow-col gap-y-4">
                    {radioBtns.map((item) => {
                      return (
                        <div key={item.id} className="choice">
                          <input
                            className="hidden"
                            {...register('channels')}
                            type="radio"
                            value={item.name}
                            id={item.id}
                          />
                          <label
                            className="group hover:bg-lightblue hover:text-white transition-all"
                            htmlFor={item.id}
                          >
                            <span className="flex items-center">
                              <i className="mr-[10px] hidden">
                                <Image
                                  alt=""
                                  width={14}
                                  height={10}
                                  src="/icons/check.svg"
                                />
                              </i>
                              <span>{item.name}</span>
                            </span>
                          </label>
                        </div>
                      )
                    })}
                  </div>
                  {errors.channels ? (
                    <Inputerror message={errors.channels?.message} />
                  ) : (
                    ''
                  )}
                </div>

                <div className="devidor h-[1px] bg-[#09556F]/20 my-[40px]"></div>

                <div className="flex flex-col items-end">
                  <button className="btn w-[300px] lightblue" type="submit">
                    Soumettre
                  </button>
                </div>

                {mailMessage && (
                  <div className="font-bold text-center mt-[50px]">
                    {mailMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </Layout>
    </>
  )
}

export default Preinscription
