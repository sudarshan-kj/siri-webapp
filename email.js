const mailjet = require("node-mailjet").connect(
  "97ecec6691090091a6dc0f0f7ec09f91",
  "b5b404fa5433ab4a3e3c7cf2a292d648"
);
const request = mailjet.post("send", { version: "v3.1" }).request({
  Messages: [
    {
      From: {
        Email: "web@siridharmasthala.com",
        Name: "SIRI Web",
      },
      To: [
        {
          Email: "kjsudi@gmail.com",
        },
      ],
      Subject: "Usage Alert exceeded",
      TextPart:
        "Sudarshan, we are informing that a new user has submitted a message on your website. Kindly check your phone for more information",
      HTMLPart: "<h2>This is a new test email</h1>",
      CustomID: "AppGettingStartedTest",
    },
  ],
});
request
  .then((result) => {
    console.log(result.body);
  })
  .catch((err) => {
    console.log(err.statusCode);
  });
