import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de VALEADATA SL — site corporate, formulaires, assistant Leo, consentement et prospection.",
};

const accentLink =
  "font-medium text-violet underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/40 rounded-sm";

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

function SubSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="pt-2">
      <h3 className="text-base font-bold tracking-tight text-foreground sm:text-lg">
        {title}
      </h3>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}

function Highlight({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-violet/20 bg-violet-light/60 px-4 py-3 text-sm font-semibold text-foreground sm:text-[15px]">
      {children}
    </p>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-border bg-white/80 px-4 py-3 text-sm text-muted">
      {children}
    </p>
  );
}

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      description="Cette politique concerne le site corporate valeadata.com, les formulaires de contact, l'assistant conversationnel IA Leo, les demandes de rendez-vous, les relations commerciales initiées depuis le site, ainsi que les principes appliqués par VALEADATA SL dans ses activités de collecte et de génération de leads."
    >
      <div className="space-y-12">
        <p className="text-sm text-muted">Dernière mise à jour : août 2026</p>

        <Section id="responsable" title="1. Responsable du traitement">
          <p>Le responsable du traitement est :</p>
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
              <span className="font-semibold text-foreground">E-mail :</span>{" "}
              <a href="mailto:contact@valeadata.com" className={accentLink}>
                contact@valeadata.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-foreground">Site :</span>{" "}
              <a href="https://valeadata.com" className={accentLink}>
                valeadata.com
              </a>
            </li>
          </ul>
        </Section>

        <Section id="engagement" title="2. Notre engagement">
          <p>
            VALEADATA SL accorde une importance particulière à la protection des
            données personnelles, au consentement et à la traçabilité des
            opérations réalisées dans le cadre de ses activités.
          </p>
          <p>
            Les traitements de données personnelles sont réalisés conformément
            aux règles applicables, notamment :
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              au Règlement (UE) 2016/679 du Parlement européen et du Conseil du
              27 avril 2016 relatif à la protection des personnes physiques à
              l&apos;égard du traitement des données à caractère personnel et à
              la libre circulation de ces données (RGPD) ;
            </li>
            <li>
              à la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de
              Datos Personales y garantía de los derechos digitales (LOPDGDD) ;
            </li>
            <li>
              ainsi qu&apos;aux autres dispositions applicables aux traitements
              et opérations de prospection concernés.
            </li>
          </ul>
          <p>
            La présente politique explique quelles données peuvent être
            collectées, pour quelles finalités elles sont utilisées, pendant
            combien de temps elles peuvent être conservées, à qui elles peuvent
            être communiquées et quels sont les droits des personnes concernées.
          </p>
        </Section>

        <Section id="donnees-collectees" title="3. Données susceptibles d'être collectées">
          <p>
            Selon la nature de votre interaction avec Valeadata, nous pouvons
            traiter les catégories de données suivantes.
          </p>

          <SubSection title="3.1 Données d'identification et de contact">
            <p>Notamment :</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>prénom ;</li>
              <li>nom ;</li>
              <li>adresse e-mail ;</li>
              <li>numéro de téléphone ;</li>
              <li>société ;</li>
              <li>fonction ;</li>
              <li>
                informations professionnelles communiquées volontairement.
              </li>
            </ul>
          </SubSection>

          <SubSection title="3.2 Informations relatives à votre projet">
            <p>
              Lorsque vous contactez Valeadata, vous pouvez notamment nous
              communiquer :
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>votre secteur d&apos;activité ;</li>
              <li>vos besoins en acquisition ;</li>
              <li>les volumes envisagés ;</li>
              <li>les zones géographiques recherchées ;</li>
              <li>les critères de qualification souhaités ;</li>
              <li>vos besoins techniques ;</li>
              <li>
                vos besoins en matière d&apos;API, CRM, automatisation ou
                chatbot ;
              </li>
              <li>
                toute autre information nécessaire à l&apos;étude de votre
                demande.
              </li>
            </ul>
          </SubSection>

          <SubSection title="3.3 Données issues de l'assistant conversationnel">
            <p>
              Lorsque vous utilisez l&apos;assistant conversationnel Valeadata,
              nous pouvons traiter :
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>le contenu de vos messages ;</li>
              <li>les réponses fournies ;</li>
              <li>les informations commerciales que vous communiquez ;</li>
              <li>
                les coordonnées que vous choisissez de transmettre ;
              </li>
              <li>
                les informations nécessaires au maintien du contexte de la
                conversation.
              </li>
            </ul>
            <p>
              Nous vous recommandons de ne communiquer aucune donnée sensible ou
              information qui ne serait pas nécessaire à votre demande.
            </p>
          </SubSection>

          <SubSection title="3.4 Données techniques et de navigation">
            <p>
              Selon les outils effectivement activés sur le site, certaines
              données techniques peuvent être traitées, notamment :
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>adresse IP ;</li>
              <li>type de navigateur ;</li>
              <li>système d&apos;exploitation ;</li>
              <li>date et heure de connexion ;</li>
              <li>pages consultées ;</li>
              <li>source de trafic ;</li>
              <li>
                informations relatives au fonctionnement et à la sécurité du
                site ;
              </li>
              <li>données issues de cookies ou technologies similaires.</li>
            </ul>
            <p>
              Les traceurs non strictement nécessaires sont utilisés uniquement
              dans les conditions prévues par la réglementation applicable.
            </p>
            <p>
              Pour plus d&apos;informations, consulter notre{" "}
              <Link href="/politique-cookies" className={accentLink}>
                Politique de cookies
              </Link>
              .
            </p>
          </SubSection>
        </Section>

        <Section id="finalites" title="4. Finalités des traitements">
          <p>
            VALEADATA SL peut utiliser les données personnelles notamment afin
            de :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>répondre à une demande de contact ;</li>
            <li>présenter les services Valeadata ;</li>
            <li>comprendre et qualifier un projet ;</li>
            <li>préparer une proposition commerciale ;</li>
            <li>organiser un rendez-vous ;</li>
            <li>assurer le suivi d&apos;une relation précontractuelle ;</li>
            <li>assurer la gestion d&apos;une relation commerciale ;</li>
            <li>
              permettre le fonctionnement de l&apos;assistant conversationnel ;
            </li>
            <li>qualifier une demande via l&apos;assistant ;</li>
            <li>
              assurer le fonctionnement et la sécurité du site ;
            </li>
            <li>prévenir les abus et incidents techniques ;</li>
            <li>améliorer les parcours et services Valeadata ;</li>
            <li>
              gérer les consentements lorsque ceux-ci sont nécessaires ;
            </li>
            <li>
              assurer la traçabilité et la preuve des consentements ;
            </li>
            <li>
              respecter les obligations légales et réglementaires applicables.
            </li>
          </ul>
        </Section>

        <Section id="bases-juridiques" title="5. Bases juridiques">
          <p>
            Selon le traitement concerné, VALEADATA SL peut s&apos;appuyer
            notamment sur :
          </p>

          <SubSection title="Mesures précontractuelles">
            <p>
              Lorsque vous contactez Valeadata afin d&apos;obtenir des
              informations, demander une proposition ou envisager une
              collaboration.
            </p>
          </SubSection>

          <SubSection title="Exécution d'un contrat">
            <p>
              Lorsque le traitement est nécessaire à la fourniture d&apos;une
              prestation convenue avec un client.
            </p>
          </SubSection>

          <SubSection title="Consentement">
            <p>
              Lorsque la réglementation impose l&apos;obtention préalable du
              consentement, notamment pour certains traitements de prospection
              ou certains traceurs.
            </p>
          </SubSection>

          <SubSection title="Intérêt légitime">
            <p>
              Lorsque Valeadata poursuit un intérêt légitime, notamment pour
              assurer la sécurité de ses services, répondre à certaines
              sollicitations professionnelles ou améliorer son fonctionnement,
              sous réserve des droits et libertés des personnes concernées.
            </p>
          </SubSection>

          <SubSection title="Obligation légale">
            <p>
              Lorsque la conservation ou le traitement de certaines informations
              est imposé par une obligation légale ou réglementaire.
            </p>
          </SubSection>
        </Section>

        <Section id="formulaire-contact" title="6. Formulaire de contact">
          <p>
            Lorsque vous utilisez le formulaire de contact disponible sur
            valeadata.com, les informations communiquées sont utilisées afin de
            :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>comprendre votre demande ;</li>
            <li>vous répondre ;</li>
            <li>étudier votre projet ;</li>
            <li>vous recontacter lorsque cela est nécessaire.</li>
          </ul>
          <p>
            Les champs obligatoires sont identifiés dans le formulaire.
          </p>
          <p>
            Valeadata applique un principe de minimisation et s&apos;efforce de
            ne demander que les informations nécessaires au traitement de votre
            demande.
          </p>
        </Section>

        <Section id="assistant-conversationnel" title="7. Assistant conversationnel IA">
          <p>
            Valeadata peut mettre à disposition un assistant conversationnel
            utilisant des technologies d&apos;intelligence artificielle.
          </p>
          <p>Cet assistant peut notamment permettre de :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>répondre aux questions concernant Valeadata ;</li>
            <li>présenter les services disponibles ;</li>
            <li>comprendre les besoins d&apos;un visiteur ;</li>
            <li>qualifier un projet ;</li>
            <li>
              recueillir progressivement les informations nécessaires à une
              prise de contact ;
            </li>
            <li>
              faciliter la mise en relation avec Valeadata ;
            </li>
            <li>
              organiser une prise de rendez-vous lorsque cette fonctionnalité
              est disponible.
            </li>
          </ul>
          <p>
            Certaines réponses sont susceptibles d&apos;être générées
            automatiquement.
          </p>
          <p>
            Malgré les mesures prises pour améliorer leur pertinence, elles
            peuvent comporter des erreurs ou des imprécisions.
          </p>
          <p>
            Les réponses générées par l&apos;assistant ne constituent pas un
            engagement contractuel de VALEADATA SL.
          </p>
          <p>
            Toute information déterminante concernant notamment un prix, un
            volume, un délai, une disponibilité, une condition contractuelle ou
            une obligation réglementaire doit être confirmée par l&apos;équipe
            Valeadata.
          </p>
        </Section>

        <Section id="prestataire-ia" title="8. Prestataire d'intelligence artificielle">
          <p>
            Pour permettre le fonctionnement de l&apos;assistant conversationnel,
            le contenu des échanges peut être transmis au prestataire
            technologique utilisé pour générer les réponses.
          </p>
          <p>
            VALEADATA SL veille à sélectionner et configurer ses prestataires en
            tenant compte des exigences applicables en matière de protection des
            données.
          </p>
          {/*
            FUTURE UPDATE — fournisseur IA Leo
            Quand le fournisseur sera connecté, renseigner ici :
            identité, rôle, conditions de traitement, localisation,
            garanties de transfert, conservation des conversations,
            utilisation éventuelle pour amélioration / entraînement.
            Ne jamais affirmer qu'une donnée n'est pas utilisée pour
            l'entraînement tant que la configuration réelle n'est pas vérifiée.
          */}
          <Note>
            Les informations relatives au prestataire technologique d&apos;IA
            seront précisées dans cette section dès que le fournisseur
            définitif sera effectivement connecté.
          </Note>
        </Section>

        <Section id="generation-leads" title="9. Activité de génération de leads">
          <p>
            VALEADATA SL exerce notamment une activité d&apos;acquisition
            digitale, de génération et de qualification de prospects.
          </p>
          <p>
            Dans ce cadre, des données peuvent être collectées au moyen de
            dispositifs d&apos;acquisition dédiés.
          </p>
          <p>
            Selon les campagnes, ces dispositifs peuvent notamment intégrer :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>formulaires ;</li>
            <li>landing pages ;</li>
            <li>parcours conversationnels ;</li>
            <li>validation SMS ;</li>
            <li>Double Opt-In ;</li>
            <li>contrôles de qualité ;</li>
            <li>mécanismes de traçabilité ;</li>
            <li>interfaces API ;</li>
            <li>outils de qualification.</li>
          </ul>
          <p>
            Les informations présentées au moment de chaque collecte précisent
            les conditions applicables au traitement concerné.
          </p>
          <p>
            Selon le dispositif, VALEADATA SL peut agir en qualité de
            responsable du traitement, de responsable conjoint ou de prestataire
            intervenant pour le compte d&apos;un client.
          </p>
          <p>
            La qualification juridique applicable dépend du dispositif et des
            rôles effectivement exercés par les différentes parties.
          </p>
        </Section>

        <Section id="consentement-campagnes" title="10. Consentement dans le cadre des campagnes">
          <p>
            Lorsque le traitement d&apos;un prospect repose sur son
            consentement, celui-ci doit être :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>libre ;</li>
            <li>spécifique ;</li>
            <li>éclairé ;</li>
            <li>univoque ;</li>
            <li>traçable.</li>
          </ul>
          <p>
            La personne doit recevoir, au moment de la collecte, les
            informations nécessaires concernant l&apos;utilisation prévue de ses
            données.
          </p>
          <p>
            Lorsque cela est applicable, Valeadata met également en œuvre des
            mécanismes supplémentaires de validation, notamment par SMS / Double
            Opt-In.
          </p>
        </Section>

        <Section
          id="duree-utilisation-consentement"
          title="11. Durée maximale d'utilisation du consentement"
        >
          <p>
            Dans le cadre des campagnes concernées, lorsque la prospection repose
            sur le consentement de la personne, VALEADATA SL applique une durée
            maximale d&apos;utilisation du consentement de :
          </p>
          <Highlight>
            12 mois à compter de son obtention
          </Highlight>
          <p>
            Au-delà de cette période, le consentement initial n&apos;est plus
            utilisé pour poursuivre les opérations de prospection concernées sur
            ce fondement, sauf lorsqu&apos;un nouveau consentement valable a été
            recueilli.
          </p>
          <p>
            La personne peut retirer son consentement à tout moment avant
            l&apos;expiration de cette période.
          </p>
          <p>
            Le retrait du consentement met fin aux utilisations futures reposant
            sur ce consentement, sans remettre en cause la licéité des
            traitements effectués avant son retrait.
          </p>
        </Section>

        <Section id="retrait-consentement" title="12. Retrait du consentement">
          <p>
            Lorsqu&apos;un traitement repose sur le consentement, celui-ci peut
            être retiré à tout moment.
          </p>
          <p>
            La personne concernée peut notamment exercer sa demande auprès de
            VALEADATA SL à l&apos;adresse :{" "}
            <a href="mailto:contact@valeadata.com" className={accentLink}>
              contact@valeadata.com
            </a>
          </p>
          <p>
            Afin de permettre à Valeadata d&apos;identifier précisément le
            consentement concerné, il peut être nécessaire de communiquer
            certaines informations permettant de retrouver la demande initiale.
          </p>
          <p>Valeadata peut notamment demander :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>nom ;</li>
            <li>prénom ;</li>
            <li>adresse e-mail utilisée lors de la demande ;</li>
            <li>numéro de téléphone utilisé lors de la demande.</li>
          </ul>
          <p>
            Les informations communiquées doivent permettre d&apos;identifier de
            manière suffisamment fiable la collecte concernée.
          </p>
          <p>
            VALEADATA SL peut demander des informations complémentaires lorsque
            cela est nécessaire pour éviter de modifier ou supprimer les données
            d&apos;une autre personne.
          </p>
          <p>
            Une pièce d&apos;identité ne doit pas être demandée
            systématiquement lorsqu&apos;un moyen moins intrusif permet
            raisonnablement de vérifier l&apos;identité.
          </p>
        </Section>

        <Section
          id="preuve-consentement"
          title="13. Conservation de la preuve du consentement"
        >
          <p>
            VALEADATA SL conserve les éléments permettant d&apos;établir la
            preuve du consentement pendant une durée de :
          </p>
          <Highlight>3 ans</Highlight>
          <p>
            Cette conservation a notamment pour objectif de permettre à
            Valeadata de démontrer les conditions dans lesquelles le
            consentement a été recueilli.
          </p>
          <p>
            Selon le dispositif utilisé, la preuve peut notamment comprendre :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>date et heure de la collecte ;</li>
            <li>
              date et heure de la validation complémentaire lorsqu&apos;elle
              existe ;
            </li>
            <li>source ou parcours de collecte ;</li>
            <li>formulaire utilisé ;</li>
            <li>version du texte d&apos;information présenté ;</li>
            <li>formulation du consentement ;</li>
            <li>choix exprimé par la personne ;</li>
            <li>informations relatives au Double Opt-In ;</li>
            <li>preuve de validation SMS lorsqu&apos;elle existe ;</li>
            <li>éléments techniques de traçabilité ;</li>
            <li>
              partenaires concernés par le consentement lorsque cela est
              applicable ;
            </li>
            <li>
              toute information nécessaire à la démonstration du consentement.
            </li>
          </ul>
          <Note>
            <span className="font-semibold text-foreground">
              Distinction importante :
            </span>{" "}
            la conservation de la preuve pendant 3 ans ne signifie pas que les
            données peuvent continuer à être utilisées à des fins de prospection
            pendant 3 ans. Utilisation du consentement : maximum 12 mois.
            Conservation de la preuve : 3 ans.
          </Note>
        </Section>

        <Section id="acces-preuve" title="14. Accès à la preuve du consentement">
          <p>
            Lorsque cela est nécessaire dans le cadre d&apos;une relation avec
            un client ou pour répondre à une demande légitime, VALEADATA SL doit
            être en mesure de retrouver les éléments permettant de justifier le
            consentement recueilli.
          </p>
          <p>
            Ces informations doivent être conservées dans un format permettant
            une restitution intelligible de la preuve.
          </p>
          <p>
            L&apos;accès aux preuves de consentement est limité aux personnes et
            prestataires habilités.
          </p>
        </Section>

        <Section
          id="partenaires-consentement"
          title="15. Partenaires concernés par le consentement"
        >
          <p>
            Lorsque les données d&apos;un prospect sont destinées à être
            transmises à un ou plusieurs partenaires à des fins de prospection,
            les informations présentées au moment de la collecte doivent
            permettre à la personne de comprendre qui est susceptible de la
            contacter, conformément aux exigences applicables au dispositif.
          </p>
          <p>
            Lorsque l&apos;identité ou la liste des partenaires est requise,
            elle doit être rendue accessible à la personne dans les conditions
            prévues par le parcours de collecte.
          </p>
          <p>
            VALEADATA SL conserve les informations nécessaires permettant de
            déterminer les partenaires concernés par un consentement donné.
          </p>
        </Section>

        <Section id="destinataires" title="16. Destinataires des données">
          <p>
            Selon le traitement concerné, les données peuvent être accessibles :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>aux personnes habilitées au sein de VALEADATA SL ;</li>
            <li>
              aux prestataires techniques nécessaires au fonctionnement du site
              ;
            </li>
            <li>aux prestataires d&apos;hébergement ;</li>
            {/* FUTURE UPDATE — CRM / automatisation / messagerie / calendrier / analytics */}
            <li>aux outils de CRM ;</li>
            <li>aux prestataires d&apos;automatisation ;</li>
            <li>aux prestataires de messagerie ;</li>
            <li>
              au fournisseur technologique de l&apos;assistant conversationnel ;
            </li>
            <li>
              au prestataire de calendrier lorsqu&apos;un rendez-vous est
              demandé ;
            </li>
            <li>
              aux clients ou partenaires concernés par une collecte de prospect,
              lorsque la personne en a été informée et lorsque les conditions
              nécessaires sont réunies ;
            </li>
            <li>
              aux autorités compétentes lorsque la loi l&apos;exige.
            </li>
          </ul>
          <p>
            L&apos;accès aux données doit être limité à ce qui est nécessaire à
            la finalité concernée.
          </p>
          <Note>
            La liste détaillée des sous-traitants effectivement utilisés
            (CRM, prise de rendez-vous, analytics, pixels, gestionnaire de
            cookies, etc.) sera mise à jour dans cette section au fur et à
            mesure de leur déploiement.
          </Note>
        </Section>

        <Section
          id="distinction-visiteurs-leads"
          title="17. Distinction entre visiteurs Valeadata et leads de campagnes"
        >
          <Note>
            Une personne qui contacte VALEADATA SL directement via valeadata.com
            afin de demander des informations sur les services Valeadata
            n&apos;est pas, du seul fait de cette prise de contact, transformée
            en lead destiné aux clients ou partenaires de Valeadata.
          </Note>
          <p>
            Les coordonnées communiquées sur le site corporate sont utilisées
            pour gérer la relation entre le visiteur et Valeadata.
          </p>
          <p>
            Les campagnes d&apos;acquisition destinées aux clients de Valeadata
            disposent de leurs propres parcours de collecte, informations et
            mécanismes de consentement.
          </p>
        </Section>

        <Section
          id="autres-durees"
          title="18. Durées de conservation des autres données"
        >
          <p>
            Les durées de 12 mois et de 3 ans définies précédemment concernent
            respectivement :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              l&apos;utilisation du consentement pour les opérations de
              prospection concernées ;
            </li>
            <li>la conservation de sa preuve.</li>
          </ul>
          <p>
            Elles ne constituent pas une durée universelle applicable à toutes
            les données traitées par VALEADATA SL.
          </p>
          <p>
            D&apos;autres informations peuvent être conservées pendant des
            durées différentes lorsque cela est nécessaire ou imposé par la
            réglementation, notamment :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>données contractuelles ;</li>
            <li>factures ;</li>
            <li>données comptables ;</li>
            <li>données fiscales ;</li>
            <li>preuves de paiement ;</li>
            <li>
              documents nécessaires à la défense des droits de Valeadata ;
            </li>
            <li>données relatives aux obligations légales ;</li>
            <li>données de sécurité.</li>
          </ul>
          <p>
            Ces informations sont conservées pendant les durées nécessaires à
            leur finalité et conformément aux obligations légales applicables.
          </p>
          <Note>
            Les obligations comptables, contractuelles, fiscales, contentieuses
            ou autres peuvent imposer des durées différentes. Les données
            personnelles de Valeadata ne sont pas toutes automatiquement
            supprimées après 3 ans.
          </Note>
        </Section>

        <Section id="transferts" title="19. Transferts internationaux">
          <p>
            Certains prestataires techniques peuvent être établis ou traiter
            certaines données en dehors de l&apos;Espace économique européen.
          </p>
          <p>
            Lorsque de tels transferts ont lieu, VALEADATA SL veille à ce
            qu&apos;ils soient réalisés conformément aux mécanismes prévus par
            la réglementation applicable.
          </p>
          <p>
            Selon la situation, ces mécanismes peuvent notamment reposer sur :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>une décision d&apos;adéquation ;</li>
            <li>des clauses contractuelles types ;</li>
            <li>
              ou toute autre garantie appropriée prévue par la réglementation.
            </li>
          </ul>
          {/* FUTURE UPDATE — détail des transferts selon prestataires réels */}
          <Note>
            Cette section sera mise à jour en fonction des prestataires
            réellement utilisés.
          </Note>
        </Section>

        <Section id="cookies" title="20. Cookies et technologies similaires">
          <p>
            Le site peut utiliser des cookies et technologies similaires.
          </p>
          <p>
            Les cookies strictement nécessaires au fonctionnement du site
            peuvent être utilisés sans consentement lorsque la réglementation le
            permet.
          </p>
          <p>
            Les technologies non nécessaires, notamment celles utilisées à des
            fins de :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>mesure d&apos;audience ;</li>
            <li>analyse ;</li>
            <li>personnalisation ;</li>
            <li>publicité ;</li>
            <li>suivi marketing ;</li>
          </ul>
          <p>
            ne doivent être activées qu&apos;après obtention du consentement
            lorsque celui-ci est requis.
          </p>
          <p>L&apos;utilisateur doit pouvoir :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>accepter ;</li>
            <li>refuser ;</li>
            <li>paramétrer ses choix ;</li>
            <li>retirer son consentement ultérieurement.</li>
          </ul>
          <p>
            Consulter la{" "}
            <Link href="/politique-cookies" className={accentLink}>
              Politique de cookies
            </Link>
            . Le footer du site permet également d&apos;accéder à « Gérer mes
            cookies ».
          </p>
        </Section>

        <Section id="droits" title="21. Vos droits">
          <p>
            Selon la réglementation applicable et la nature du traitement, vous
            pouvez notamment disposer des droits suivants :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>droit d&apos;accès ;</li>
            <li>droit de rectification ;</li>
            <li>droit à l&apos;effacement ;</li>
            <li>droit à la limitation du traitement ;</li>
            <li>droit d&apos;opposition ;</li>
            <li>
              droit à la portabilité lorsque celui-ci est applicable ;
            </li>
            <li>
              droit de retirer votre consentement à tout moment lorsque le
              traitement repose sur celui-ci.
            </li>
          </ul>
          <p>
            Le retrait du consentement n&apos;affecte pas la licéité des
            traitements effectués avant son retrait.
          </p>
        </Section>

        <Section id="exercice-droits" title="22. Exercice de vos droits">
          <p>Pour exercer vos droits :</p>
          <p>
            E-mail :{" "}
            <a href="mailto:contact@valeadata.com" className={accentLink}>
              contact@valeadata.com
            </a>
          </p>
          <div className="space-y-1">
            <p className="font-semibold text-foreground">Courrier :</p>
            <p>
              VALEADATA SL
              <br />
              Carrer Palma de Sant Just 5
              <br />
              08002 Barcelona
              <br />
              Espagne
            </p>
          </div>
          <p>
            La demande doit contenir suffisamment d&apos;informations pour
            permettre à Valeadata d&apos;identifier la personne et les données
            concernées.
          </p>
          <p>
            VALEADATA SL peut demander des informations supplémentaires lorsque
            cela est nécessaire afin de vérifier raisonnablement l&apos;identité
            du demandeur.
          </p>
          <p>
            Aucun document d&apos;identité ne doit être demandé
            systématiquement lorsqu&apos;une méthode moins intrusive permet de
            vérifier l&apos;identité.
          </p>
        </Section>

        <Section id="reclamation" title="23. Réclamation auprès d'une autorité de contrôle">
          <p>
            Toute personne estimant que le traitement de ses données
            personnelles n&apos;est pas conforme à la réglementation applicable
            dispose du droit d&apos;introduire une réclamation auprès d&apos;une
            autorité de contrôle compétente.
          </p>
          <p>
            VALEADATA SL étant établie en Espagne, l&apos;autorité de contrôle
            compétente est notamment :
          </p>
          <p className="font-semibold text-foreground">
            Agencia Española de Protección de Datos (AEPD)
          </p>
          <p>
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className={accentLink}
            >
              Site officiel de l&apos;AEPD
            </a>
          </p>
          <p>
            Une personne peut également s&apos;adresser, lorsque les règles
            applicables le permettent, à l&apos;autorité compétente de son lieu
            de résidence.
          </p>
        </Section>

        <Section id="securite" title="24. Sécurité des données">
          <p>
            VALEADATA SL met en œuvre des mesures techniques et
            organisationnelles adaptées aux risques afin de protéger les données
            personnelles contre notamment :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>l&apos;accès non autorisé ;</li>
            <li>la perte ;</li>
            <li>la destruction ;</li>
            <li>l&apos;altération ;</li>
            <li>la divulgation non autorisée ;</li>
            <li>l&apos;utilisation abusive.</li>
          </ul>
          <p>
            Les mesures mises en place sont adaptées en fonction de la nature
            des données, des technologies utilisées et des risques identifiés.
          </p>
        </Section>

        <Section id="minimisation" title="25. Minimisation des données">
          <p>
            VALEADATA SL applique un principe de minimisation des données.
          </p>
          <p>
            Seules les informations pertinentes et nécessaires à la finalité
            poursuivie doivent être collectées.
          </p>
          <p>
            Ce principe s&apos;applique également à l&apos;assistant
            conversationnel Leo.
          </p>
          <p>
            Leo doit demander progressivement les informations nécessaires à la
            qualification commerciale et ne doit pas demander des informations
            personnelles sans rapport avec la demande.
          </p>
        </Section>

        <Section id="mise-a-jour" title="26. Mise à jour de la politique">
          <p>
            La présente politique peut évoluer afin de tenir compte notamment :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>de nouvelles fonctionnalités ;</li>
            <li>de nouveaux prestataires ;</li>
            <li>de nouveaux traitements ;</li>
            <li>de modifications réglementaires ;</li>
            <li>de l&apos;évolution des activités de Valeadata ;</li>
            <li>de l&apos;évolution des technologies utilisées.</li>
          </ul>
          <p>
            La date de dernière mise à jour est indiquée en haut de la présente
            page.
          </p>
          <p>
            Voir également les{" "}
            <Link href="/mentions-legales" className={accentLink}>
              Mentions légales
            </Link>
            .
          </p>
        </Section>

        <Section id="contact" title="27. Contact">
          <p>
            Pour toute question relative à la présente politique ou au
            traitement de vos données :
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
              <a href="mailto:contact@valeadata.com" className={accentLink}>
                contact@valeadata.com
              </a>
            </p>
          </div>
        </Section>
      </div>
    </LegalPage>
  );
}
