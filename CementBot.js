'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "c!"
const cement = ['https://cdn.discordapp.com/attachments/505861794066202644/780253680607035392/image0.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780253681063952404/image1.png','https://cdn.discordapp.com/attachments/505861794066202644/780253681278779412/image2.png','https://cdn.discordapp.com/attachments/505861794066202644/780253681479581746/image3.png','https://cdn.discordapp.com/attachments/505861794066202644/780253681751687198/image4.jpg','https://cdn.discordapp.com/attachments/778730061129842708/780249212431761408/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780249269667627058/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780249349062000690/image0.gif','https://cdn.discordapp.com/attachments/778730061129842708/780249369202130995/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780249410201452544/image0.png','https://media.discordapp.net/attachments/778730061129842708/780249483182473226/video0.mp4','https://cdn.discordapp.com/attachments/590396924532883456/780273525239054356/meme.png','https://cdn.discordapp.com/attachments/675162643895681073/780540682652745748/4nkv7i.png','https://cdn.discordapp.com/attachments/778730061129842708/780448056063164426/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780541443034185758/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780541443420586025/image1.png','https://cdn.discordapp.com/attachments/778730061129842708/780541648597549116/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780541800271446066/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780542068040663050/image0.png']
const basspro = ['https://cdn.discordapp.com/attachments/778730061129842708/780273860846682112/image0.png','https://cdn.discordapp.com/attachments/778730061129842708/780273861135433728/image1.png','https://cdn.discordapp.com/attachments/778730061129842708/780273861378965514/image2.jpg','https://cdn.discordapp.com/attachments/778730061129842708/780273861639667712/image3.png','https://cdn.discordapp.com/attachments/505861794066202644/780274366146412615/image1.png','https://cdn.discordapp.com/attachments/505861794066202644/780274366436081684/image2.png','https://cdn.discordapp.com/attachments/505861794066202644/780274367056576542/image4.png','https://cdn.discordapp.com/attachments/505861794066202644/780274367304957972/image5.png','https://cdn.discordapp.com/attachments/505861794066202644/780276571978072074/image0.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276572656762900/image1.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276572862152704/image2.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276573101883412/image3.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276573345021972/image4.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276573696950302/image5.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276573983080458/image6.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276574405525514/image7.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276574728749086/image8.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780276574988664862/image9.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277369533497344/image0.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277369747275776/image1.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277369931431947/image2.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277370145079326/image3.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277370413121586/image4.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277370657308672/image5.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277370879344670/image6.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277371335868416/image8.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780277371517403156/image9.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780278010880065536/image0.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780278011089387540/image1.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780278011273543690/image2.jpg','https://cdn.discordapp.com/attachments/505861794066202644/780278011425587230/image3.jpg']
const facts = ['cement is tasty','cement is good','EAT CEMENT']
const creator = ['Father Pucci']
const troll = ['https://cdn.discordapp.com/attachments/776155110174752778/778591521762050058/trollface.mp4','https://cdn.discordapp.com/attachments/728388280353292319/780565768018329630/EnIs410XEAAfnck.png','https://cdn.discordapp.com/attachments/728388280353292319/780565173613625364/EnhkXU9XcAIstA-.png','https://discordapp.com/channels/444346487002890260/728388280353292319/780577438572216341','https://cdn.discordapp.com/attachments/728388280353292319/780579971114205194/oil.png']
const femur = ['https://cdn.discordapp.com/attachments/602593912984567808/780573397716566027/video0-6.mp4','https://cdn.discordapp.com/attachments/602593912984567808/780576220332425236/69102623_728667830889049_7985382097618252909_n.mp4','https://cdn.discordapp.com/attachments/602593912984567808/780576220726427658/1960315096806761539_5562344904.mp4','https://cdn.discordapp.com/attachments/728388280353292319/780577193033072680/video0.mov']
const discordmods = ['https://tenor.com/view/discord-moderator-kitten-gif-18177005','https://tenor.com/view/discord-mods-discord-mods-discord-mods-be-like-gif-18886289','https://cdn.discordapp.com/attachments/728388280353292319/780580423805698048/image0.jpg','https://cdn.discordapp.com/attachments/728388280353292319/780580572032270336/image0.jpg']
const shitpost = ['https://cdn.discordapp.com/attachments/728388280353292319/780577890273853460/image0.jpg','https://tenor.com/view/going-cum-mode-cum-femboy-chungus-celeste-gif-18210611','https://cdn.discordapp.com/attachments/728388280353292319/780579559778418698/image0.jpg']

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
		.addField ('c!troll', 'you have been le trolled')
		.addField ('c!femur', 'le femur breaker')
		.addField ('c!discordmods', 'discordmods be like')
		.addField ('c!shitpost', 'le top grade shitposts')
		.addField ('c!updatelog', 'tells you the current updates')
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
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'troll')) return;
		var response1 = troll [Math.floor(Math.random()*troll .length)];
		msg.reply(response1);
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'updatelog')) return;
	var embed3 = new Discord.RichEmbed()
	.addField ('as of 11/23/2020 at 6:42 PM there is 2 new cmds c!shitpost, and c!discordmods enjoy ~ Father Pucci.')
	.setFooter(' Requested by ' + msg.author.username + ' Created by ' + creator )
		.setColor(0xEE82EE)
	.setColor(0xEE82EE)
	msg.channel.sendEmbed(embed3);
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'femur')) return;
		var response1 = femur [Math.floor(Math.random()*femur .length)];
		msg.reply(response1);
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'discordmods')) return;
		var response1 = discordmods [Math.floor(Math.random()*discordmods .length)];
		msg.reply(response1);
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'shitpost')) return;
		var response1 = shitpost [Math.floor(Math.random()*shitpost .length)];
		msg.reply(response1);
});
client.login(process.env.BOT_TOKEN);