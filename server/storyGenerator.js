import OpenAI from "openai";
import { download } from "./download.js";
const openai = new OpenAI();
async function run() {
  try {
    const resume = await openai.chat.completions.create({
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `You are an AI Assistant that generates african folktales based on ngugi wa thiong'o kenyan writer according to the user specifications. Return the story in VALID json with, title, body, and characters with their descriptions in 500 words maximum`,
        },
        {
          role: "user",
          content: `This powerful African story brings to life a tale about a young woman named Oluchi whose life takes an unfortunate turn. 
          Oluchi is the daughter of Pastor Nduka in the small city of Obu. Raised in a devout Christian family, she is taught the virtues of purity and saving herself for marriage from a young age. 
          Her friendship with Amaka, the supposed daughter of a village witch doctor, causes strife with her parents. But Oluchi remains loyal to her friend despite the warnings.
          When Amaka's fiancé Ekele is unfaithful, Oluchi attempts to plead his case, only to fall victim to a horrible violation. 
          Consumed by trauma and fear of bringing shame to her family, Oluchi hides the truth. But an ancient curse unleashed by Amaka's vengeful father begins turning her into an insatiable "village harlot."
          As Oluchi's life spirals out of control, her desperate parents fight to save her from this evil affliction.
          Will they be able to break the curse before it's too late? Or will Oluchi's cherished purity be lost forever?
          Witness the gripping unfolding of this impactful African story exploring traditional values, the sacred bonds of friendship, and the grim consequences of hatred and vengeance.`,
        },
      ],
      model: "gpt-4-turbo",
      max_tokens: 2000,
    });

    let response = resume.choices[0].message.content;
    let story = JSON.parse(response);
    let characters = story.characters;

    console.log(story);

    for (const property in characters) {
      var name = characters[property].name;
      var description = characters[property].description;
      const image = await openai.images.generate({
        model: "dall-e-3",
        // response_format: "b64_json",
        prompt: `Generate an image of ${name} based on african folk tales with the followwing descriptions ${description} based on this story ${story.body}. Put the first 250 words from the story onto the image.`,
      });
      await download(image.data[0].url);
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

await run();
