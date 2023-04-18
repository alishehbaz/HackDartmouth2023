import { Schema } from "mongoose";
import { boolean } from "webidl-conversions";

export interface IPrompt {
  _id: string;
  promptKeywords: string[];
  promptTitle: string;
  promptDesc: string;
  customUserPrompt: string;
}

export const promptSchema = new Schema<IPrompt>({
  _id: { type: String, required: true },
  promptKeywords: { type: [String], required: true },
  promptTitle: { type: String, required: true },
  promptDesc: { type: String, required: true },
  customUserPrompt: { type: String, required: true },
});
