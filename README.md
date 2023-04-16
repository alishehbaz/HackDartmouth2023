<!-- # HackDartmouth2023 -->
<!-- ## Elevator Pitch
Writing stories with increasing efficiency without limiting creativity. This AI-powered project lowers the threshold for completing outlines, story settings, and refining their overall style and tone. -->
>**Unleash your creativity with AI-powered efficiency.**

## Problem Statement
Stories are intriguing, but many interesting stories nipped in the bud. Although writers practice their writing skills, outlining and consisting stories still intimidating. World creation, character settings, and storylines can be overwhelming and time-consuming, often hindering writers from completing their stories. 

## Inspiration
This project idea was contributed by Jing Gao, who is currently writing a long fantasy novel. Fantasy novels typically feature new world settings, but despite trying various writing and organizing tools, she still found herself feeling inconvenienced. As the story grows in length, the author may easily forget the initial settings or foreshadowing. Moreover, they may come up with new ideas during the writing process, which can be challenging to edit or integrate with the previous work. All of these factors can contribute to losing readers' attention and become critical obstacles, especially for beginners.

Therefore, a saga idea was born.

## Project Description
Project Saga is an AI-powered story-writing assistant. Comparing to current Artificial Intelligence story writing AI tools (e.g. [Jasper](https://www.jasper.ai/)), Saga minimizes the potential creativity restriction by AI. The writer's personal writing style is one of the criteria for the book, so Saga won't help writers write stories directly. Instead, Saga aims to lower the threshold of writing and support writers to overcome writing obstacles themselves:

---
**Scene one** - Users only have vague ideas

Solution: Input keywords, core theme or sentences, and let AI generate brainstorming ideas.

---
**Scene two** - Users are having trouble with the characters' setting

Solution: Based on the idea/outline provided by users, AI help to generate/attract characters and list them for users to modify. Characters' attributes include name, beliefs, social standing (if applicable), personality, etc. Personality could be based on the *Myers–Briggs Type Indicator (MBTI) type that the users can start on. 

\*Myers–Briggs Type Indicator (MBTI): Introspective self-report questionnaire indicating differing psychological preferences, which has a total of 16 preferences type in 4 dimensions.

---
**Scene three** - Users are uncertain about the characters setting, having trouble naming

Solution: Users can edit the stored character list of anything during the writing process. If the user changes the name of one character, this character's name that has appeared in the existing text will be replaced with the new name.
Beyond this function, users can use auto-name completion while they type the recorded character's name (or any object name in future features) to speed up their typing speed. Users will be benefited especially when the name string is long or in a multi-lingual environment.


---
**Scene four** - Users finished one chapter, but are unsure if their texts are off-topic (deviate from the outline)

Solution: AI-empowered proofread. AI will summarize paragraphs the users have written. Users will then be able to compare with the summary of their current text and target content (the outline).

---

## What it does - The process/workflow
Compared to letting AI write stories directly, Saga focuses more on structural building. While users input their ideas in the window, AI helps the user to store and update character settings. Users can edit the outline including the storylines, world lines, every single character's stories, etc. This will not cause copyright problems because users will write stories themselves eventually.

### Brainstorming
There are two ways of starting from the vague idea:
- By keywords/core theme
- By a few sentences

When users are in the brainstorming process, quantity weighs comparatively more than quality. It is important to make brainstorming easy to operate, so users can either enter a few words or sentences to start. AI will then provide them with ideas, users can either choose to continue from the generated ideas, customize their own ideas, or re-generate ideas from other prompts. If users already have clear ideas in mind, they also have the option to choose to start creating the storylines directly.

### Character settings
- Basic information (name, age, etc.)
- Appearance
- Beliefs/Stances
- Social status
- Personality (Based on MBTI)
- Relationships with other characters

While creating a character, there is also a unique ID generated for the character. This ID won't appear on the interface, but it is for further operations.
### Writing Process
- Outlining
- Auto name-completion
- Modify the name after finishing the story (find & replace throughout the whole story)
- Text generation (AI-empowered)
- Statistics (counts of characters' appearance time, first appearance, etc.)
- Quick jump by clicking on the character's name

### After finishing the story
- Proofreading
  - Summarize the body text (AI-powered)
  - Compare the summary with the outline
- Publish

When users finish the story, proofreading is the next step. AI will summarize the body text, and users can compare the summary with the outline.

After refining the story, users can publish their stories on Saga or other potential platforms, which will allow other users to read their stories. Users can also share their stories on other social media platforms.

## How we built it
React, Node.js, MongoDB, Typescript, and GPT-3.5

## Best Domain Name -- Track Prize


## Best Accessibility Hack -- Track Prize
Writing books is a long process, and writers may spend hours in front of the computer. Some may easily get tired, and some may have visual impairments. This project aims to help writers to write stories more efficiently, so we also want to make sure that this project is accessible to everyone. 

The children group is one of the least patient groups, letting accomplish book become less intimating can potentially help children to focus. Particularly for the attention deficit hyperactivity disorder (ADHD) group, they may have a lot of creative ideas but haven't had chances to write them out. We want Saga to support them actualize this goal.


## What's next for Saga
### More approaches to outlining [Reference: writers.com](https://writers.com/how-to-write-a-story-outline)
- Plot-based
- Scene-based
- Theme-based

Users will have more options in choosing the approach of outlining. This project can be updated to support more writing techniques in the future.

### Character attributes
Our current character attribute number is limited, but customizable features can be expanded in the future.

### Children friendly
Children have many stories. Their creativities are far more imaginative. With a children-friendly mode for Saga, Children can easily create their very first stories. For example, in the brainstorming session, we can ask AI to begin with a sentence starter and let children fly their imaginations. Finishing stories can be accomplishments in their life and excellent practice experience. In addition, this can potentially benefit developmental psychology research and younger child education.


### Connect to graphic AI
Saga can connect other AI's APIs, which would allow users to continue working on their products and artworks.
- Users can use graphic AI
  - create the cover of their books
  - create the character avatar
- Manga
- Cartoon
- Game
- Metaverse

### Plot visualization (Freytag's Pyramid)
While reviewing the tone of the story, users can also see the plot visualization, which helps users to control the tempo of the storytelling.
![Story Plot](https://writers.com/wp-content/uploads/2021/12/Freytags-Pyramid.png)
(credits by [writers.com](https://writers.com/freytags-pyramid))
This can also be used to help students to learn the structure of the story.

### User profiles
Users can create profiles, have their own space to store their stories, and they can also follow other users.

### Mobile app
The mobile app is a pocket solution for users to record ideas and brainstorm anytime and anywhere. They can also share their texts with others.

### Audio to text
In addition, users can use audio-to-text to create stories, which will allow users to record their ideas anytime and anywhere.

### Relationship between characters
https://user-images.githubusercontent.com/47139542/232262653-0a0a2125-6a2f-4355-a98a-4cb4320d56b7.mp4

### Publish & Share
Users can publish their stories on Saga or other potential platforms, which will allow other users to read their stories. Users can also share their stories on other social media platforms.
In addition, this can potentially collaborate with other platforms and sponsors to pay for the writers.

### Multi-language (multilingual) support
Supporting multiple languages can let more users access this product, which will allow users to create stories in different languages.
