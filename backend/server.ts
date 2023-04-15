import express from "express";
import { connectToMongo } from "./db";
import { Configuration, OpenAIApi } from "openai";
const app = express();
const port = 3000;

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
