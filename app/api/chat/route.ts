import {
  openaiChatProvider,
  processUserMessage,
  setChatModelProvider,
  type ChatMessage,
  type ConversationState,
} from "@/lib/chatbot";

export const runtime = "nodejs";

setChatModelProvider(openaiChatProvider);

type ChatRequestBody = {
  message?: string;
  history?: ChatMessage[];
  state?: ConversationState;
};

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      {
        error:
          "IA non configurée : ajoutez OPENAI_API_KEY dans .env.local puis relancez le serveur.",
      },
      { status: 503 },
    );
  }

  let body: ChatRequestBody;
  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return Response.json({ error: "Requête invalide" }, { status: 400 });
  }

  const message = body.message?.trim() ?? "";
  if (!message) {
    return Response.json({ error: "Message vide" }, { status: 400 });
  }

  if (!body.state || !Array.isArray(body.history)) {
    return Response.json({ error: "Contexte manquant" }, { status: 400 });
  }

  try {
    const reply = await processUserMessage(message, {
      history: body.history,
      state: body.state,
    });

    return Response.json(reply);
  } catch (error) {
    const detail =
      error instanceof Error ? error.message : "Erreur IA inconnue";
    console.error("[api/chat]", detail);
    return Response.json(
      {
        error:
          "Leo n'a pas pu répondre pour le moment. Réessayez dans un instant.",
      },
      { status: 502 },
    );
  }
}
