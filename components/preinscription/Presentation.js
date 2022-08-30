import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../data/useVariants'

const Presentation = () => {
  return (
    <section className="mb-[90px] mt-[70px]">
      <div className="w-[60%] mx-auto">
        <div className="text-[32px] text-center leading-[40px] uppercase font-bold mb-[35px] origin-center">
          MON DOSSIER DE RESERVATION
          <br />
          EN 2 ETAPES
        </div>
        <div className="text-[28px] text-center leading-[32px] mb-[55px]">
          Résidences Amane vous facilite la vie,
          <br />
          et vous offre la possibilité de vous inscrire
          <br />à distance pour réserver votre logement!
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-[40px]">
          <div className="item">
            <h2 className="text-[32px] font-bold leading-[37px]">Etape 1</h2>
          </div>

          <div className="item std">
            <p>
              1- Merci de renseigner le formulaire de pré-inscription ci-dessous
            </p>
            <p className="mb-[30px]">
              2- Pour valider cette 1 ère étape, merci d’envoyer par mail à
              info@residencesamane.ma, les documents et pièces obligatoires
              suivants :
            </p>
            <ul>
              <li>
                <a className="font-semibold underline blue-color" href="#">
                  Règlement intérieur
                </a>
                signé et légalisé par la résidente et par le garant ou tuteur
              </li>
              <li>
                <a className="font-semibold underline blue-color" href="#">
                  Engagement du garant
                </a>
                signé et légalisé par le garant muni d’un justificatif de
                revenu*
              </li>
              <li>
                <a className="font-semibold underline blue-color" href="#">
                  Fiche médicale
                </a>
                signée attestant que la résidente est exempte de toute maladie
                contagieuse
              </li>
              <li>
                Attestation d’invalidité pour les personnes à mobilité réduite
              </li>
              <li>
                Attestation d’inscription ou de scolarité dans un établissement
                d’études supérieures, ou attestation de dépôt de dossier
                d’inscription ou carte d’étudiant pour l’année universitaire en
                cours
              </li>
              <li>
                Copie de la convention de stage signée par l’école et
                l’établissement d’accueil pour la résidente stagiaire
              </li>
              <li>2 Photos d’identités de la résidente</li>
              <li>Photocopie de la CIN pour la résidente marocaine</li>
              <li>
                Copie des 3 premières pages du passeport et une copie de la
                carte de séjour valide durant la période d’hébergement pour la
                résidente de nationalité étrangère
              </li>
              <li>
                Pass vaccinal sanitaire contre la COVID-19 de la résidente
              </li>
              <li>Copie de la radio pulmonaire de la résidente</li>
              <li>Attestation de RIB de la résidente ou du garant ou tuteur</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="item">
            <h2 className="text-[32px] font-bold leading-[37px]">Etape 2</h2>
          </div>

          <div className="item std">
            <p>
              Après étude de votre dossier, nous vous répondrons par e-mail pour
              vous inviter à finaliser la démarche de réservation dans nos
              locaux.
            </p>
            <p>
              Le règlement des frais d’inscription et d’hébergement se fera sur
              place en espèces ou par chèque bancaire certifié, selon la grille
              tarifaire suivante :
            </p>
            <p className="font-bold">Frais d’inscription par an</p>
            <table className="table mb-4">
              <thead className="bg-secondary text-primary">
                <tr>
                  <th scope="col">Frais de dossier</th>
                  <th scope="col">Caution**</th>
                  <th scope="col">Assurance individuelle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>500 DH</td>
                  <td>2 mois de loyer</td>
                  <td>190 DH</td>
                </tr>
              </tbody>
            </table>
            <p className="font-light text-[11px] leading-[13px]">
              ** Le montant de la caution est remboursable conformément aux
              conditions du règlement intérieur.
            </p>

            <table className="table mb-4">
              <thead className="bg-secondary text-primary">
                <tr>
                  <th scope="col">Studio individuel</th>
                  <th scope="col">Studio partagé</th>
                  <th scope="col">Studio PMR</th>
                  <th scope="col">Appartement quadruple</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3 000 DH</td>
                  <td>1 500 DH /pers.</td>
                  <td>1 500 DH</td>
                  <td>6 000 DH</td>
                </tr>
              </tbody>
            </table>
            <p className="font-light text-[11px] leading-[13px]">
              Le prix du loyer est Hors Taxe d’hébergement de 10%
              <br />
              La consommation d’eau, d’électricité sont inclus dans le prix du
              loyer mensuel, 3m³pour l’eau et 30Kwh pour l’électricité
              <br />
              Au-delà de 3m³ d’eau et 30Kwh d’électricité, un supplément sera
              facturé à la résidente de 20 DH/m³ et 2 DH/Kwh.
              <br />
              Les frais d’hébergements couvrant la durée de séjour sont payables
              par tranche, au début de chaque trimestre.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
