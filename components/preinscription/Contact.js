import { useEffect, useRef, useState } from 'react'
import Select from 'react-select'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
import { useTranslation } from 'next-i18next'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  datedu: yup.string().required(requiredMessage),
  dateau: yup.string().required(requiredMessage),
  nom: yup.string().required(requiredMessage),
  prenom: yup.string().required(requiredMessage),
  cin: yup.string().required(requiredMessage),
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

const getOptions = (t) => {
  return [
    { value: 'Restaurant', label: t('Restaurant') },
    { value: 'Médiathèque', label: t('Médiathèque') },
    { value: 'Bibliothèque', label: t('Bibliothèque') },
    { value: 'Piscine couverte', label: t('Piscine couverte') },
    { value: 'Salle de Fitness', label: t('Salle de Fitness') },
    { value: 'Parking privé ', label: t('Parking privé') },
    {
      value: 'Navette transport ',
      label: t('Navette transport (De Résidences Amane à votre établissement)'),
    },
    { value: 'Laverie', label: t('Laverie') },
    { value: 'Centre de beauté', label: t('Centre de beauté') },
  ]
}

const Contact = () => {
  const { t } = useTranslation()
  const imageName = useRef()
  const inputTag = useRef()
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data) => {
    const {
      data: { status, message },
    } = await sendMessage('10', data)

    if (status === 'mail_sent')
      reset({
        datedu: '',
        dateau: '',
        nom: '',
        prenom: '',
        cin: '',
        phone: '',
        email: '',
        ville: '',
        etablissement: '',
        cycle: '',
        chambre: '',
      })

    toast.info(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    })
  }

  const handleAttachementChange = (e) => {
    let inputImage = inputTag.current.files[0]
    imageName.current.innerText = inputImage.name
  }

  return (
    <section className="form">
      <div className="md:w-[60%] mx-auto">
        <div className="bg-[#F5FCFD] py-[35px] px-[25px] md:px-[85px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-[#023141] md:text-[16px] font-bold block mb-[20px] leading-[18px]">
              {t('Période de séjour')}
            </div>
            <div className="grid md:grid-cols-2 gap-x-[20px]">
              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel name={`${t('Du')} *`} mediumfont="true" />
                <input
                  className="input calendar"
                  type="text"
                  placeholder="JJ/MM/AAAA"
                  {...register('datedu')}
                />
                {errors.datedu ? (
                  <Inputerror message={t(errors.datedu?.message)} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel name={`${t('Au')} *`} mediumfont="true" />
                <input
                  className="input calendar"
                  placeholder="JJ/MM/AAAA"
                  type="text"
                  {...register('dateau')}
                />
                {errors.dateau ? (
                  <Inputerror message={t(errors.dateau?.message)} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel name={`${t('Nom')} *`} />
                <input className="input" type="text" {...register('nom')} />
                {errors.nom ? (
                  <Inputerror message={t(errors.nom?.message)} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel name={`${t('Prénom')} *`} />
                <input className="input" type="text" {...register('prenom')} />
                {errors.prenom ? (
                  <Inputerror message={t(errors.prenom?.message)} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel name={`${t('Téléphone')} *`} />
                <input className="input" type="text" {...register('phone')} />
                {errors.phone ? (
                  <Inputerror message={t(errors.phone?.message)} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel
                  name={`${t('CIN, Carte de séjour ou Passeport')} *`}
                />
                <input className="input" type="text" {...register('cin')} />
                {errors.cin ? (
                  <Inputerror message={t(errors.cin?.message)} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel name={t('Adresse')} />
                <input className="input" type="text" {...register('adresse')} />
                {errors.adresse ? (
                  <Inputerror message={t(errors.adresse?.message)} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel name={`${t('Adresse e-mail')} *`} />
                <input className="input" type="text" {...register('email')} />
                {errors.email ? (
                  <Inputerror message={t(errors.email?.message)} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel name={`${t('Pays')} *`} />
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
                  <Inputerror message={t(errors.pays?.message)} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel name={`${t('Ville')} *`} />
                <input className="input" type="text" {...register('ville')} />
                {errors.ville ? (
                  <Inputerror message={t(errors.ville?.message)} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel name={`${t('Etablissement')} *`} />
                <input
                  className="input"
                  type="text"
                  {...register('etablissement')}
                />
                {errors.etablissement ? (
                  <Inputerror message={t(errors.etablissement?.message)} />
                ) : (
                  ''
                )}
              </div>

              <div className="field mb-[25px] md:mb-[35px]">
                <Inputlabel name={`${t('Cycle d’étude')} *`} />
                <input className="input" type="text" {...register('cycle')} />
                {errors.cycle ? (
                  <Inputerror message={t(errors.cycle?.message)} />
                ) : (
                  ''
                )}
              </div>
            </div>

            <div className="field mb-[25px] md:mb-[35px]">
              <Inputlabel name={t('Services prioritaires souhaités')} />
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
                    options={getOptions(t)}
                  />
                )}
              />

              <div className="font-light text-[14px] leading-[17px] pt-[10px]">
                {t(
                  'Merci de sélectionner 3 services prioritaires dont vous serez intéressée en priorité pendant votre séjour'
                )}
              </div>
              {errors.services ? (
                <Inputerror message={t(errors.services?.message)} />
              ) : (
                ''
              )}
            </div>

            <div className="field mb-[25px] md:mb-[35px]">
              <Inputlabel name={`${t('Type de logement')} *`} />
              <select className="selectinput" {...register('chambre')}>
                <option value=""></option>
                <option value="Studio individuel (1 personne)">
                  {t('Studio individuel (1 personne)')}
                </option>
                <option value="Studio partagé (2 personnes)">
                  {t('Studio partagé (2 personnes)')}
                </option>
                <option value="Studio PMR (1 personne)">
                  {t('Studio PMR (1 personne)')}
                </option>
                <option value="Appartement double (2 personnes)">
                  {t('Appartement double (2 personnes)')}
                </option>
                <option value="Appartement quadruple (4 personnes)">
                  {t('Appartement quadruple (4 personnes)')}
                </option>
              </select>
              {errors.chambre ? (
                <Inputerror message={t(errors.chambre?.message)} />
              ) : (
                ''
              )}
            </div>

            <div className="field mb-[25px] md:mb-[35px] hidden">
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
                <Inputerror message={t(errors.attachement?.message)} />
              ) : (
                ''
              )}
            </div>

            <div className="field mb-[25px] md:mb-[35px]">
              <Inputlabel
                name={t('Comment avez-vous connu Résidences Amane?')}
              />
              <div className="grid md:grid-rows-3 md:grid-flow-col gap-y-4">
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
                          <span>{t(item.name)}</span>
                        </span>
                      </label>
                    </div>
                  )
                })}
              </div>
              {errors.channels ? (
                <Inputerror message={t(errors.channels?.message)} />
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
                {t('Soumettre')}
              </button>
            </motion.div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact
