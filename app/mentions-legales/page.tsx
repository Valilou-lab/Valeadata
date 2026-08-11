import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de VALEADATA SL — édition et utilisation du site Valeadata.",
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      description="Informations légales relatives à l'édition et à l'utilisation du site Valeadata."
    >
      <div className="space-y-12">
        <Section id="editeur" title="1. Éditeur du site">
          <p>
            Le présent site, accessible à l&apos;adresse{" "}
            <a
              href="https://valeadata.com"
              className="font-medium text-violet underline-offset-2 hover:underline"
            >
              valeadata.com
            </a>
            , est édité par :
          </p>
          <div className="space-y-1">
            <p className="font-semibold text-foreground">VALEADATA SL</p>
            <p>
              Société à responsabilité limitée de droit espagnol (Sociedad
              Limitada)
            </p>
          </div>
          <ul className="space-y-1">
            <li>Capital social : 24 000 €</li>
            <li>NIF : B88944939</li>
            <li>Numéro de TVA intracommunautaire : ESB88944939</li>
          </ul>
          <div className="space-y-1">
            <p className="font-semibold text-foreground">Siège social :</p>
            <p>
              Carrer Palma de Sant Just 5
              <br />
              08002 Barcelona
              <br />
              Espagne
            </p>
          </div>
          <ul className="space-y-1">
            <li>
              <span className="font-semibold text-foreground">Gérante :</span>{" "}
              Valentine Damame
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Adresse électronique :
              </span>{" "}
              <a
                href="mailto:contact@valeadata.com"
                className="font-medium text-violet underline-offset-2 hover:underline"
              >
                contact@valeadata.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-foreground">
                Site internet :
              </span>{" "}
              <a
                href="https://valeadata.com"
                className="font-medium text-violet underline-offset-2 hover:underline"
              >
                valeadata.com
              </a>
            </li>
          </ul>
          {/* Placeholder Registro Mercantil — à compléter dès communication des références */}
          <p className="rounded-xl border border-border bg-white/70 px-4 py-3 text-sm text-muted">
            Les informations définitives relatives à l&apos;inscription de
            VALEADATA SL au Registro Mercantil de Barcelona seront ajoutées dès
            leur communication.
          </p>
        </Section>

        <Section id="publication" title="2. Responsable de la publication">
          <p>La responsable de la publication du site est :</p>
          <div className="space-y-1">
            <p className="font-semibold text-foreground">Valentine Damame</p>
            <p>Gérante de VALEADATA SL</p>
            <p>
              Contact :{" "}
              <a
                href="mailto:contact@valeadata.com"
                className="font-medium text-violet underline-offset-2 hover:underline"
              >
                contact@valeadata.com
              </a>
            </p>
          </div>
        </Section>

        <Section id="activite" title="3. Activité">
          <p>
            VALEADATA SL exerce notamment des activités dans les domaines de
            l&apos;acquisition digitale, de la génération et de la qualification
            de prospects, de la data, de l&apos;automatisation, de
            l&apos;intelligence artificielle et des solutions conversationnelles.
          </p>
          <p>
            Valeadata conçoit et exploite notamment des dispositifs
            d&apos;acquisition multicanaux, des parcours de qualification et de
            validation ainsi que des solutions technologiques destinées à
            accompagner ses clients dans l&apos;acquisition et la transformation
            de prospects.
          </p>
          <p>
            Les prestations proposées peuvent varier en fonction du secteur
            d&apos;activité, du marché, des critères de qualification et des
            besoins définis avec chaque client.
          </p>
        </Section>

        <Section id="hebergement" title="4. Hébergement du site">
          <p>Le site est hébergé par :</p>
          <div className="space-y-1">
            <p className="font-semibold text-foreground">Vercel Inc.</p>
            <p>
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723
              <br />
              États-Unis
            </p>
          </div>
          <p>
            Les informations relatives au traitement des données personnelles et
            aux éventuels transferts de données liés aux prestataires techniques
            utilisés par VALEADATA SL sont précisées dans la{" "}
            <Link
              href="/politique-confidentialite"
              className="font-medium text-violet underline-offset-2 hover:underline"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
        </Section>

        <Section id="propriete-intellectuelle" title="5. Propriété intellectuelle">
          <p>
            L&apos;ensemble des éléments composant le site Valeadata, notamment
            sa structure, son identité visuelle, ses textes, graphismes, logos,
            illustrations, interfaces, éléments audiovisuels, logiciels,
            technologies et contenus, est protégé par les législations
            applicables en matière de propriété intellectuelle.
          </p>
          <p>
            Sauf indication contraire, ces éléments sont la propriété de
            VALEADATA SL ou sont utilisés avec l&apos;autorisation de leurs
            titulaires respectifs.
          </p>
          <p>
            Toute reproduction, représentation, adaptation, modification,
            distribution, extraction ou exploitation, totale ou partielle, des
            contenus du site sans autorisation préalable de VALEADATA SL est
            interdite, sauf dans les cas expressément autorisés par la
            législation applicable.
          </p>
          <p>
            Les marques, logos, noms commerciaux et autres signes distinctifs
            appartenant à des tiers et éventuellement présentés sur le site
            restent la propriété de leurs titulaires respectifs.
          </p>
        </Section>

        <Section id="informations-services" title="6. Informations et services présentés">
          <p>
            VALEADATA SL s&apos;efforce de fournir sur son site des informations
            exactes, compréhensibles et régulièrement mises à jour.
          </p>
          <p>
            Les informations présentes sur le site sont toutefois fournies à
            titre informatif et peuvent évoluer, notamment en fonction des
            marchés, des technologies, des plateformes d&apos;acquisition et des
            services proposés.
          </p>
          <p>
            Les présentations, exemples, fonctionnalités et informations
            commerciales disponibles sur le site ne constituent pas, sauf
            indication expresse, une offre contractuelle.
          </p>
          <p>
            Les caractéristiques définitives d&apos;une prestation, notamment
            les volumes, tarifs, critères de qualification, modalités de
            livraison, délais et conditions commerciales, sont celles convenues
            entre VALEADATA SL et le client dans les documents contractuels
            correspondants.
          </p>
        </Section>

        <Section id="disponibilite" title="7. Disponibilité du site">
          <p>
            VALEADATA SL met en œuvre les moyens raisonnables afin d&apos;assurer
            l&apos;accès au site et à ses fonctionnalités.
          </p>
          <p>
            L&apos;accès peut néanmoins être temporairement interrompu ou
            dégradé, notamment en raison d&apos;opérations de maintenance, de
            mises à jour, de contraintes techniques, de problèmes de réseau ou
            de circonstances indépendantes de la volonté de VALEADATA SL.
          </p>
          <p>
            VALEADATA SL ne peut garantir une disponibilité permanente et
            ininterrompue du site.
          </p>
        </Section>

        <Section
          id="assistant-ia"
          title="8. Assistant conversationnel et intelligence artificielle"
        >
          <p>
            Le site Valeadata peut mettre à disposition des visiteurs un
            assistant conversationnel utilisant des technologies
            d&apos;intelligence artificielle.
          </p>
          <p>Cet assistant peut notamment permettre de :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              obtenir des informations sur Valeadata et ses services ;
            </li>
            <li>
              identifier les solutions susceptibles de correspondre au besoin
              du visiteur ;
            </li>
            <li>
              échanger sur un projet d&apos;acquisition ou d&apos;automatisation
              ;
            </li>
            <li>qualifier une demande ;</li>
            <li>
              communiquer des coordonnées afin d&apos;être recontacté ;
            </li>
            <li>
              faciliter, lorsque cette fonctionnalité est disponible, la prise
              de rendez-vous avec l&apos;équipe Valeadata.
            </li>
          </ul>
          <p>
            Certaines réponses de l&apos;assistant peuvent être générées
            automatiquement.
          </p>
          <p>
            Malgré les mesures mises en œuvre afin d&apos;améliorer leur
            pertinence et leur exactitude, ces réponses peuvent comporter des
            erreurs, des imprécisions ou nécessiter une validation humaine.
          </p>
          <p>
            Les réponses fournies par l&apos;assistant ne constituent pas un
            engagement contractuel de VALEADATA SL.
          </p>
          <p>
            Toute information déterminante concernant notamment un tarif, un
            volume, une disponibilité, un délai, une condition contractuelle ou
            une obligation réglementaire doit être confirmée par l&apos;équipe
            Valeadata avant tout engagement.
          </p>
          <p>
            Les modalités relatives au traitement des données personnelles
            communiquées au cours d&apos;une conversation sont détaillées dans
            la{" "}
            <Link
              href="/politique-confidentialite"
              className="font-medium text-violet underline-offset-2 hover:underline"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
        </Section>

        <Section id="responsabilite" title="9. Responsabilité">
          <p>
            VALEADATA SL ne saurait être tenue responsable d&apos;une utilisation
            du site ou de ses contenus contraire à leur destination.
          </p>
          <p>
            Les performances d&apos;une campagne d&apos;acquisition dépendent de
            nombreux facteurs, notamment du marché, de l&apos;offre proposée, des
            critères de ciblage, du traitement commercial des prospects et des
            conditions définies pour la campagne.
          </p>
          <p>
            Les informations présentées sur le site ne constituent donc aucune
            garantie de résultat commercial, de chiffre d&apos;affaires, de taux
            de conversion ou de performance déterminée.
          </p>
          <p>
            Les engagements applicables à une prestation sont exclusivement ceux
            définis dans les documents contractuels conclus avec le client.
          </p>
        </Section>

        <Section id="liens-externes" title="10. Liens externes">
          <p>
            Le site peut contenir des liens vers des sites internet, plateformes
            ou services exploités par des tiers.
          </p>
          <p>
            VALEADATA SL n&apos;exerce pas de contrôle permanent sur ces services
            externes et ne saurait être tenue responsable de leur contenu, de
            leur disponibilité, de leur sécurité ou de leurs pratiques.
          </p>
          <p>
            L&apos;utilisateur est invité à consulter les conditions
            d&apos;utilisation et politiques de confidentialité applicables aux
            services concernés.
          </p>
        </Section>

        <Section id="donnees-personnelles" title="11. Protection des données personnelles">
          <p>
            VALEADATA SL peut être amenée à traiter des données personnelles
            lorsque l&apos;utilisateur :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>utilise le formulaire de contact ;</li>
            <li>échange avec l&apos;assistant conversationnel ;</li>
            <li>communique ses coordonnées ;</li>
            <li>demande à être recontacté ;</li>
            <li>
              sollicite des informations sur les services Valeadata ;
            </li>
            <li>prend rendez-vous avec l&apos;équipe Valeadata ;</li>
            <li>utilise certaines fonctionnalités du site.</li>
          </ul>
          <p>
            Les informations relatives aux finalités des traitements, à leurs
            bases juridiques, aux destinataires des données, aux durées de
            conservation ainsi qu&apos;aux droits des personnes concernées sont
            détaillées dans la{" "}
            <Link
              href="/politique-confidentialite"
              className="font-medium text-violet underline-offset-2 hover:underline"
            >
              Politique de confidentialité
            </Link>
            .
          </p>
        </Section>

        <Section id="cookies" title="12. Cookies et technologies similaires">
          <p>
            Le site peut utiliser des cookies ou technologies similaires
            nécessaires à son fonctionnement.
          </p>
          <p>
            Lorsque des technologies non strictement nécessaires sont utilisées,
            notamment à des fins de mesure d&apos;audience, d&apos;analyse ou de
            publicité, leur utilisation est soumise aux règles applicables en
            matière de consentement.
          </p>
          <p>
            L&apos;utilisateur peut obtenir davantage d&apos;informations dans
            la{" "}
            <Link
              href="/politique-cookies"
              className="font-medium text-violet underline-offset-2 hover:underline"
            >
              Politique de cookies
            </Link>
            .
          </p>
          <p>
            Lorsque le gestionnaire de consentement sera installé,
            l&apos;utilisateur devra également pouvoir modifier ou retirer ses
            choix à tout moment depuis le lien « Gérer mes cookies » présent dans
            le footer.
          </p>
        </Section>

        <Section id="droit-applicable" title="13. Droit applicable">
          <p>VALEADATA SL est une société établie en Espagne.</p>
          <p>
            Le présent site est exploité conformément aux dispositions légales
            et réglementaires applicables à VALEADATA SL, notamment en matière
            de services de la société de l&apos;information et de protection des
            données personnelles.
          </p>
          <p>
            Lorsque des dispositions impératives applicables à
            l&apos;utilisateur imposent l&apos;application de règles
            particulières, celles-ci demeurent applicables.
          </p>
          <p>
            Tout éventuel différend sera traité conformément aux règles légales
            de compétence juridictionnelle applicables.
          </p>
        </Section>

        <Section id="contact" title="14. Contact">
          <p>
            Pour toute question concernant le site, son fonctionnement ou les
            présentes mentions légales :
          </p>
          <div className="space-y-1">
            <p className="font-semibold text-foreground">VALEADATA SL</p>
            <p>
              Carrer Palma de Sant Just 5
              <br />
              08002 Barcelona
              <br />
              Espagne
            </p>
            <p>
              E-mail :{" "}
              <a
                href="mailto:contact@valeadata.com"
                className="font-medium text-violet underline-offset-2 hover:underline"
              >
                contact@valeadata.com
              </a>
            </p>
          </div>
        </Section>

        <p className="border-t border-border pt-8 text-sm text-muted">
          Dernière mise à jour : août 2026
        </p>
      </div>
    </LegalPage>
  );
}
