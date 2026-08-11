import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description:
    "Politique de cookies de VALEADATA SL — cookies et traceurs réellement utilisés sur valeadata.com.",
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

function Note({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-border bg-white/80 px-4 py-3 text-sm text-muted">
      {children}
    </p>
  );
}

export default function PolitiqueCookiesPage() {
  return (
    <LegalPage
      title="Politique de cookies"
      description="Cette politique explique comment VALEADATA SL utilise des cookies et technologies similaires sur le site valeadata.com."
      noCopy
    >
      <div className="space-y-12">
        <p className="text-sm text-muted">Dernière mise à jour : août 2026</p>

        <Section id="introduction" title="1. Introduction">
          <p>
            La présente Politique de cookies explique comment VALEADATA SL
            utilise des cookies et technologies similaires sur le site{" "}
            <a href="https://www.valeadata.com/" className={accentLink}>
              valeadata.com
            </a>
            .
          </p>
          <p>Elle vous permet notamment de comprendre :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>ce qu&apos;est un cookie ;</li>
            <li>pourquoi certains cookies peuvent être utilisés ;</li>
            <li>quelles catégories de cookies peuvent être présentes ;</li>
            <li>quels cookies sont effectivement utilisés sur le site ;</li>
            <li>
              comment accepter, refuser ou modifier vos préférences.
            </li>
          </ul>
          <p>
            La protection des données et la maîtrise de vos choix font partie
            intégrante de la manière dont Valeadata conçoit ses services
            numériques.
          </p>
        </Section>

        <Section id="responsable" title="2. Responsable">
          <p>Le site valeadata.com est édité par :</p>
          <div className="space-y-1">
            <p className="font-semibold text-foreground">VALEADATA SL</p>
            <p>Société à responsabilité limitée de droit espagnol</p>
          </div>
          <ul className="space-y-1">
            <li>Capital social : 24 000 €</li>
            <li>NIF : B88944939</li>
            <li>TVA intracommunautaire : ESB88944939</li>
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
              Gérante : Valentine Damame
            </li>
            <li>
              E-mail :{" "}
              <a href="mailto:contact@valeadata.com" className={accentLink}>
                contact@valeadata.com
              </a>
            </li>
          </ul>
        </Section>

        <Section id="definition" title="3. Qu'est-ce qu'un cookie ?">
          <p>
            Un cookie est un petit fichier ou une information susceptible
            d&apos;être enregistré sur votre terminal lors de la consultation
            d&apos;un site internet.
          </p>
          <p>
            Les cookies et technologies similaires peuvent notamment permettre
            :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>le fonctionnement technique d&apos;un site ;</li>
            <li>la mémorisation de certains choix ;</li>
            <li>la sécurisation d&apos;un service ;</li>
            <li>la mesure de l&apos;utilisation d&apos;un site ;</li>
            <li>l&apos;analyse de ses performances ;</li>
            <li>la personnalisation de certains contenus ;</li>
            <li>
              la mesure ou l&apos;optimisation de campagnes publicitaires.
            </li>
          </ul>
          <p>
            Tous les cookies n&apos;ont donc pas la même finalité et tous ne
            nécessitent pas nécessairement le consentement de l&apos;utilisateur.
          </p>
        </Section>

        <Section id="necessaires" title="4. Cookies nécessaires">
          <p>
            Certains cookies ou mécanismes de stockage peuvent être strictement
            nécessaires au fonctionnement du site.
          </p>
          <p>Ils peuvent notamment permettre :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>le fonctionnement technique du site ;</li>
            <li>la sécurité ;</li>
            <li>la prévention des abus ;</li>
            <li>la mémorisation de vos préférences de consentement ;</li>
            <li>
              le fonctionnement d&apos;une fonctionnalité expressément demandée.
            </li>
          </ul>
          <p>
            Lorsqu&apos;ils sont strictement nécessaires au service demandé, ces
            cookies peuvent être utilisés sans consentement préalable dans les
            conditions prévues par la réglementation applicable.
          </p>
          <p>
            Ils ne doivent pas être utilisés à d&apos;autres fins incompatibles
            avec leur fonction.
          </p>
        </Section>

        <Section id="preferences" title="5. Cookies de préférence">
          <p>
            Certains cookies peuvent permettre de mémoriser les choix effectués
            par l&apos;utilisateur afin de personnaliser son expérience.
          </p>
          <p>Ils peuvent notamment concerner :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>des préférences d&apos;affichage ;</li>
            <li>la langue ;</li>
            <li>certaines préférences fonctionnelles.</li>
          </ul>
          <p>
            Leur régime dépend de leur finalité et de leur caractère
            strictement nécessaire ou non au service demandé.
          </p>
        </Section>

        <Section id="audience" title="6. Cookies de mesure d'audience et d'analyse">
          <p>
            Valeadata peut à l&apos;avenir utiliser des outils permettant de
            comprendre comment le site est utilisé.
          </p>
          <p>Ces outils peuvent notamment permettre de mesurer :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>le nombre de visites ;</li>
            <li>les pages consultées ;</li>
            <li>la durée des visites ;</li>
            <li>les parcours de navigation ;</li>
            <li>les sources de trafic ;</li>
            <li>les performances techniques du site.</li>
          </ul>
          <p>
            Lorsque l&apos;utilisation de ces technologies nécessite le
            consentement de l&apos;utilisateur, elles ne doivent pas être
            activées avant son accord.
          </p>
          <Note>
            Aucun outil de mesure d&apos;audience n&apos;est nommé dans cette
            section tant qu&apos;il n&apos;est pas réellement installé sur le
            site.
          </Note>
        </Section>

        <Section id="publicite" title="7. Cookies publicitaires et mesure des campagnes">
          <p>
            Valeadata peut être amenée à utiliser des technologies permettant de
            mesurer l&apos;efficacité de ses campagnes d&apos;acquisition ou de
            publicité.
          </p>
          <p>
            Ces technologies peuvent notamment être fournies par des plateformes
            publicitaires.
          </p>
          <p>Elles peuvent permettre :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>d&apos;attribuer une visite à une campagne ;</li>
            <li>de mesurer une conversion ;</li>
            <li>d&apos;analyser les performances d&apos;une campagne ;</li>
            <li>d&apos;améliorer la diffusion des campagnes ;</li>
            <li>de limiter ou adapter certaines publicités.</li>
          </ul>
          <p>
            Lorsqu&apos;un consentement est requis, ces technologies ne doivent
            pas être activées avant que l&apos;utilisateur ait exprimé son
            choix.
          </p>
          <Note>
            Aucune plateforme publicitaire spécifique n&apos;est citée tant
            qu&apos;elle n&apos;est pas réellement connectée au site.
          </Note>
        </Section>

        <Section id="tiers" title="8. Cookies et services tiers">
          <p>
            Certaines fonctionnalités peuvent s&apos;appuyer sur des
            prestataires tiers.
          </p>
          <p>
            Lorsque ces prestataires déposent ou utilisent des cookies ou
            technologies similaires, les informations correspondantes doivent
            être ajoutées à la présente politique.
          </p>
          <p>
            Valeadata veille à identifier les prestataires utilisés et à mettre
            à jour la présente politique lorsque l&apos;infrastructure du site
            évolue.
          </p>
        </Section>

        <Section id="leo" title="9. Assistant conversationnel Leo">
          <p>
            Le site peut proposer un assistant conversationnel utilisant des
            technologies d&apos;intelligence artificielle.
          </p>
          <p>
            Le fonctionnement de Leo peut nécessiter certains traitements
            techniques, notamment afin de :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>maintenir une conversation ;</li>
            <li>assurer la sécurité du service ;</li>
            <li>
              mémoriser temporairement le contexte nécessaire à l&apos;échange ;
            </li>
            <li>éviter certains abus.</li>
          </ul>
          <p>
            L&apos;utilisation du chatbot ne doit pas entraîner automatiquement
            l&apos;activation de cookies publicitaires ou analytiques non
            nécessaires.
          </p>
          <p>
            Si le fournisseur ou l&apos;infrastructure technique de Leo utilise
            des cookies ou mécanismes de stockage spécifiques, ceux-ci devront
            être documentés dans la présente politique en fonction de leur
            utilisation réelle.
          </p>
          <Note>
            À ce jour, Leo fonctionne en mémoire de session dans le navigateur
            (état React) : aucun cookie dédié ni stockage local persistant
            n&apos;est déposé par l&apos;assistant pour cette finalité.
          </Note>
        </Section>

        <Section id="cookies-actuels" title="10. Cookies actuellement utilisés">
          <p>
            Cette section décrit uniquement les cookies et mécanismes de
            stockage réellement présents sur le site, après audit du code et de
            l&apos;infrastructure applicative.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-violet-light/60 text-foreground">
                <tr>
                  <th className="px-3 py-2.5 font-semibold sm:px-4">Cookie</th>
                  <th className="px-3 py-2.5 font-semibold sm:px-4">
                    Fournisseur
                  </th>
                  <th className="px-3 py-2.5 font-semibold sm:px-4">
                    Finalité
                  </th>
                  <th className="px-3 py-2.5 font-semibold sm:px-4">
                    Catégorie
                  </th>
                  <th className="px-3 py-2.5 font-semibold sm:px-4">Durée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={5}
                    className="px-3 py-4 text-muted sm:px-4"
                  >
                    Aucun cookie nommé n&apos;est actuellement déposé par le
                    site Valeadata.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="rounded-xl border border-violet/20 bg-violet-light/60 px-4 py-3 text-sm font-semibold text-foreground sm:text-[15px]">
            À ce jour, Valeadata n&apos;utilise pas de cookies publicitaires ou
            de mesure d&apos;audience nécessitant votre consentement sur ce
            site.
          </p>
          <p>
            Les éventuels mécanismes de stockage strictement nécessaires au
            fonctionnement du site ou à la mémorisation de vos préférences
            peuvent néanmoins être utilisés.
          </p>
          <Note>
            Audit technique (code source du site) : aucun Google Analytics,
            Google Ads, Meta Pixel, TikTok Pixel, LinkedIn Insight Tag, Hotjar,
            Microsoft/Bing Ads ni autre traceur publicitaire ou analytique
            n&apos;est installé. Aucun appel à{" "}
            <code className="text-[13px]">localStorage</code>,{" "}
            <code className="text-[13px]">sessionStorage</code> ou{" "}
            <code className="text-[13px]">document.cookie</code> n&apos;est
            effectué par l&apos;application pour du tracking. Les polices sont
            chargées via{" "}
            <code className="text-[13px]">next/font</code> (auto-hébergement au
            build). Les liens LinkedIn du site sont de simples liens sortants,
            sans balise Insight.
          </Note>
        </Section>

        <Section id="consentement" title="11. Consentement">
          <p>
            Lorsque des cookies ou technologies non strictement nécessaires sont
            utilisés, ils ne doivent être activés qu&apos;après obtention du
            consentement de l&apos;utilisateur lorsque celui-ci est requis.
          </p>
          <p>Le consentement doit résulter d&apos;un choix libre.</p>
          <p>Le visiteur doit pouvoir :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>accepter les cookies concernés ;</li>
            <li>les refuser ;</li>
            <li>configurer ses préférences ;</li>
            <li>modifier ultérieurement son choix ;</li>
            <li>retirer son consentement.</li>
          </ul>
        </Section>

        <Section id="refuser" title="12. Refuser les cookies">
          <p>
            Le refus des cookies non nécessaires ne doit pas empêcher
            l&apos;utilisateur d&apos;accéder normalement au site, sauf
            lorsqu&apos;une fonctionnalité particulière nécessite techniquement
            un traitement demandé par l&apos;utilisateur.
          </p>
          <p>
            Aucun cookie non nécessaire nécessitant un consentement ne doit être
            déposé simplement parce que l&apos;utilisateur continue sa
            navigation.
          </p>
        </Section>

        <Section id="modifier" title="13. Modifier ou retirer son consentement">
          <p>
            L&apos;utilisateur doit pouvoir modifier son choix à tout moment.
          </p>
          <p>
            Le footer du site contient un lien « Gérer mes cookies ». Ce lien
            permet de rouvrir le gestionnaire de consentement.
          </p>
          <p>L&apos;utilisateur doit alors pouvoir :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>consulter ses choix ;</li>
            <li>modifier ses préférences ;</li>
            <li>accepter certaines catégories ;</li>
            <li>refuser certaines catégories ;</li>
            <li>retirer un consentement précédemment donné.</li>
          </ul>
          <p>
            Le retrait doit être aussi simple que l&apos;expression initiale du
            consentement.
          </p>
          <p>
            Tant qu&apos;aucun cookie non essentiel n&apos;est installé, le
            gestionnaire informe de l&apos;absence de traceurs soumis au
            consentement et reste prêt à recueillir vos choix dès qu&apos;un
            outil sera ajouté.
          </p>
        </Section>

        <Section id="duree-choix" title="14. Durée des choix de consentement">
          <p>
            Les choix relatifs aux cookies sont conservés uniquement pendant une
            durée appropriée.
          </p>
          <p>
            Le consentement relatif aux cookies constitue un traitement distinct
            des consentements de prospection commerciale.
          </p>
          <Note>
            La règle « 12 mois d&apos;utilisation / 3 ans de preuve »
            applicable à certains consentements de prospection de Valeadata ne
            s&apos;applique pas automatiquement aux cookies. La durée et les
            modalités de conservation de la preuve du consentement cookies
            seront configurées conformément aux règles applicables et au
            gestionnaire réellement utilisé, lorsque des cookies non essentiels
            seront activés.
          </Note>
        </Section>

        <Section id="navigateur" title="15. Paramètres du navigateur">
          <p>
            L&apos;utilisateur peut également configurer son navigateur afin de
            contrôler, bloquer ou supprimer certains cookies.
          </p>
          <p>
            Ces réglages sont indépendants du gestionnaire de consentement
            proposé par Valeadata.
          </p>
          <p>Pages d&apos;aide officielles des principaux navigateurs :</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className={accentLink}
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent"
                target="_blank"
                rel="noopener noreferrer"
                className={accentLink}
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className={accentLink}
              >
                Apple Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className={accentLink}
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
        </Section>

        <Section id="donnees-personnelles" title="16. Données personnelles">
          <p>
            Certains cookies ou technologies similaires peuvent entraîner le
            traitement de données personnelles.
          </p>
          <p>
            Lorsque cela est le cas, ces traitements sont également soumis aux
            règles décrites dans notre{" "}
            <Link href="/politique-confidentialite" className={accentLink}>
              Politique de confidentialité
            </Link>
            .
          </p>
        </Section>

        <Section id="evolution" title="17. Évolution de la politique">
          <p>
            La présente Politique de cookies peut être modifiée notamment
            lorsque :
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>de nouveaux outils sont installés ;</li>
            <li>un nouveau prestataire est utilisé ;</li>
            <li>de nouvelles fonctionnalités sont ajoutées ;</li>
            <li>les finalités des cookies évoluent ;</li>
            <li>les exigences réglementaires évoluent.</li>
          </ul>
          <p>
            La date de dernière mise à jour figure en haut de cette page.
          </p>
        </Section>

        <Section id="contact" title="18. Contact">
          <p>
            Pour toute question concernant l&apos;utilisation des cookies sur le
            site :
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
