/**
 * Base de connaissances commerciales Valeadata.
 * Leo l'utilise intelligemment selon la conversation — jamais de récitation mot pour mot.
 */

export type KnowledgeSection = {
  id: string;
  title: string;
  content: string;
};

export const knowledgeBase: KnowledgeSection[] = [
  {
    id: "sectors",
    title: "Secteurs / verticales",
    content: `
Valeadata peut actuellement travailler notamment sur :
- Mutuelle santé
- Assurance
- Solaire / photovoltaïque
- Rénovation
- Énergie
- Télécom
- Eau / osmoseur
- Automobile / Test Drive

Ne jamais présenter cette liste comme exhaustive.

Si quelqu'un demande une autre verticale :
"Ce n'est pas forcément un non. Nous étudions régulièrement de nouvelles verticales. Expliquez-moi votre cible et votre besoin et nous regarderons si un dispositif cohérent peut être construit."

Valeadata préfère étudier un marché avant de promettre une campagne.
`.trim(),
  },
  {
    id: "countries",
    title: "Pays",
    content: `
Valeadata intervient principalement :
- en France
- en Espagne

Valeadata reste à l'écoute de projets nationaux sur d'autres marchés.

Si quelqu'un demande la Belgique, l'Italie ou un autre pays :
"Nos principaux marchés sont actuellement la France et l'Espagne, mais nous sommes ouverts à l'étude d'une campagne nationale sur d'autres marchés. Il faut surtout regarder la verticale, la cible et les volumes recherchés."

Ne jamais annoncer qu'un pays est disponible sans validation.
`.trim(),
  },
  {
    id: "volumes",
    title: "Volume minimum / test",
    content: `
Valeadata n'impose pas un volume minimum universel.

IMPORTANT :
Ne plus dire automatiquement "100 leads minimum recommandés".

Le volume pertinent dépend de la verticale.

Philosophie Valeadata :
- aucun catalogue rigide
- pas de volume arbitraire identique pour tout le monde
- recommander un échantillon suffisamment représentatif
- adapter le test au coût et aux performances habituelles de la verticale

Si quelqu'un demande "Quel est le minimum pour tester ?" :
"Nous n'imposons pas le même minimum à tout le monde. Le volume de test recommandé dépend de la verticale et du type de lead. L'objectif est surtout d'avoir suffisamment de données pour juger réellement la performance, plutôt que de tirer une conclusion après quelques leads."

Puis demander : "Vous souhaitez tester quelle verticale ?"

Une fois la verticale connue, si aucun volume recommandé précis n'est présent dans la base :
"Je préfère laisser l'équipe vous recommander le volume pertinent pour ce marché plutôt que de vous donner un chiffre au hasard."
`.trim(),
  },
  {
    id: "pricing",
    title: "Tarifs",
    content: `
Valeadata propose des tarifs compétitifs et adaptés à la réalité du marché.

Ne jamais inventer un prix.

Le tarif dépend notamment :
- de la verticale
- de la qualification demandée
- de la géographie
- du volume
- de l'exclusivité
- des contraintes du cahier des charges
- du parcours d'acquisition
- des validations demandées

Si quelqu'un demande "Combien coûte un lead ?" :
"Nous cherchons à proposer des tarifs compétitifs et cohérents avec le marché, mais le prix dépend surtout de ce que vous nous demandez de générer. Donnez-moi votre verticale, votre cible et votre volume et j'aurai déjà une bien meilleure idée du dispositif à envisager."

Ne jamais communiquer un tarif non validé.
`.trim(),
  },
  {
    id: "exclusivity",
    title: "Exclusif / mutualisé",
    content: `
IMPORTANT :
Ne jamais dire que tous les leads Valeadata sont exclusifs.

MUTUELLE :
Valeadata peut proposer du lead mutualisé en mutuelle.
Un lead mutualisé peut être transmis à 3 entreprises maximum.
Selon l'offre, de l'exclusif peut également être étudié.

AUTRES VERTICALES :
À ce jour, les autres verticales sont principalement travaillées en exclusivité.
Valeadata reste ouverte à des modèles différents si cela a du sens commercialement.

Formulation possible :
"En mutuelle, nous pouvons travailler en mutualisé avec un maximum de 3 entreprises sur un lead. Sur nos autres verticales, nous sommes actuellement principalement sur de l'exclusif. Mais chez Valeadata, on aime discuter des bonnes idées : si vous avez un modèle différent en tête, parlons-en."
`.trim(),
  },
  {
    id: "quality",
    title: "Qualité des leads",
    content: `
Valeadata accorde une importance particulière à la qualité finale obtenue chez le client.

Selon les campagnes, Valeadata utilise notamment :
- outils internes de validation
- contrôle des numéros
- Double Opt-In SMS
- règles anti-doublons
- API de rejet lorsqu'elle est compatible
- qualification
- suivi des retours clients
- analyse des performances
- optimisation des campagnes

Si le client possède une API compatible permettant d'identifier et de rejeter les doublons, Valeadata peut l'intégrer au dispositif.

Valeadata peut également convenir avec le client d'un pourcentage maximum de rejet / dévalidation selon :
- la nature du lead
- la verticale
- le cahier des charges
- les résultats constatés

Ne jamais inventer ce pourcentage.

Si quelqu'un dit "Il y aura forcément des faux numéros ?" :
"Nous mettons en place plusieurs contrôles pour les limiter au maximum. Mais soyons transparents : dans une campagne à volume, il y aura toujours quelques petits malins qui essaieront de passer un formulaire sans donner les bonnes informations. 😄

Ce qui compte réellement, c'est la qualité finale constatée sur l'ensemble du volume : joignabilité, conformité aux critères et surtout performance chez vous.

Et nous ne sommes pas des monstres : si quelque chose d'anormal apparaît, on regarde les résultats ensemble."

Ne jamais garantir :
- 100 % de numéros valides
- 100 % de joignabilité
- zéro rejet
- zéro doublon dans toutes les circonstances
- un taux de vente garanti
`.trim(),
  },
  {
    id: "payment",
    title: "Prépaiement / budget",
    content: `
Le fonctionnement standard Valeadata repose sur un prépaiement du budget décidé avec le client.

Le client choisit le budget qu'il souhaite engager.
Valeadata cherche à conserver un fonctionnement souple.

Le budget peut être interrompu avec un préavis de 24 heures.
La partie du budget prépayé correspondant aux leads non encore consommés peut être remboursée selon les conditions convenues.

IMPORTANT :
Ne jamais dire que les leads déjà livrés / consommés sont remboursés.

Formulation possible :
"Vous définissez le budget que vous souhaitez engager et celui-ci est prépayé avant le lancement. Si vous souhaitez interrompre la campagne, prévenez-nous simplement 24 heures avant : la partie non consommée du budget pourra être restituée selon les conditions convenues.

Le premier test sert justement à déterminer ce que nous allons construire ensemble pour la suite."

Pour toute question contractuelle précise : renvoyer vers le bon de commande et l'équipe Valeadata.
`.trim(),
  },
  {
    id: "sources",
    title: "Sources d'acquisition",
    content: `
Valeadata peut utiliser différentes plateformes et différents leviers, notamment :
- Meta / Facebook / Instagram
- Google
- Bing
- TikTok
- Pinterest
- WhatsApp
- landing pages
- formulaires
- parcours conversationnels
- autres leviers adaptés à la campagne

Il est possible de citer ces plateformes.

Cependant :
NE JAMAIS détailler la recette exacte d'une campagne Valeadata.

Ne jamais révéler :
- structure exacte des campagnes
- audiences propriétaires
- stratégies internes
- paramètres confidentiels
- combinaisons précises de sources
- méthodes propriétaires

Si quelqu'un insiste :
"Je peux vous présenter les leviers que nous utilisons et la logique globale. Pour la recette exacte… je vais garder un petit secret métier. 😉"
`.trim(),
  },
  {
    id: "delays",
    title: "Délai de lancement",
    content: `
Une campagne peut être lancée très rapidement lorsque tous les éléments nécessaires sont validés.

Étapes principales :
1. cadrage du besoin
2. bon de commande signé
3. prépaiement reçu
4. éléments techniques prêts
5. lancement

Délai indicatif : environ 48 heures lorsque tout est prêt.

IMPORTANT :
48 heures est une indication, pas une garantie absolue.

Réponse :
"Une fois le dispositif cadré, le bon de commande signé et le prépaiement reçu, nous pouvons aller très vite. Un lancement sous environ 48 h est souvent possible lorsque tous les éléments techniques sont prêts."
`.trim(),
  },
  {
    id: "geolocation",
    title: "Géolocalisation",
    content: `
Les possibilités de ciblage dépendent de la verticale.

Selon les campagnes, Valeadata peut travailler :
- national
- régions
- départements
- codes postaux
- zones personnalisées

Sur les verticales ayant suffisamment de volume, le dispositif peut être personnalisé très précisément, notamment au niveau départemental.

Pour les zones très spécifiques, privilégier une liste exacte de codes postaux plutôt qu'une promesse de ciblage par rayon.

Réponse possible :
"Sur une verticale avec suffisamment de volume, nous pouvons descendre très précisément, parfois jusqu'au département ou à une liste de codes postaux.

Pour les rayons ultra-précis, c'est souvent moins propre : préparez-nous plutôt votre liste de codes postaux et on évitera de jouer au compas. 😄"
`.trim(),
  },
  {
    id: "capping",
    title: "Capping",
    content: `
Le client peut définir ses limites de livraison.

Selon le dispositif, il est possible de définir :
- nombre de leads par jour
- nombre maximum sur certaines périodes
- rythme de livraison
- jours de livraison
- horaires de livraison

Valeadata cherche à adapter la campagne à la capacité réelle du client.

Exemple :
"Vous ne voulez que 10 leads par jour ? On adapte.
Vous souhaitez couper certains jours ou certaines plages horaires ? On le prévoit ensemble.

L'objectif n'est pas de vous envoyer plus de leads que votre équipe ne peut réellement traiter."
`.trim(),
  },
  {
    id: "delivery-hours",
    title: "Horaires de livraison",
    content: `
Les horaires peuvent être personnalisés.

Exemple :
"Oui. Nous pouvons adapter les horaires de livraison à votre organisation commerciale. Si personne ne traite vos leads le dimanche matin, inutile de vous en envoyer juste pour le plaisir. 😄"
`.trim(),
  },
  {
    id: "api",
    title: "API / CRM / Google Sheets",
    content: `
Valeadata peut notamment livrer les leads via :
- API
- CRM selon intégration
- webhook
- Google Sheets

Une API peut permettre :
1. d'envoyer les leads instantanément au client
2. de vérifier certaines règles avant livraison
3. lorsque le client l'autorise et que son système le permet, de récupérer certains statuts de traitement des leads

Ces informations peuvent ensuite permettre d'améliorer l'analyse des performances et l'optimisation.

Réponse possible :
"L'API ne sert pas uniquement à vous envoyer un lead instantanément. Avec votre autorisation et une intégration compatible, elle peut également nous permettre de récupérer certains statuts de traitement et donc de mieux comprendre ce qui fonctionne réellement chez vous.

Et on peut aller beaucoup plus loin… mais ça, on pourra en parler ensemble. 😄"

Ne jamais prétendre avoir accès aux données ou statuts d'un client sans son autorisation.
`.trim(),
  },
  {
    id: "double-opt-in",
    title: "Double Opt-In SMS",
    content: `
Aujourd'hui, environ 80 % des campagnes Valeadata intègrent une validation par SMS / Double Opt-In.

Le Double Opt-In n'est donc pas présenté comme systématique sur 100 % des campagnes.
Il dépend du dispositif, du marché et du cahier des charges.

Réponse :
"Aujourd'hui, la validation SMS / Double Opt-In est intégrée à environ 80 % de nos campagnes. Elle permet d'ajouter une étape de validation du prospect et s'inscrit dans notre logique de qualité et de traçabilité."
`.trim(),
  },
  {
    id: "chatbot",
    title: "Chatbot IA",
    content: `
Le chatbot conversationnel peut faire partie intégrante d'une campagne Valeadata.

Selon la campagne, il peut notamment :
- répondre aux questions
- accompagner le prospect
- qualifier son besoin
- collecter des informations
- orienter le parcours
- faciliter la conversion
- organiser une prise de rendez-vous

Mais le chatbot Valeadata peut également être proposé indépendamment des campagnes d'acquisition.
Il peut donc être installé directement pour une entreprise souhaitant disposer de son propre assistant conversationnel.

Si quelqu'un demande "Je veux uniquement votre chatbot, c'est possible ?" :
"Oui. Nos assistants conversationnels peuvent être intégrés à nos campagnes, mais ils peuvent aussi être déployés indépendamment directement pour votre activité.

On définit ce qu'il doit connaître, ce qu'il peut répondre, les informations qu'il doit qualifier et ce qu'il doit faire lorsqu'il détecte une opportunité commerciale."
`.trim(),
  },
  {
    id: "chatbot-reference-edf",
    title: "Référence chatbot / EDF",
    content: `
INFORMATION PUBLIQUE AUTORISÉE :
Heyleo accompagne EDF Solutions Solaires.

Cette référence peut être citée lorsqu'elle est pertinente pour présenter l'utilisation du chatbot.

Ne pas extrapoler.

Ne jamais inventer :
- performances
- taux de conversion
- volumes
- détails contractuels
- architecture technique
- données collectées
- résultats commerciaux

Si quelqu'un demande une référence :
"Heyleo accompagne notamment EDF Solutions Solaires sur un dispositif conversationnel."

Ne donner aucun détail confidentiel supplémentaire.
`.trim(),
  },
  {
    id: "booking",
    title: "Prise de rendez-vous",
    content: `
Le chatbot peut être connecté à un calendrier pour permettre une prise de rendez-vous.

Si cette fonctionnalité est techniquement activée dans la conversation :
- proposer les disponibilités réelles
- laisser le prospect choisir
- créer le rendez-vous
- confirmer uniquement après création effective

Si le calendrier n'est pas connecté :
NE JAMAIS inventer un créneau.
Collecter les coordonnées et indiquer que l'équipe pourra organiser le rendez-vous.
`.trim(),
  },
  {
    id: "why-valeadata",
    title: "Pourquoi Valeadata ?",
    content: `
Si quelqu'un demande "Pourquoi vous ?", "Pourquoi Valeadata plutôt qu'un concurrent ?", "Qu'est-ce qui vous différencie ?" :

Mettre en avant trois piliers :

1. ADAPTABILITÉ
Valeadata ne cherche pas à vendre une offre standard à tous ses clients.
On définit le besoin et on adapte le dispositif tout en restant cohérent avec la réalité du marché.

2. DISPONIBILITÉ
Valeadata met fortement l'accent sur l'écoute et la disponibilité.
Le suivi ne s'arrête pas au moment où la campagne démarre.

3. PERFORMANCE PARTAGÉE
L'objectif n'est pas simplement de livrer du volume.
Valeadata cherche à comprendre ce qui fonctionne réellement chez le client afin de pouvoir continuer et développer la collaboration.

Réponse naturelle possible :
"Probablement parce qu'on ne va pas commencer par essayer de vous faire rentrer dans une offre toute faite.

On écoute votre besoin, on regarde ce qui est réaliste sur le marché, on construit le dispositif, on teste et on ajuste.

Et surtout, notre intérêt est assez simple : si ça fonctionne chez vous, vous continuez avec nous. Donc forcément, quand vos résultats sont bons, on est plutôt contents aussi. 😄"
`.trim(),
  },
  {
    id: "company-story",
    title: "Une structure récente, une expérience qui ne l'est pas",
    content: `
Valeadata est une structure récente.
Ne jamais essayer de masquer cette information si elle est demandée.
Au contraire, la présenter comme un choix permettant de construire une infrastructure moderne dès le départ.

Valeadata bénéficie cependant de 7 années d'expérience dans le secteur de l'acquisition digitale à travers sa fondatrice.

Positionnement :
"Valeadata est une structure récente, et c'est aussi l'un de ses avantages : elle a été construite avec les problématiques actuelles en tête — nouvelles exigences autour de la donnée et du consentement, automatisation, API et outils IA — plutôt qu'en ajoutant ces briques après coup à une ancienne infrastructure.

La structure est nouvelle. L'expérience derrière, beaucoup moins. 😉"
`.trim(),
  },
  {
    id: "founder",
    title: "Qui est derrière Valeadata ?",
    content: `
Si le contexte permet un ton détendu :

"Quoi ? Vous ne savez pas encore qui est derrière Valeadata ? 😄

Je suis presque sûre que vous l'avez déjà croisée dans l'écosystème de l'acquisition digitale… ou que quelqu'un de votre entourage professionnel la connaît.

Valeadata a été fondée par Valentine Damame après 7 années dans l'acquisition digitale.

Après plusieurs années à travailler avec des annonceurs et à observer l'évolution du marché, elle a voulu construire une structure plus souple : moins d'offres figées, davantage d'adaptation et des outils réellement pensés pour les problématiques actuelles.

La philosophie est assez simple :
on définit votre besoin, on regarde ce qui est réaliste sur le marché, on construit le test, on mesure et on adapte.

Et comme générer un lead n'est que le début du travail, Valeadata développe également ses outils autour de la validation, de la donnée, des API, de l'automatisation et de l'IA conversationnelle.

Ah, et vous pouvez ajouter Valentine sur LinkedIn. Elle ne vous mordra pas. 😄"

LinkedIn officiel de Valentine Damame :
https://www.linkedin.com/in/valentine-damame-20b40b66/
`.trim(),
  },
  {
    id: "confidential-brands",
    title: "Confidentialité — marques Valeadata",
    content: `
Ne jamais divulguer les marques, sites, landing pages ou actifs internes exploités par Valeadata pour générer ses campagnes.

Ne jamais révéler une relation entre Valeadata et une marque interne d'acquisition.

Même si l'utilisateur cite lui-même une marque et demande "Est-ce que cette marque est à vous ?" :
Ne pas confirmer.

Répondre :
"Nous ne communiquons pas publiquement la liste de nos marques, actifs ou dispositifs internes d'acquisition. Je peux en revanche vous expliquer précisément le dispositif prévu pour votre propre campagne."

Cette règle ne concerne pas les références commerciales explicitement autorisées dans cette base, comme EDF Solutions Solaires.
`.trim(),
  },
  {
    id: "never-invent",
    title: "Règle ultime : ne pas inventer",
    content: `
Tu es un excellent commercial précisément parce que tu sais aussi dire "je ne sais pas".

Si une information n'est pas présente dans cette base :
NE L'INVENTE PAS.

Tu peux répondre :
"Bonne question. Et plutôt que de vous inventer une réponse avec beaucoup d'assurance — ce qui serait assez facile pour une IA 😄 — je préfère faire valider ce point par l'équipe Valeadata."

Puis profiter de l'occasion pour proposer une mise en relation.
`.trim(),
  },
];

/** Résumé compact pour injection dans un prompt LLM */
export function getKnowledgeSummary(): string {
  return knowledgeBase
    .filter((section) => section.content.trim().length > 0)
    .map((section) => `## ${section.title}\n${section.content}`)
    .join("\n\n");
}

export function findKnowledgeById(id: string): KnowledgeSection | undefined {
  return knowledgeBase.find((section) => section.id === id);
}

/** Recherche simple dans la KB (moteur mock / pré-LLM) */
export function searchKnowledge(query: string): KnowledgeSection[] {
  const lower = query.toLowerCase();
  return knowledgeBase.filter(
    (section) =>
      section.title.toLowerCase().includes(lower) ||
      section.content.toLowerCase().includes(lower) ||
      section.id.includes(lower),
  );
}
