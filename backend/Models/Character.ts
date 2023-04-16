import { Schema } from "mongoose";

export interface ICharacter {
  charId: string;
  name: string;
  nickname: string;
  socialGroup: string;
  relationships: string;
  mbtiType: string;
  firstAppearanceChar: string;
}

export const characterSchema = new Schema<ICharacter>({
  charId: { type: String, required: true },
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  socialGroup: { type: String, required: true },
  relationships: { type: String, required: true },
  mbtiType: { type: String, required: true },
  firstAppearanceChar: { type: String },
});
