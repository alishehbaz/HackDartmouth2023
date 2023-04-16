import { Schema } from "mongoose";

export interface IOutline {
  _id: string;
  outlineDesc: String[];
  suggestionId: string;
}

export const outlineSchema = new Schema<IOutline>({
  _id: { type: String, required: true },
  outlineDesc: { type: [String], required: true },
  suggestionId: { type: String, required: true },
});
