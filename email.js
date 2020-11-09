const mailjet = require("node-mailjet").connect(
  "97ecec6691090091a6dc0f0f7ec09f91",
  "b5b404fa5433ab4a3e3c7cf2a292d648"
);
const request = mailjet.post("send", { version: "v3.1" }).request({
  Messages: [
    {
      From: {
        Email: "kjsudi@gmail.com",
        Name: "Sudarshan",
      },
      To: [
        {
          Email: "edjanardhan@gmail.com",
          Name: "Sudarshan",
        },
      ],
      Subject: "Greetings from Mailjet.",
      TextPart: "My first Mailjet email",
      HTMLPart:
        "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
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
