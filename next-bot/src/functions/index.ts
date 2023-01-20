import { Bot } from "grammy";
import start from "@/functions/start";
import help from "@/functions/help";

export default async (bot: Bot) => {
  await bot.use(start);
  await bot.use(help);
};
