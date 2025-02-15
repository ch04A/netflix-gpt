// import OpenAI from "openai";
// import { OPENAI_KEY } from "./constants";
// const openAI = new OpenAI({
//   apiKey: OPENAI_KEY,
//   dangerouslyAllowBrowser: true,
//   // defaults to process.env["OPENAI_API_KEY"]
// });

// export default openAI;

import Groq from "groq-sdk";
const GROQ_API_KEY = "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";

export const groq = new Groq({
  apiKey: GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});
