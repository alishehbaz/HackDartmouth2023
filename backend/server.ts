import express from "express";
import { connectToMongo } from "./db";
import { Configuration, OpenAIApi } from "openai";
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hackDartmouth 2023");
});

function setupOpenAIConfig() {
  const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  return new OpenAIApi(configuration);
}

app.post("/generate_initial_prompts", async (req, res) => {
  const word_list = req.body;

  const openai = setupOpenAIConfig();
  const keywords_prompt =
    "Give me a names of three fruits, just words, separated by commas";

  const keywords_prompt_response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: keywords_prompt }],
    max_tokens: 150,
    temperature: 0,
  });

  const keywords_prompt_response_str =
    keywords_prompt_response.data.choices[0].message.content.trim();

  console.log(keywords_prompt_response_str);

  const keywords_prompt_response_list = keywords_prompt_response_str.split(",");

  console.log(keywords_prompt_response_list);

  res.send("hackDartmouth 2023");
});

app.listen(port, () => {
  connectToMongo().catch((err) => console.log(err));
  return console.log(`Express is listening at http://localhost:${port}`);
});
