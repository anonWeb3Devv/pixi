import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("scores")
      .withIndex("by_score")
      .order("desc")
      .take(10);
  },
});

export const add = mutation({
  args: {
    score: v.number(),
  },
  handler: async (ctx, args) => {
    const { score } = args;

    const existing = await ctx.db
      .query("scores")
      .filter((q) => q.eq(q.field("score"), score))
      .unique();

    if (existing) {
      return { score: existing.score };
    }

    await ctx.db.insert("scores", { score });
    return { score };
  },
});
