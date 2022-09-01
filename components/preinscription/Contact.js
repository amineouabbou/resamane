import { useEffect, useRef, useState } from 'react'
import Select from 'react-select'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp } from '../../data/useVariants'

import Inputerror from '../html/Inputerror'
import Inputlabel from '../html/Inputlabel'
import {
  radioBtns,
  countries,
  requiredMessage,
  sendMessage,
} from '../../data/services'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
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
  services: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required('Label is required'),
        value: yup.string().required('Value is required'),
      })
    )
    .test(
      'required',
      'Merci de sélectionner 3 services',
      (value) => Array.isArray(value) && value.length >= 3
    ),
})

const options = [
  { value: 'Restaurant', label: 'Restaurant' },
  { value: 'Médiathèque', label: 'Médiathèque' },
  { value: 'Bibliothèque', label: 'Bibliothèque' },
  { value: 'Piscine couverte', label: 'Piscine couverte' },
  { value: 'Salle de Fitness', label: 'Salle de Fitness' },
  { value: 'Parking privé ', label: 'Parking privé ' },
  {
    value: 'Navette transport ',
    label: 'Navette transport (De Résidences Amane à votre établissement)',
  },
  { value: 'Laverie', label: 'Laverie' },
  { value: 'Centre de beauté', label: 'Centre de beauté' },
]

const Contact = () => {
  const [mailMessage, setmailMessage] = useState('')
  const imageName = useRef()
  const inputTag = useRef()
  const {
    register,
    handleSubmit,
    control,
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

  const handleAttachementChange = (e) => {
    let inputImage = inputTag.current.files[0]
    imageName.current.innerText = inputImage.name
  }

  return (
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
                {errors.nom ? <Inputerror message={errors.nom?.message} /> : ''}
              </div>

              <div className="field mb-[35px]">
                <Inputlabel name="Prénom *" />
                <input className="input" type="text" {...register('prenom')} />
                {errors.prenom ? (
                  <Inputerror message={errors.prenom?.message} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[35px]">
                <Inputlabel name="Téléphone *" />
                <input className="input" type="text" {...register('phone')} />
                {errors.phone ? (
                  <Inputerror message={errors.phone?.message} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[35px]">
                <Inputlabel name="CIN, Carte de séjour ou Passeport" />
                <input className="input" type="text" {...register('cin')} />
                {errors.cin ? <Inputerror message={errors.cin?.message} /> : ''}
              </div>

              <div className="field mb-[35px]">
                <Inputlabel name="Adresse" />
                <input className="input" type="text" {...register('adresse')} />
                {errors.adresse ? (
                  <Inputerror message={errors.adresse?.message} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[35px]">
                <Inputlabel name="Adresse e-mail *" />
                <input className="input" type="text" {...register('email')} />
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
                <input className="input" type="text" {...register('ville')} />
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
                <input className="input" type="text" {...register('cycle')} />
                {errors.cycle ? (
                  <Inputerror message={errors.cycle?.message} />
                ) : (
                  ''
                )}
              </div>
            </div>

            <div className="field mb-[35px]">
              <Inputlabel name="Services prioritaires souhaités" />
              <Controller
                name="services"
                control={control}
                render={({ field }) => (
                  <Select
                    // defaultValue={options[0]}
                    instanceId="services"
                    {...field}
                    isClearable
                    isMulti
                    isSearchable={false}
                    options={options}
                  />
                )}
              />

              <div className="font-light text-[14px] leading-[17px] pt-[10px]">
                Merci de sélectionner 3 services prioritaires dont vous serez
                intéressée en priorité pendant votre séjour
              </div>
              {errors.services ? (
                <Inputerror message={errors.services?.message} />
              ) : (
                ''
              )}
            </div>

            <div className="field mb-[35px]">
              <Inputlabel name="Type de chambre" />
              <select className="selectinput" {...register('chambre')}>
                <option value=""></option>
                <option value="Studio individuel (1 personne)">
                  Studio individuel (1 personne)
                </option>
                <option value="Studio partagé (2 personnes)">
                  Studio partagé (2 personnes)
                </option>
                <option value="Studio PMR (1 personne)">
                  Studio PMR (1 personne)
                </option>
                <option value="Appartement double (2 personnes)">
                  Appartement double (2 personnes)
                </option>
                <option value="Appartement quadruple (4 personnes)">
                  Appartement quadruple (4 personnes)
                </option>
              </select>
              {errors.chambre ? (
                <Inputerror message={errors.chambre?.message} />
              ) : (
                ''
              )}
            </div>

            <div className="field mb-[35px] hidden">
              <Inputlabel name="Pièce jointe" />
              <div className="input-field">
                <label htmlFor="inputTag" className="input-file-label">
                  <span ref={imageName}></span>
                </label>
                <input
                  {...register('attachement')}
                  name="file-attachement"
                  ref={inputTag}
                  className="hidden"
                  type="file"
                  id="inputTag"
                  onChange={handleAttachementChange}
                />
              </div>
              {errors.attachement ? (
                <Inputerror message={errors.attachement?.message} />
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

            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-end"
            >
              <button className="btn w-[300px] lightblue" type="submit">
                Soumettre
              </button>
            </motion.div>

            {mailMessage && (
              <div className="font-bold text-center mt-[50px]">
                {mailMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
