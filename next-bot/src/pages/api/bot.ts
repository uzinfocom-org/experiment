import { Bot, Context, webhookCallback } from "grammy";
import type { NextApiRequest, NextApiResponse } from "next";
import functions from "@/functions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Initialize a bot instance
  const bot = new Bot(process.env.TOKEN || "");
  console.log("Initialized instance successfully");

  // Append all middlewares to bot
  await functions(bot);
  console.log("Appended functions successfully");

  // Create a request handler
  const handle = webhookCallback(bot, "next-js");
  console.log("Created handler successfully");

  // Return the handler to Vercel api
  return await handle(req, res);
}
