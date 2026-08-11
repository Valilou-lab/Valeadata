import type { ConversationState, LeadFields, QualificationField } from "./types";

/**
 * Collecte progressive — ordre Valeadata.
 * Leo discute naturellement : une question à la fois, jamais un formulaire.
 */

export const QUALIFICATION_ORDER: QualificationField[] = [
  "prenom",
  "email",
  "societe",
  "nom",
  "telephone",
  "verticale",
  "besoin",
  "volume",
  "zone",
];

export const FIELD_LABELS: Record<QualificationField, string> = {
  prenom: "prénom",
  nom: "nom",
  email: "email professionnel",
  telephone: "téléphone",
  societe: "société",
  verticale: "verticale",
  volume: "volume envisagé",
  zone: "zone géographique",
  besoin: "besoin",
};

/** Questions conversationnelles (pas de formulaire) */
export const FIELD_QUESTIONS: Record<QualificationField, string> = {
  prenom: "Très clair. Je peux faire passer le besoin à l'équipe. Comment vous appelez-vous ?",
  nom: "Et votre nom de famille ?",
  email:
    "Merci. Quelle adresse professionnelle peut-on utiliser pour vous envoyer les informations ?",
  telephone: "Souhaitez-vous être rappelé ? Si oui, quel numéro est le plus simple ?",
  societe: "Vous travaillez pour quelle société ?",
  verticale:
    "Vous souhaitez tester quelle verticale — mutuelle, assurance, solaire, rénovation, énergie, télécom, eau/osmoseur, automobile… ?",
  volume:
    "Quel volume envisagez-vous pour un premier test ? (pas de minimum universel — on l'adaptera à votre verticale)",
  zone: "Vous cherchez plutôt une campagne nationale, ou certaines zones / codes postaux ?",
  besoin: "En une phrase, quel est le besoin principal à couvrir ?",
};

export function getMissingFields(lead: LeadFields): QualificationField[] {
  return QUALIFICATION_ORDER.filter((field) => {
    const value = lead[field];
    return !value || !String(value).trim();
  });
}

export function getNextFieldToAsk(
  state: ConversationState,
): QualificationField | null {
  const missing = getMissingFields(state.lead);
  return missing[0] ?? null;
}

export function buildQualificationQuestion(
  field: QualificationField,
): string {
  return FIELD_QUESTIONS[field];
}

/**
 * Heuristiques légères pour extraire des infos d'un message libre.
 * Remplacées / enrichies plus tard par le LLM + structured output.
 */
export function extractLeadHintsFromMessage(
  message: string,
): Partial<LeadFields> {
  const hints: Partial<LeadFields> = {};
  const text = message.trim();

  const emailMatch = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  if (emailMatch) hints.email = emailMatch[0];

  const phoneMatch = text.match(
    /(?:\+?\d{1,3}[\s.-]?)?(?:\(?\d{2,3}\)?[\s.-]?)?\d{2,3}[\s.-]?\d{2,3}[\s.-]?\d{2,3}/,
  );
  if (phoneMatch && phoneMatch[0].replace(/\D/g, "").length >= 9) {
    hints.telephone = phoneMatch[0].trim();
  }

  const lower = text.toLowerCase();
  if (/mutuelle/.test(lower)) {
    hints.verticale = "Mutuelle santé";
  } else if (/assurance/.test(lower)) {
    hints.verticale = "Assurance";
  } else if (/solaire|photovolta|pv\b/.test(lower)) {
    hints.verticale = "Solaire / photovoltaïque";
  } else if (/rénov|renov|isolation|pompe à chaleur|pac\b/.test(lower)) {
    hints.verticale = "Rénovation";
  } else if (/énergie|energie|électricité|electricite|gaz/.test(lower)) {
    hints.verticale = "Énergie";
  } else if (/télécom|telecom|fibre|box/.test(lower)) {
    hints.verticale = "Télécom";
  } else if (/eau|osmoseur/.test(lower)) {
    hints.verticale = "Eau / osmoseur";
  } else if (/auto|voiture|test drive|essai/.test(lower)) {
    hints.verticale = "Automobile / Test Drive";
  }

  return hints;
}

export function isLeadReadyForHandoff(lead: LeadFields): boolean {
  return Boolean(
    lead.prenom &&
      lead.email &&
      (lead.verticale || lead.besoin),
  );
}
