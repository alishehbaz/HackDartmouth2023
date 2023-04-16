import { Schema } from "mongoose";
import { boolean } from "webidl-conversions";

export interface IPrompt {
  promptId: string;
  promptKeywords: string;
  promptTitle: string;
  promptDesc: string;
  customUserPrompt: string;
}

export const promptSchema = new Schema<IPrompt>({
  promptId: { type: String, required: true },
  promptKeywords: { type: String, required: true },
  promptTitle: { type: String, required: true },
  promptDesc: { type: String, required: true },
  customUserPrompt: { type: String, required: true },
});
