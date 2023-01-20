import { Bot } from "grammy";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Initialize a bot instance
  const bot: Bot = new Bot(process.env.TOKEN || "");
  console.log("Initialized instance successfully");

  // Create an address string containing the location
  const address: string = "https://bot.katsuki.moe/api/bot";

  // Try to set up webhook address
  try {
    await bot.api.setWebhook(address);
    res.status(200).json({ status: "Done. Set!" });
  } catch (_) {
    res
      .status(500)
      .json({ status: "Couldn't succeed with installing webhook!" });
  }
}
