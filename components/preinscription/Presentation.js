import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../data/useVariants'

const Presentation = () => {
  return (
    <section className="mb-[90px] mt-[70px]">
      <div className="md:w-[50%] mx-auto px-[15px] md:px-0">
        <div className="text-[22px] md:text-[32px] text-center md:leading-[40px] uppercase font-bold mb-[35px] origin-center">
          MON DOSSIER DE RESERVATION
          <br />
          EN 2 ETAPES
        </div>
        <div className="text-[20px] md:text-[28px] text-center md:leading-[32px] mb-[55px] text-lightblue">
          Résidences Amane vous facilite la vie,
          <br />
          et vous offre la possibilité de vous inscrire
          <br />à distance pour réserver votre logement!
        </div>
        <div className="mb-[40px]">
          <div className="item">
            <h2 className="text-[24px] md:text-[32px] font-bold leading-[37px] mb-6 text-center">
              Etape 1
            </h2>
          </div>

          <div className="item std">
            <p className="font-bold">
              1- Merci de renseigner le formulaire de pré-inscription ci-dessous
            </p>
            <p className="mb-[30px] font-bold">
              2- Pour valider cette 1 ère étape, merci d’envoyer par mail à
              info@residencesamane.ma, les documents et pièces obligatoires
              suivants :
            </p>
            <ul>
              <li>
                <a
                  className="font-semibold underline blue-color"
                  href="https://api.residencesamane.ma/wp-content/uploads/2022/08/Reglement-Interieur-2022-2023_Residences-Amane-1.pdf"
                >
                  Règlement intérieur&nbsp;
                </a>
                signé et légalisé par la résidente et par le garant ou tuteur
              </li>
              <li>
                <a
                  className="font-semibold underline blue-color"
                  href="https://api.residencesamane.ma/wp-content/uploads/2022/08/Engagement-du-garant_Residences-Amane.pdf"
                >
                  Engagement du garant&nbsp;
                </a>
                signé et légalisé par le garant muni d’un justificatif de
                revenu*
              </li>
              <li>
                <a
                  className="font-semibold underline blue-color"
                  href="https://api.residencesamane.ma/wp-content/uploads/2022/08/Fiche-medicale_Residences-Amane.pdf"
                >
                  Fiche médicale&nbsp;
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
              <li>Copie de la radio pulmonaire de la résidente</li>
              <li>Attestation de RIB de la résidente ou du garant ou tuteur</li>
            </ul>
          </div>
        </div>

        <div className="h-[1px] bg-[#ccc] my-[40px]"></div>

        <div className="">
          <div className="item">
            <h2 className="text-[24px] md:text-[32px] font-bold leading-[37px] mb-6 text-center">
              Etape 2
            </h2>
          </div>

          <div className="item std">
            <p>
              Après étude de votre dossier, nous vous répondrons par e-mail pour
              vous inviter à finaliser la démarche de réservation dans nos
              locaux.
              <br /> N&apos; oubliez pas de vous munir des originaux de tous les
              documents et pièces fournis par E-mail.
            </p>
            <p>
              Le règlement des frais d’inscription et d’hébergement se fera sur
              place en espèces, par carte bancaire ou par chèque certifié, selon
              la grille tarifaire suivante :
            </p>
            <p className="font-bold">Frais d’inscription par an</p>
            <div className="overflow-x-scroll">
              <table className="table mb-4">
                <thead className="bg-secondary text-primary">
                  <tr>
                    <th scope="col">Frais de dossier</th>
                    <th scope="col">Caution*</th>
                    <th scope="col">Assurance individuelle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>500 DH</td>
                    <td>1 mois de loyer</td>
                    <td>196dhs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-light text-[11px] leading-[13px]">
              * Le montant de la caution est remboursable conformément aux
              conditions du règlement intérieur.
            </p>

            <div className="overflow-x-scroll">
              <table className="table mb-4">
                <thead className="bg-secondary text-primary">
                  <tr>
                    <th scope="col">Studio individuel</th>
                    <th scope="col">Studio partagé</th>
                    <th scope="col">Studio PMR</th>
                    <th scope="col">Appartement double</th>
                    <th scope="col">Appartement quadruple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2585 DH **</td>
                    <td>1540 DH **</td>
                    <td>1540 DH **</td>
                    <td>2695 DH **</td>
                    <td>1595 DH **</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="font-light text-[11px] leading-[13px]">
              **Le prix indiqué par type de logement est à payer par personne.
              <br />
              Le prix du loyer est TTC, y compris TVA d’hébergement de 10%.
              <br />
              La consommation d’eau et d’électricité est incluse dans le prix du
              loyer mensuel.
              <br />
              En cas de dépassement de consommation, un supplément sera facturé
              à la résidente selon type de logement et conformément aux
              exigences du règlement intérieur.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
