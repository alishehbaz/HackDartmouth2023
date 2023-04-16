import { Schema } from "mongoose";
import { ICharacter } from "./Character";
export interface IStory {
  _id: string;
  storyCharacters: ICharacter[];
  storyText: string;
  storyOutline: string[];
}

export const storySchema = new Schema<IStory>({
  _id: { type: String, required: true },
  storyCharacters: { type: [Object], required: true },
  storyText: { type: String, required: true },
  storyOutline: { type: [String], required: true },
});
