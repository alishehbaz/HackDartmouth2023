import express from "express";
import cors from "cors";
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
app.use(cors());

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

app.get("/characters", async (req, res) => {
  const Character = model<ICharacter>("Character", characterSchema);
  const response = await Character.find({}).distinct("_id").exec();
  console.log(response);

  let charObjectList = [];

  for (const c_id of response) {
    const cid_response = await Character.findOne({
      _id: c_id,
    }).exec();

    charObjectList.push(cid_response);
  }

  res.json(charObjectList);
});

app.post("/generate_suggestions", async (req, res) => {
  console.log("Generating suggestions based on the prompt");
  const openai = setupOpenAIConfig();

  const Character = model<ICharacter>("Character", characterSchema);

  let prompt_object = req.body.prompt_object;

  prompt_object = {
    _id: "d6c67c34-85e8-41c3-9101-df512a0b9a27",
    promptKeywords: ["fire", "love", "power"],
    promptTitle: "The Flame of Love",
    promptDesc:
      "A young woman discovers she has the power to control fire, but struggles to keep it under control. When she meets a man who ignites a passion within her, she must learn to balance her newfound abilities with her desire for love.",
    customUserPrompt: "false",
    __v: 0,
  };

  const { _id, promptKeywords, promptTitle, promptDesc, customUserPrompt } =
    prompt_object;

  const file_prompt =
    fs.readFileSync("system_prompt.txt", "utf8") +
    " " +
    promptKeywords.join(" ");

  // console.log(file_prompt);

  let file_prompt_character = fs.readFileSync("character_prompt.txt", "utf8");

  file_prompt_character =
    file_prompt_character + promptTitle + "\n" + promptDesc;

  //console.log(file_prompt_suggestion);

  const suggestion_prompt_response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: file_prompt_character }],
    max_tokens: 350,
    temperature: 0,
  });

  const character_prompt_response_parsed =
    suggestion_prompt_response.data.choices[0].message.content;

  let response_list = character_prompt_response_parsed.trim().split("\n");

  response_list = response_list.filter(Boolean);

  const char_obj_list = [];

  console.log(response_list);

  for (let index in response_list) {
    if (parseInt(index) % 7 == 1) {
      let social_group = response_list[index];
      social_group = social_group.split(":")[1];
      let name =
        parseInt(index) > 0 ? response_list[parseInt(index) - 1] : null;
      name = name.split(":")[1];
      let belief =
        parseInt(index) > 0 ? response_list[parseInt(index) + 1] : null;
      belief = belief.split(":")[1];
      let mbti =
        parseInt(index) > 0 ? response_list[parseInt(index) + 2] : null;
      mbti = mbti.split(":")[1];
      const r1 =
        parseInt(index) > 0 ? response_list[parseInt(index) + 4] : null;
      const r2 =
        parseInt(index) > 0 ? response_list[parseInt(index) + 5] : null;
      const charId = uuidv4();
      const char_obj = {
        _id: charId,
        promptId: _id,
        name: name,
        socialGroup: social_group,
        r1: r1,
        r2: r2,
        belief: belief,
        firstAppearanceChar: 0,
        mbtiType: mbti,
        customUserCharacter: "false",
      };
      char_obj_list.push(char_obj);
      console.log("prompt object saved in db");
      let char_obj_db = new Character(char_obj, { collection: "characters" });
      char_obj_db.save();
      console.log("chars object saved in db");
    }
  }

  res.json({ characters: char_obj_list });
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
