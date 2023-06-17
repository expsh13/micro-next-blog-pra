// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "next-blog-api",
  apiKey: process.env.API_KEY,
});
