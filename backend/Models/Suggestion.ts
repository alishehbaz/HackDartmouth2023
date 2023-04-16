import { Schema } from "mongoose";
import { ICharacter } from "./Character";

export interface ISuggestion {
  _id: string;
  suggestionDesc: string;
  promptId: string;
  characters: ICharacter[];
  outlineDesc: string;
}

export const suggestionSchema = new Schema<ISuggestion>({
  _id: { type: String, required: true },
  suggestionDesc: { type: String, required: true },
  promptId: { type: String, required: true },
  characters: { type: [Object], required: true },
  outlineDesc: { type: String, required: true },
});
