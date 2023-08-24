const { REST, Routes } = require('discord.js')
require('dotenv').config();

const commands = [
    {
      name: 'ask',
      description: 'Replies with ChatGPT!',
      options: [ {
        "name": "prompt",
        "description": "Ask question",
        "type": 3
      }]
    },
  ];
  
const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

async function discordRegisterCommand() {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
};


module.exports = discordRegisterCommand;