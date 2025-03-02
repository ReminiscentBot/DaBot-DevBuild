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
      name: "Jake",
      id: "232222592050659328",
    },
  ],
  devGuilds: [
    {
      name: "Test Electro",
      id: "1096824161403420726",
    },
    {
      name: "Hopeless Fellows",
      id: "1054284394791178291",
    },
  ],
  betaTestGuilds: [
    {
      name: "Chapry Academy",
      id: "1280838788591124541",
    },
  ],
  logWebhook: process.env.logWebhook,
};
