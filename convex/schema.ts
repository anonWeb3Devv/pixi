import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  scores: defineTable({
    score: v.number(),
    name: v.string(),
  })
    .index("by_score", ["score"])
    .index("by_name", ["name"]),
});
