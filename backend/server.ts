import express from "express";
import { connectToMongo } from "./db";
import { Configuration, OpenAIApi } from "openai";
import * as fs from "fs";
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
  const file_prompt = fs.readFileSync("system_prompt.txt", "utf8");
  //console.log(file_prompt);
  const keywords_prompt =
    "Give me a names of three fruits, just words, separated by commas";

  const keywords_prompt_response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: keywords_prompt }],
    max_tokens: 350,
    temperature: 0,
  });

  //console.log(keywords_prompt_response.data.choices[0].message.content.trim());
  const keywords_prompt_response_json =
    keywords_prompt_response.data.choices[0].message.content;

  // response text in the form of json
  console.log(keywords_prompt_response_json);

  res.send(keywords_prompt_response_json);
});

app.listen(port, () => {
  connectToMongo().catch((err) => console.log(err));
  return console.log(`Express is listening at http://localhost:${port}`);
});
