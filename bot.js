const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592853300181860466")
setInterval(function() {
channel.send(`Shady`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
