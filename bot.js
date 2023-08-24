const { Client, GatewayIntentBits } = require('discord.js');
const chatGPT = require('./chatGPT.js');
const registerCommand = require('./register');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

registerCommand().then(() => {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
      });
      
      client.on('interactionCreate', async interaction => {
        const prompt = interaction.options.getString('prompt');
        console.log(  interaction.message )
        console.log(  interaction.options )
        if (!interaction.isChatInputCommand()) return;
        if (interaction.commandName === 'ask') {
          await interaction.deferReply();
          const response = await chatGPT(prompt);
          await interaction.editReply(`**Question:** ${prompt} \n ${response.choices[0].text}`);
        }
      });
      
      client.login(process.env.BOT_TOKEN);
})