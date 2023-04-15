import express from 'express';
import bodyParser from 'body-parser';
import { Configuration, OpenAIApi } from 'openai';

interface Request {
  method: string;
  path: string;
  headers: Record<string, string>;
  query: Record<string, string>;
  body: Record<string, any>;
  response: string;
}

const app = express();
app.use(bodyParser.json());

// Set up OpenAI API configuration
const OPENAI_API_KEY = '<your API key here>';
const openaiConfig = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(openaiConfig);

app.all('*', async (req, res) => {
  const request: Request = {
    method: req.method,
    path: req.path,
    headers: req.headers,
    query: req.query,
    body: req.body,
    response: '',
  };

  try {
    // Call OpenAI API to generate response based on request
    const prompt = `Received ${req.method} request to ${req.path}. Request body: ${JSON.stringify(
      req.body,
    )}.`;
    const response = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt,
      maxTokens: 50,
      temperature: 0.5,
    });

    request.response = response.data.choices[0].text;
    res.json(request);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating response');
  }

  console.log(request);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
