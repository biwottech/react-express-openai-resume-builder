import OpenAI from "openai";

const openai = new OpenAI();

export async function main(jobRequirements) {
  try {
    var data = {
      parameters: {
        name: "Winnie Jepkorir Kipsang",
        contactInformation: {
          email: "winniesang96@gmail.com",
          address: "Eldama Ravine",
          city: "Nairobi",
          county: "Baringo",
        },
        education: "Bachelor's degree in Business Management",
        certification: "Certified Public Accountant CPA",
        experience: [
          {
            company: "MOGO ltd",
            role: "Loan officer",
            duration: "2 years",
            responsibilities: [
              "recording transactions",
              "preparing financial reports",
              "conducting budget analysis",
            ],
          },
          {
            company: "Projtrac ltd",
            role: "Loan officer",
            duration: "3 years",
            responsibilities: [
              "recording transactions",
              "preparing financial reports",
              "conducting budget analysis",
            ],
          },
        ],
        skills: [
          "Accounts",
          "Loan Processing",
          "Quick books",
          "Problem-solving",
          "Agile methodology",
        ],
      },
    };

    const resume = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are an AI Assistant that generates application letters based on job requirements. Here is a full job post with the requirements: ${jobRequirements} If a user sends you their names,contact information, education e.t.c in JSON format, reply with a job application to the job posted in the requirements above. At the end of the application, make sure to use "Best regards,{name}"`,
        },
        {
          role: "user",
          content: `Hello, here is my requirements in JSON format: ${JSON.stringify(
            data.parameters
          )} Please write an application letter for me.`,
        },
      ],
      model: "gpt-4-turbo",
      max_tokens: 2000,
    });

    return resume.choices[0].message.content;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}
