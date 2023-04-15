import express from "express";
import { connectToMongo } from "./db";
import { Configuration, OpenAIApi } from "openai";

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB database');
});

// Define message schema
const messageSchema = new mongoose.Schema({
  content: String,
});
const Message = mongoose.model('Message', messageSchema);

// Define API endpoint to generate ideas
app.post('/ideas', async (req, res) => {
  // Get message content from request body
  const { content } = req.body;

  // Save message to database
  const message = new Message({ content });
  await message.save();

  // Call OpenAI API to generate ideas
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
    prompt: content,
    max_tokens: 128,
    n: 3,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });
  const ideas = response.data.choices.map((choice: any) => choice.text);

app.get("/", (req, res) => {
  res.send("hackDartmouth 2023");
});

app.get("/autocomplete-keywords", async (req, res) => {
  const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const prompt = "Give me a names of three fruits";

  const response_tof = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 150,
    temperature: 0,
  });

  console.log(response_tof.data.choices[0].message.content.trim());

  res.send("hackDartmouth 2023");
});

app.listen(port, () => {
  connectToMongo().catch((err) => console.log(err));
  return console.log(`Express is listening at http://localhost:${port}`);
});
