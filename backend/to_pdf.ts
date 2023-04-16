import { jsPDF } from "jspdf";
import { IStory } from "./Models/Story";

export const toPDF = (story: IStory) => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.setFont("roboto");
    let y = 10;

    doc.text("Characters:\n", 10, y);
    y += 12;
    doc.text(story.storyCharacters.join(", "), 10, y);
    y += 12;
    doc.text("Outline:\n", 10, y);
    y += 12;
    doc.text(story.storyOutline.join("\n"), 10, y);
    y += 12;
    doc.text("Story:\n", 10, y);
    y += 12;
    doc.text(story.storyText, 10, y);
    y += 12;
    
    // save pdf
    doc.save(`${story._id}.pdf`);
};

