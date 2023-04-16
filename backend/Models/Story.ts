import { Schema } from "mongoose";

export interface IStory {
  storyID: string;
  storyCharacters: string[];
  storyText: string;
  storyOutline: string[];
}

export const storySchema = new Schema<IStory>({
  storyID: { type: String, required: true },
  storyCharacters: { type: [String], required: true },
  storyText: { type: String, required: true },
  storyOutline: { type: [String], required: true },
});
