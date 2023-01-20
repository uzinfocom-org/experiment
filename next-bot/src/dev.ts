#!/usr/bin/env node

import { Bot, Context, webhookCallback } from "grammy";
import functions from "@/functions";

(async () => {
  // Initialize a bot instance
  const bot = new Bot(process.env.TOKEN || "");
  console.log("Initialized instance successfully");

  // Append all middlewares to bot
  await functions(bot);
  console.log("Appended functions successfully");

  // Start the bot on polling mode
  await bot.start();
})();
