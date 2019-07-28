const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!twitter') {
    msg.reply('Here is @SxsterDanny`s twitter page: https://link.dandsha.ml/tweet');
  }
});

client.on('message', msg => {
    if (msg.content === '!rblx') {
      msg.reply('Here is @SxsterDanny`s Roblox Profile: https://link.dandsha.ml/rblx');
    }
  });

  client.on('message', msg => {
    if (msg.content === '!twitch') {
      msg.reply('Here is @SxsterDanny`s Twitch Channel: https://link.dandsha.ml/twitch');
    }
  });
  
client.login(process.env.NjA0NzczOTY3MDA5NDE1MTgx.XT2fLA.DDf1oOjp_fONygeiO1FNA49CSQY);
