import { Schema } from "mongoose";

export interface ICharacter {
  _id: string;
  promptId: string;
  belief: string;
  name: string;
  socialGroup: string;
  r1: string;
  r2: string;
  mbtiType: string;
  firstAppearanceChar: number;
  customUserCharacter: string;
}

export const characterSchema = new Schema<ICharacter>({
  _id: { type: String, required: true },
  promptId: { type: String, required: true },
  name: { type: String, required: true },
  belief: { type: String, required: true },
  socialGroup: { type: String, required: true },
  r1: { type: String, required: true },
  r2: { type: String, required: true },
  mbtiType: { type: String, required: true },
  customUserCharacter: { type: String, required: true },
  firstAppearanceChar: { type: Number },
});
