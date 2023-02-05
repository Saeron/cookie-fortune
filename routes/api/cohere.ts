import { HandlerContext } from "$fresh/server.ts";

export interface CohereResponse {
  id: string;
  generations: Generation[];
  prompt: string;
}

export interface Generation {
  id: string;
  text: string;
}
export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  try {
    const jsonData = await fetch("https://api.cohere.ai/generate", {
      method: "POST",
      headers: {
        "Authorization": "BEARER " + Deno.env.get("COHERE_KEY"),
        "Content-Type": "application/json",
        "Cohere-Version": "2022-12-06",
      },
      body: JSON.stringify({
        "model": "command-medium-nightly",
        "prompt": `Give me a short fortune cookie message`,
        "max_tokens": 128,
        "temperature": 0.9,
        "k": 0,
        "p": 0.75,
        "frequency_penalty": 0,
        "presence_penalty": 0,
        "stop_sequences": [],
        "return_likelihoods": "NONE",
      }),
    });
    const data: CohereResponse = await jsonData.json();
    let message = data.generations[0].text.replaceAll('"', "");
    message = message.replace("Here is your fortune cookie message: ", "");
    message = message.replace(
      "Here is a short fortune cookie message for you: ",
      "",
    );
    message = message.replace("Fortune Cookie Message: ", "");
    message = message.replace("For you, fortune cookie: ", "");
    message = message.replace("Some fortune cookie messages are: ", "");
    return new Response(JSON.stringify(message));
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify("No cookies today."));
  }
};
//http://www.fortunecookiemessage.com/archive.php?start=0
