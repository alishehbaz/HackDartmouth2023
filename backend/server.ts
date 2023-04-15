import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import axios from 'axios';

// Set up server and middleware
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

  // Send ideas back to client
  res.json({ ideas });
});

// Start server listening on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
