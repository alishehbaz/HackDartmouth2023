import promptSync from 'prompt-sync';
import axios from 'axios';

// Set up prompt and API endpoint URL
const prompt = promptSync();
const apiUrl = 'http://localhost:3000/ideas';

// Define function to get ideas from server
async function getIdeas(message: string): Promise<string[]> {
  const response = await axios.post(apiUrl, { content: message });
  return response.data.ideas;
}

// Define main function to prompt user for input and display ideas
async function main() {
  let message = prompt('Enter a message: ');
  while (message !== 'exit') {
    const ideas = await getIdeas(message);
    console.log('Generated ideas:');
    ideas.forEach((idea, index) => {
      console.log(`${index + 1}. ${idea}`);
    });
    const choice = prompt('Choose an idea to start from (1-3), or enter a new message: ');
    if (choice === '1' || choice === '2' || choice === '3') {
      message = ideas[parseInt(choice) - 1];
    } else {
      message = choice;
    }
  }
  console.log('Exiting...');
}

// Call main function
main();
