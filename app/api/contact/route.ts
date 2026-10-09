import { Resend } from "resend";
import { contactRequests, isContactRequest, type ContactRequest } from "@/lib/contact";

export const runtime = "nodejs";

type ContactBody = {
  nom?: string;
  email?: string;
  entreprise?: string;
  demande?: string;
  projet?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (clean(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const nom = clean(body.nom, 120);
  const email = clean(body.email, 160);
  const entreprise = clean(body.entreprise, 160);
  const projet = clean(body.projet, 2000);
  const demande = isContactRequest(body.demande) ? body.demande : null;

  if (!nom || !emailPattern.test(email) || !entreprise || !demande) {
    return Response.json(
      { error: "Merci de vérifier les champs obligatoires." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? "contact@valeadata.com";

  if (!apiKey || !from) {
    console.error("[contact] RESEND_API_KEY ou CONTACT_FROM_EMAIL manquant");
    return Response.json(
      {
        error:
          "L'envoi n'est pas disponible pour le moment. Écrivez-nous à contact@valeadata.com.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const subject = `Contact VALEADATA — ${contactRequests[demande as ContactRequest]}`;
  const text = [
    "Nouvelle demande depuis valeadata.com",
    "",
    `Nom : ${nom}`,
    `Email : ${email}`,
    `Entreprise : ${entreprise}`,
    `Recherche : ${contactRequests[demande as ContactRequest]}`,
    "",
    "Projet :",
    projet || "—",
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    console.error("[contact] envoi refusé", error);
    return Response.json(
      {
        error:
          "L'envoi n'a pas abouti. Réessayez dans un instant, ou écrivez-nous à contact@valeadata.com.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
