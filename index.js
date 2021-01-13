require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.BOT_TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  /*if (msg.content === 'ping') {
	//msg.reply tag le user qui la envoyé le message alors que msg.channel.send non
    msg.reply('pong');
	msg.reply("Arrêtes de m'embêter maintenant, humain");
    //msg.channel.send('pong');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  } else */
  if (msg.content.startsWith('-- Nouvelle Candidature --')) {
    msg.react('✅');
    setTimeout(function(){
      msg.react('❎');
    }, 1000); 
  }   
});
