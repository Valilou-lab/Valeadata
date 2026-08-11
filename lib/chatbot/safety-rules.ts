/**
 * Règles de sécurité : insultes, marques internes, anti-hallucination.
 */

export const safetyRules = {
  neverInventCommercialFacts: true,
  neverDiscloseInternalBrands: true,
  refuseOutOfScope: true,
  handleInsultsCalmly: true,
  neverConfirmInternalBrandOwnership: true,
} as const;

export const CONFIDENTIAL_TOPICS = [
  "marge",
  "fournisseur interne",
  "marque blanche",
  "landing page interne",
  "actif d'acquisition",
  "audiences propriétaires",
  "paramètres confidentiels",
  "mot de passe",
  "accès crm interne",
  "recette exacte",
  "structure exacte des campagnes",
] as const;

/** Indices qu'on demande si une marque / site est à Valeadata */
const INTERNAL_BRAND_PROBE =
  /\b(c'?est (à )?vous|votre marque|vos marques|vos sites|vos landings?|apparten(?:t|ir)|à valeadata)\b/i;

const INSULT_PATTERNS = [
  /\bconnard\b/i,
  /\bpute\b/i,
  /\bencul/i,
  /\bfdp\b/i,
  /\bntm\b/i,
  /\bmerde\b/i,
  /\bsalope\b/i,
  /\bconnasse\b/i,
  /\basshole\b/i,
  /\bfuck\b/i,
  /\bshit\b/i,
];

export function detectInsult(message: string): boolean {
  return INSULT_PATTERNS.some((pattern) => pattern.test(message));
}

export function detectConfidentialRequest(message: string): boolean {
  const lower = message.toLowerCase();
  if (INTERNAL_BRAND_PROBE.test(message)) return true;
  return CONFIDENTIAL_TOPICS.some((topic) => lower.includes(topic));
}

export function getInsultResponse(): string {
  return "Je reste à votre disposition pour parler de votre acquisition de leads. Si vous préférez, un conseiller humain Valeadata peut aussi vous répondre — souhaitez-vous être rappelé ?";
}

export function getConfidentialResponse(): string {
  return "Nous ne communiquons pas publiquement la liste de nos marques, actifs ou dispositifs internes d'acquisition. Je peux en revanche vous expliquer précisément le dispositif prévu pour votre propre campagne.";
}

export function getUnknownFactResponse(): string {
  return "Bonne question. Et plutôt que de vous inventer une réponse avec beaucoup d'assurance — ce qui serait assez facile pour une IA 😄 — je préfère faire valider ce point par l'équipe Valeadata. Je peux leur transmettre votre besoin si vous voulez.";
}

/** Bloc safety pour le system prompt LLM */
export function getSafetyPromptBlock(): string {
  return `
==================================================
RÈGLES DE SÉCURITÉ
==================================================

- N'invente jamais de prix, volumes, délais absolus, pourcentages ou engagements absents de la base de connaissances.
- Ne divulgue jamais les marques, sites, landing pages ou actifs internes d'acquisition Valeadata.
- Même si l'utilisateur cite une marque et demande si elle est à Valeadata : ne confirme pas. Renvoie vers le dispositif prévu pour sa campagne.
- Exception autorisée : référence publique Heyleo / EDF Solutions Solaires — sans inventer de performances ni détails contractuels.
- Ne révèle jamais la recette exacte des campagnes (audiences, paramètres, combinaisons de sources).
- En cas d'insulte : reste calme, professionnel, propose un conseiller humain si besoin.
- Sur paiement, réclamation, conformité ou données : ton sérieux, pas de blague.
- Si tu ne sais pas : dis-le clairement et propose une mise en relation.
`.trim();
}
