import { extractLeadHintsFromMessage } from "./qualification-rules";
import type { ConversationState, LeadFields, QualificationField } from "./types";

/**
 * Mémoire de conversation : infos déjà collectées pour ne pas les redemander.
 */

export function createInitialConversationState(): ConversationState {
  return {
    lead: {},
    collectedFields: [],
    phase: "greeting",
    flags: {
      insultDetected: false,
      refusedConfidential: false,
      askedForHuman: false,
    },
  };
}

export function mergeLeadFields(
  current: LeadFields,
  incoming: Partial<LeadFields>,
): { lead: LeadFields; newlyCollected: QualificationField[] } {
  const lead: LeadFields = { ...current };
  const newlyCollected: QualificationField[] = [];

  (Object.keys(incoming) as QualificationField[]).forEach((field) => {
    const value = incoming[field];
    if (!value || !String(value).trim()) return;
    if (lead[field] && String(lead[field]).trim()) return;
    lead[field] = String(value).trim();
    newlyCollected.push(field);
  });

  return { lead, newlyCollected };
}

export function applyMessageToState(
  state: ConversationState,
  userMessage: string,
): ConversationState {
  const hints = extractLeadHintsFromMessage(userMessage);
  const { lead, newlyCollected } = mergeLeadFields(state.lead, hints);

  const collectedFields = Array.from(
    new Set([...state.collectedFields, ...newlyCollected]),
  );

  let phase = state.phase;
  if (phase === "greeting") phase = "discovery";
  if (collectedFields.length >= 2) phase = "qualification";

  const lower = userMessage.toLowerCase();
  const askedForHuman =
    state.flags.askedForHuman ||
    /conseiller|humain|rappeler|rendez-vous|rdv|appeler/.test(lower);

  return {
    ...state,
    lead,
    collectedFields,
    phase,
    flags: {
      ...state.flags,
      askedForHuman,
    },
  };
}

export function markFieldAsked(
  state: ConversationState,
  field: QualificationField,
): ConversationState {
  return { ...state, lastAskedField: field };
}

export function summarizeKnownLead(lead: LeadFields): string {
  const entries = (Object.entries(lead) as [QualificationField, string][])
    .filter(([, value]) => Boolean(value?.trim()))
    .map(([key, value]) => `${key}: ${value}`);

  return entries.length ? entries.join(" | ") : "aucune info lead collectée";
}
