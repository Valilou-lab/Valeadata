export const contactRequests = {
  accompagnement: "Un accompagnement complet pour développer mon acquisition",
  leads: "L'achat de leads qualifiés",
} as const;

export type ContactRequest = keyof typeof contactRequests;

export function isContactRequest(value: unknown): value is ContactRequest {
  return value === "accompagnement" || value === "leads";
}
