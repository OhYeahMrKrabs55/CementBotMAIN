'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "c!"
const cement = ['https://cdn.discordapp.com/attachments/505861794066202644/780253680607035392/image0.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780253681063952404/image1.png','https://cdn.discordapp.com/attachments/505861794066202644/780253681278779412/image2.png','https://cdn.discordapp.com/attachments/505861794066202644/780253681479581746/image3.png','https://cdn.discordapp.com/attachments/505861794066202644/780253681751687198/image4.jpg','https://cdn.discordapp.com/attachments/778730061129842708/780249212431761408/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780249269667627058/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780249349062000690/image0.gif','https://cdn.discordapp.com/attachments/778730061129842708/780249369202130995/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780249410201452544/image0.png','https://media.discordapp.net/attachments/778730061129842708/780249483182473226/video0.mp4','https://cdn.discordapp.com/attachments/590396924532883456/780273525239054356/meme.png']
const basspro = ['https://cdn.discordapp.com/attachments/778730061129842708/780273860846682112/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780273861135433728/image1.png','https://cdn.discordapp.com/attachments/778730061129842708/780273861378965514/image2.jpg','https://cdn.discordapp.com/attachments/778730061129842708/780273861639667712/image3.png','https://cdn.discordapp.com/attachments/505861794066202644/780274366146412615/image1.png','https://cdn.discordapp.com/attachments/505861794066202644/780274366436081684/image2.png','https://cdn.discordapp.com/attachments/505861794066202644/780274367056576542/image4.png','https://cdn.discordapp.com/attachments/505861794066202644/780274367304957972/image5.png','https://cdn.discordapp.com/attachments/505861794066202644/780276571978072074/image0.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276572656762900/image1.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276572862152704/image2.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276573101883412/image3.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276573345021972/image4.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276573696950302/image5.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276573983080458/image6.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276574405525514/image7.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276574728749086/image8.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276574988664862/image9.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277369533497344/image0.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277369747275776/image1.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277369931431947/image2.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277370145079326/image3.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277370413121586/image4.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277370657308672/image5.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277370879344670/image6.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277371335868416/image8.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277371517403156/image9.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780278010880065536/image0.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780278011089387540/image1.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780278011273543690/image2.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780278011425587230/image3.jpg']
const facts = ['cement is tasty','cement is good','EAT CEMENT']
const creator = ['Father Pucci']

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",  
        game: {
            name: " Eating ur cement c!cmds",
            type: "PLAYING" 
        }
    });
 });
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'cement')) return;
		var response1 = cement [Math.floor(Math.random()*cement .length)];
		msg.reply(response1);
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'ping')) return;
		msg.reply(`:ping_pong: Pong! *your ping is* \`${client.pings[0]}ms\``)
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'invite')) return;
		msg.author.sendMessage('Hello! Im CementBot, you have used the invitation command! So heres my invite link. https://discordapp.com/api/oauth2/authorize?client_id=780248099481321472&permissions=0&scope=bot enjoy!')
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'facts')) return;
		var response1 = facts [Math.floor(Math.random()*facts .length)];
		msg.reply(response1);
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'cmds')) return;
		var embed2 = new Discord.RichEmbed()
		.addField ('c!cement', 'This gives the help command (referes to this command)')
		.addField ('c!ping', 'Gives your ping (internet speed)')
		.addField ('c!facts', 'Drops a random meme')
		.addField ('c!invite', 'Invite me to YOUR server!')
		.addField ('c!basspro', 'BASSPROMEMES')
		.addField ('c!brazil', 'sends you to brazil')
		.setFooter(' Requested by ' + msg.author.username + ' Created by ' + creator )
		.setColor(0xFFFAF0)
		msg.channel.sendEmbed(embed2);
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'basspro')) return;
		var response1 = basspro [Math.floor(Math.random()*basspro .length)];
		msg.reply(response1);
});
client.on('message', msg => {
	if (msg.content === 'Cement stinks') {
		msg.reply('No');
	}
});
client.on('message', msg => {
	if (msg.content === 'cement stinks') {
		msg.reply('No, *slap*');
	}
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'brazil')) return;
		msg.reply('Im sending you to brazil, *BOOT*')
});
client.login(process.env.BOT_TOKEN);