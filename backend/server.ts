import express from "express";
import { connectToMongo } from "./db";
import { Schema, model, connect, Collection } from "mongoose";
import { Configuration, OpenAIApi } from "openai";
import * as fs from "fs";
import * as hf from "huggingface-api";
import fetch from "node-fetch";
import { promptSchema, IPrompt } from "./Models/Prompt";
import { v4 as uuidv4 } from "uuid";
import { characterSchema, ICharacter } from "./Models/Character";
import { storySchema, IStory } from "./Models/Story";
import { type } from "os";

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //getMidJourneyPicture();
  //query("cricket");
  res.send("hackDartmouth 2023");
});

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/prompthero/openjourney",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  //console.log(result.arrayBuffer());
  return result;
}

function setupOpenAIConfig(): OpenAIApi {
  const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  return new OpenAIApi(configuration);
}

async function getMidJourneyPicture() {
  hf.request({
    text: "My name is Jeff and",
    model: "prompthero/openjourney",
    api_key: "api_hf_lWsaPJsaDESATvSUpkEzencRgSvxIxvJUN",
    return_type: "STRING",
  })
    .then((data) => {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

app.get("/stories", async (req, res) => {
  const openai = setupOpenAIConfig();
});

app.get("/prompts", async (req, res) => {
  const Prompt = model<IPrompt>("prompts", promptSchema);
  const response = await Prompt.find({}).distinct("_id").exec();
  console.log(response);

  let promptObjectList = [];

  for (const p_id of response) {
    const pid_response = await Prompt.findOne({
      _id: p_id,
    }).exec();

    promptObjectList.push(pid_response);
  }

  res.json(promptObjectList);
});

app.post("/generate_suggestions", async (req, res) => {
  const openai = setupOpenAIConfig();
});

app.post("/generate_initial_prompts", async (req, res) => {
  const Prompt = model<IPrompt>("Prompt", promptSchema);

  let word_list = req.body.word_list;

  word_list = ["fire", "love", "power"];
  const openai = setupOpenAIConfig();
  const file_prompt =
    fs.readFileSync("system_prompt.txt", "utf8") + " " + word_list.join(" ");

  const keywords_prompt_response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: file_prompt }],
    max_tokens: 350,
    temperature: 0,
  });

  const keywords_prompt_response_parsed =
    keywords_prompt_response.data.choices[0].message.content;

  // response text in the form of json
  let response_list = keywords_prompt_response_parsed.trim().split("\n");

  response_list = response_list.filter(Boolean);

  const prompt_obj_list = [];

  for (let index in response_list) {
    if (response_list[index] != "") {
      console.log(`Empty index: ${response_list[index]}`);
    }
  }

  for (let index in response_list) {
    if (parseInt(index) % 2 == 1) {
      const desc = response_list[index];
      const title =
        parseInt(index) > 0 ? response_list[parseInt(index) - 1] : null;
      const promptID = uuidv4();
      const prompt_obj = {
        _id: promptID,
        promptKeywords: word_list,
        promptTitle: title,
        promptDesc: desc,
        customUserPrompt: "false",
      };
      prompt_obj_list.push(prompt_obj);
      let prompts_obj_db = new Prompt(prompt_obj, { collection: "prompts" });
      prompts_obj_db.save();
      console.log("prompt object saved in db");
    }
  }

  res.json({
    items: prompt_obj_list,
  });
});

app.listen(port, () => {
  connectToMongo().catch((err) => console.log(err));
  return console.log(`Express is listening at http://localhost:${port}`);
});
