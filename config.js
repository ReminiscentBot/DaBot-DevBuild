const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  botToken: process.env.token,
  mongoUrl: process.env.mongoUrl,
  clientId: process.env.clientId,
  logChannel: process.env.logChannel,
  deploySlashOnReady: true,
  underDevelopment: false,
  developers: [
    {
      name: "Jay",
      id: "944011837266096139",
    },
    {
      name: "",
      id: "232222592050659328",
    },
  ],
  devGuilds: [
    {
      name: "TestServer1",
      id: "1345534207136632984",
    },
  ],
  betaTestGuilds: [
    {
      name: "BetaTestServer1",
      id: "1345534207136632984",
    },
  ],
  logWebhook: process.env.logWebhook,
};
