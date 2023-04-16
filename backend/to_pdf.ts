import { jsPDF } from "jspdf";
import { IStory } from "./Models/Story";


function jsonToPdf(jsonStr: string): void {
  const stories: IStory[] = JSON.parse(jsonStr);
  const doc = new jsPDF();
  let y = 10;

  stories.forEach((story) => {
    // doc.setFontSize(12);
    // doc.text(20, y, `ID: ${story._id}`);
    // y += 10;
    doc.setFontSize(16);
    doc.text(20, y, `Characters: ${story.storyCharacters.join(", ")}`);
    y += 10;
    doc.setFontSize(20);
    doc.text(20, y, `Text: ${story.storyText}`);
    y += 20;
    doc.setFontSize(12);
    doc.text(20, y, `Outline: ${story.storyOutline.join(", ")}`);
    y += 20;
  });

  doc.save("stories.pdf");
}

const jsonStr = `[
  {
    "_id": "1",
    "storyCharacters": ["Alice", "Bob"],
    "storyText": "Once upon a time...",
    "storyOutline": ["Introduction", "Conflict", "Resolution"]
  },
  {
    "_id": "2",
    "storyCharacters": ["Charlie", "David"],
    "storyText": "In a faraway land...",
    "storyOutline": ["Exposition", "Rising Action", "Climax", "Falling Action"]
  }
]`;

jsonToPdf(jsonStr);
