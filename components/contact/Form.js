import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { motion } from 'framer-motion'
import { fadeUp } from '../../data/useVariants'

import Inputerror from '../html/Inputerror'
import Inputlabel from '../html/Inputlabel'
import { requiredMessage, sendMessage } from '../../data/services'
import { useTranslation } from 'next-i18next'

const schema = yup.object().shape({
  nom: yup.string().required(requiredMessage),
  prenom: yup.string().required(requiredMessage),
  message: yup.string().required(requiredMessage),
  email: yup.string().email('E-mail non valide').required(requiredMessage),
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
  const { t } = useTranslation('common')
  const [mailMessage, setmailMessage] = useState('')
  const imageName = useRef()
  const inputTag = useRef()
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (formData) => {
    const {
      data: { status, message },
    } = await sendMessage('205', formData)

    if (status === 'mail_sent')
      reset({
        adresse: '',
        email: '',
        message: '',
        nom: '',
        prenom: '',
        subject: '',
      })

    setmailMessage(message)
  }

  const handleAttachementChange = (e) => {
    let inputImage = inputTag.current.files[0]
    imageName.current.innerText = inputImage.name
  }

  return (
    <section className="form">
      <div className="md:w-[60%] mx-auto">
        <h2 className="font-bold  text-[30px] text-center md:text-inherit md:text-[40px] mb-[40px] md:mb-[50px]">
          {t('CONTACTEZ-NOUS')}
        </h2>
        <div className="bg-[#F5FCFD] py-[35px] px-[25px] md:px-[85px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field mb-[25px] md:mb-[35px]">
              <Inputlabel name={t("Qu'aimeriez-vous partager avec nous ?")} />
              <input className="input" type="text" {...register('subject')} />
              {errors.subject ? (
                <Inputerror message={t(errors.subject?.message)} />
              ) : (
                ''
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-x-[20px]">
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
            </div>

            <div className="field mb-[25px] md:mb-[35px]">
              <Inputlabel name={`${t('Message')} *`} />
              <textarea className="input" {...register('message')} />
              {errors.message ? (
                <Inputerror message={t(errors.message?.message)} />
              ) : (
                ''
              )}
            </div>

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

            {mailMessage && (
              <div className="font-bold text-center mt-[50px]">
                {mailMessage}
              </div>
            )}

            <div className="devidor h-[1px] bg-[#09556F]/10 my-[40px]"></div>

            <div className="box-infos md:px-[10px] text-[15px] md:text-[16px] md:mb-[30px]">
              <div className="grid md:grid-cols-2 gap-y-5 md:gap-y-0 gap-x-[10px]">
                <div className="bloc flex flex-col items-center">
                  <div>
                    {t(
                      'Boulevard du 11 Janvier, Quartier Dakhla, Bloc D1, Agadir.'
                    )}
                  </div>
                </div>

                <div className="bloc flex flex-col items-center">
                  <div className="in">
                    <div>
                      <span className="font-bold">{t('Tél')}:</span> +212 526
                      044 040
                    </div>
                    <div>
                      <span className="font-bold">Email:</span>{' '}
                      info@residencesamane.ma
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
