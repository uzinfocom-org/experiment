import { Composer, Context, InlineKeyboard } from "grammy";

const composer = new Composer();

export const message: string =
  `<b>Welcome to my assistant bot!</b> \n` +
  `\n` +
  `This bot helps me to maintain some issues. ` +
  `Also, this bot will serve for me as a shortcut and automation.`;

export const keyboard = new InlineKeyboard()
  .url("✍🏻 Blog", "https://t.me/yurionblog")
  .url("🌐 Website", "https://katsuki.moe");

composer.command("start", async (ctx: Context): Promise<void> => {
  await ctx.reply(message, {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
});

export default composer;
