const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const fetch = require('node-fetch');
const client = new Client();
const prefix = '!';

let radiantIcons = new Map();
radiantIcons.set('kasumi', 'https://yue-tian.github.io/ic-partner/partner/ssr/kasumi.PNG');
radiantIcons.set('gemmy', 'https://yue-tian.github.io/ic-partner/partner/ssr/gemmy.PNG');
radiantIcons.set('maki', 'https://yue-tian.github.io/ic-partner/partner/ssr/maki.PNG');
radiantIcons.set('hersey', 'https://yue-tian.github.io/ic-partner/partner/ssr/hersey.PNG');
radiantIcons.set('pan', 'https://yue-tian.github.io/ic-partner/partner/sr/pan.PNG');
radiantIcons.set('saya', 'https://yue-tian.github.io/ic-partner/partner/ssr/saya.PNG');
radiantIcons.set('edward', 'https://yue-tian.github.io/ic-partner/partner/ssr/edward.PNG');
radiantIcons.set('hotaru', 'https://yue-tian.github.io/ic-partner/partner/ssr/hotaru.PNG');
radiantIcons.set('gigi', 'https://yue-tian.github.io/ic-partner/partner/sr/gigi.PNG');
radiantIcons.set('mei', 'https://yue-tian.github.io/ic-partner/partner/sr/mei.PNG');
radiantIcons.set('selena', 'https://yue-tian.github.io/ic-partner/partner/ssr/selena.PNG');
radiantIcons.set('angela', 'https://yue-tian.github.io/ic-partner/partner/ssr/angela.PNG');
radiantIcons.set('kiraya', 'https://yue-tian.github.io/ic-partner/partner/ssr/kiraya.PNG');
radiantIcons.set('camille', 'https://yue-tian.github.io/ic-partner/partner/ssr/camille.PNG');
radiantIcons.set('victoria', 'https://yue-tian.github.io/ic-partner/partner/ssr/victoria.PNG');
radiantIcons.set('annie', 'https://yue-tian.github.io/ic-partner/partner/sr/annie.PNG');
radiantIcons.set('barinas', 'https://yue-tian.github.io/ic-partner/partner/ssr/barinas.PNG');
radiantIcons.set('sachiko', 'https://yue-tian.github.io/ic-partner/partner/sr/sachiko.PNG');
radiantIcons.set('yuffie', 'https://yue-tian.github.io/ic-partner/partner/ssr/yuffie.PNG');
radiantIcons.set('hachishiki', 'https://yue-tian.github.io/ic-partner/partner/ssr/hachi_shiki.PNG');
radiantIcons.set('rotania', 'https://yue-tian.github.io/ic-partner/partner/ssr/rotania.PNG');
radiantIcons.set('nicola', 'https://yue-tian.github.io/ic-partner/partner/ssr/nicola.PNG');
radiantIcons.set('nina', 'https://yue-tian.github.io/ic-partner/partner/ssr/nina.PNG');
radiantIcons.set('fenebeth', 'https://yue-tian.github.io/ic-partner/partner/ssr/fenebeth.PNG');
radiantIcons.set('chiyo', 'https://yue-tian.github.io/ic-partner/partner/sr/chiyo.PNG');
radiantIcons.set('tiffany', 'https://yue-tian.github.io/ic-partner/partner/sr/tiffany.PNG');
radiantIcons.set('anna', 'https://yue-tian.github.io/ic-partner/partner/ssr/anna.PNG');
radiantIcons.set('diana', 'https://yue-tian.github.io/ic-partner/partner/ssr/diana.PNG');
radiantIcons.set('jasmine', 'https://yue-tian.github.io/ic-partner/partner/sr/jasmine.PNG');
radiantIcons.set('diamond', 'https://yue-tian.github.io/ic-partner/partner/sr/diamond.PNG');
radiantIcons.set('phoebe', 'https://yue-tian.github.io/ic-partner/partner/ssr/phoebe.PNG');
radiantIcons.set('vivian', 'https://yue-tian.github.io/ic-partner/partner/ssr/vivian.PNG');
radiantIcons.set('amon', 'https://yue-tian.github.io/ic-partner/partner/sr/amon.PNG');
radiantIcons.set('harto', 'https://yue-tian.github.io/ic-partner/partner/sr/harto.PNG');
radiantIcons.set('miyuki', 'https://yue-tian.github.io/ic-partner/partner/ssr/miyuki.PNG');
radiantIcons.set('rikia', 'https://yue-tian.github.io/ic-partner/partner/sr/rikia.PNG');
radiantIcons.set('beatrice', 'https://yue-tian.github.io/ic-partner/partner/sr/beatrice.PNG');
radiantIcons.set('gagaku', 'https://yue-tian.github.io/ic-partner/partner/ssr/gagaku.PNG');
radiantIcons.set('theenforcers', 'https://yue-tian.github.io/ic-partner/partner/ssr/the_enforcers.PNG');
radiantIcons.set('ann', 'https://yue-tian.github.io/ic-partner/partner/sr/ann.PNG');
radiantIcons.set('ashwaya', 'https://yue-tian.github.io/ic-partner/partner/ssr/ashwaya.PNG');
radiantIcons.set('frantiva', 'https://yue-tian.github.io/ic-partner/partner/ssr/frantiva.PNG');
radiantIcons.set('flora', 'https://yue-tian.github.io/ic-partner/partner/sr/flora.PNG');
radiantIcons.set('penny', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/r/penny.png');
radiantIcons.set('alice', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/r/alice.png');
radiantIcons.set('bontenmaru', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/r/bontenmaru.png');
radiantIcons.set('carol', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/r/carol.png');
radiantIcons.set('loro', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/r/loro.png');
radiantIcons.set('nanalie', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/r/nanalie.png');
radiantIcons.set('polly', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/r/polly.png');
radiantIcons.set('rie', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/r/rie.png');
radiantIcons.set('shanti', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/r/shanti.png');
radiantIcons.set('mary', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/r/mary.jpg');
radiantIcons.set('mia', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/r/mia.jpg');
radiantIcons.set('astaroth', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/ssr/astaroth.JPG');
radiantIcons.set('madhatter', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/sr/mad_hatter.JPG');
radiantIcons.set('yume', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/ssr/yume.JPG');
radiantIcons.set('natata', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/ssr/charlotte.JPG');
radiantIcons.set('alena', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/ssr/alina.JPG');
radiantIcons.set('brooke', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/ssr/brooke1.JPG');
radiantIcons.set('taka', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/ssr/taka.JPG');
radiantIcons.set('ming', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/ssr/ming1.JPG');
radiantIcons.set('okuni', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/ssr/okuni.JPG');
radiantIcons.set('sakura', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/ssr/sakura1.JPG');
radiantIcons.set('junko', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/ssr/junko1.JPG');
radiantIcons.set('ai', 'https://raw.githubusercontent.com/18anguyen24/ICSearchBot/main/ssr/ai1.JPG');




let rarity = new Map();
rarity.set('kasumi', 'SSR');
rarity.set('gemmy', 'SSR');
rarity.set('maki', 'SSR');
rarity.set('hersey', 'SSR');
rarity.set('pan', 'SR');
rarity.set('saya', 'SSR');
rarity.set('edward', 'SSR');
rarity.set('hotaru', 'SSR');
rarity.set('gigi', 'SR');
rarity.set('mei', 'SR');
rarity.set('selena', 'SSR');
rarity.set('angela', 'SSR');
rarity.set('kiraya', 'SSR');
rarity.set('camille', 'SSR');
rarity.set('victoria', 'SSR');
rarity.set('annie', 'SR');
rarity.set('barinas', 'SSR');
rarity.set('sachiko', 'SR');
rarity.set('yuffie', 'SSR');
rarity.set('hachishiki', 'SSR');
rarity.set('rotania', 'SSR');
rarity.set('nicola', 'SSR');
rarity.set('nina', 'SSR');
rarity.set('fenebeth', 'SSR');
rarity.set('chiyo', 'SR');
rarity.set('tiffany', 'SR');
rarity.set('anna', 'SSR');
rarity.set('diana', 'SSR');
rarity.set('jasmine', 'SR');
rarity.set('diamond', 'SR');
rarity.set('phoebe', 'SSR');
rarity.set('vivian', 'SSR');
rarity.set('amon', 'SR');
rarity.set('harto', 'SR');
rarity.set('miyuki', 'SSR');
rarity.set('rikia', 'SR');
rarity.set('beatrice', 'SR');
rarity.set('gagaku', 'SSR');
rarity.set('theenforcers', 'SSR');
rarity.set('ann', 'SR');
rarity.set('ashwaya', 'SSR');
rarity.set('frantiva', 'SSR');
rarity.set('flora', 'SR');
rarity.set('penny', 'R');
rarity.set('alice', 'R');
rarity.set('bontenmaru', 'R');
rarity.set('carol', 'R');
rarity.set('loro', 'R');
rarity.set('nanalie', 'R');
rarity.set('polly', 'R');
rarity.set('rie', 'R');
rarity.set('shanti', 'R');
rarity.set('mary', 'R');
rarity.set('mia', 'R');
rarity.set('astaroth', 'SSR');
rarity.set('madhatter', 'SR');
rarity.set('yume', 'SSR');
rarity.set('natata', 'SSR');
rarity.set('alena', 'SSR');
rarity.set('brooke', 'SSR');
rarity.set('taka', 'SSR');
rarity.set('ming', 'SSR');
rarity.set('okuni', 'SSR');
rarity.set('sakura', 'SSR');
rarity.set('junko', 'SSR');
rarity.set('ai', 'SSR');

let trueNames = new Map();
trueNames.set('kasumi', 'Kasumi');
trueNames.set('gemmy', 'Gemmy');
trueNames.set('maki', 'Maki');
trueNames.set('hersey', 'Hersey');
trueNames.set('pan', 'Pan');
trueNames.set('saya', 'Saya');
trueNames.set('edward', 'Edward');
trueNames.set('hotaru', 'Hotaru');
trueNames.set('gigi', 'Gigi');
trueNames.set('mei', 'Mei');
trueNames.set('selena', 'Selena');
trueNames.set('angela', 'Angela');
trueNames.set('kiraya', 'Kiraya');
trueNames.set('camille', 'Camille');
trueNames.set('victoria', 'Victoria');
trueNames.set('annie', 'Annie');
trueNames.set('barinas', 'Barinas');
trueNames.set('sachiko', 'Sachiko');
trueNames.set('yuffie', 'Yuffie');
trueNames.set('hachishiki', 'Hachi Shiki');
trueNames.set('rotania', 'Rotania');
trueNames.set('nicola', 'Nicola');
trueNames.set('nina', 'Nina');
trueNames.set('fenebeth', 'Fenebeth');
trueNames.set('chiyo', 'Chiyo');
trueNames.set('tiffany', 'Tiffany');
trueNames.set('anna', 'Anna');
trueNames.set('diana', 'Diana');
trueNames.set('jasmine', 'Jasmine');
trueNames.set('diamond', 'Diamond');
trueNames.set('phoebe', 'Phoebe');
trueNames.set('vivian', 'Vivian');
trueNames.set('amon', 'Amon');
trueNames.set('harto', 'Harto');
trueNames.set('miyuki', 'Miyuki');
trueNames.set('rikia', 'Rikia');
trueNames.set('beatrice', 'Beatrice');
trueNames.set('gagaku', 'Gagaku');
trueNames.set('theenforcers', 'The Enforcers');
trueNames.set('ann', 'Ann');
trueNames.set('ashwaya', 'Ashwaya');
trueNames.set('frantiva', 'Frantiva');
trueNames.set('flora', 'Flora');
trueNames.set('penny', 'Penny');
trueNames.set('alice', 'Alice');
trueNames.set('bontenmaru', 'Botenmaru');
trueNames.set('carol', 'Carol');
trueNames.set('loro', 'Loro');
trueNames.set('nanalie', 'Nanalie');
trueNames.set('polly', 'Polly');
trueNames.set('rie', 'Rie');
trueNames.set('shanti', 'Shanti');
trueNames.set('mary', 'Mary');
trueNames.set('mia', 'Mia');
trueNames.set('astaroth', 'Astaroth');
trueNames.set('madhatter', 'Mad Hatter');
trueNames.set('yume', 'Yume');
trueNames.set('natata', 'Natata');
trueNames.set('alena', 'Alena');
trueNames.set('brooke', 'Brooke');
trueNames.set('taka', 'Taka');
trueNames.set('ming', 'Ming');
trueNames.set('okuni', 'Okuni');
trueNames.set('sakura', 'Sakura Minamoto');
trueNames.set('junko', 'Junko Konno');
trueNames.set('ai', 'Ai Mizuno');

client.once('ready', () => {
	console.log('rd');
});

client.on('message', async message => 
{
	client.user.setActivity('Maki', { type: 'WATCHING' });

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);

	const command = args.shift().toLowerCase();
	// ...
	if (command === 'help') 
	{
        const str = 
			"**!search** `[partnerName]`" +
			"\n Displays partner's skills and lens." +
			"\n\n **!invite** " +
			"\n Invite link to server." +
			"\n\n **!banner** " +
			"\n Displays link to banner from #guide." +
			"\n\n **!skins** " +
			"\n Displays link to (most)future skins possible from the KR server." +
			"\n\n\n KR FUTURE UNITS' TRANSLATION CREDITS GO TO @Hyou#5070 AND @MEKA#6993";
        message.channel.send(str);
	}
	
	if (command === 'invite')
	{
		const embed = new MessageEmbed()
			.setTitle('__Invite!__')
			.setColor('#FF02EC')
			.setURL('https://discord.com/api/oauth2/authorize?client_id=703145119565742180&permissions=39936&scope=bot');

		message.channel.send(embed);
	}

	if (command === 'banner')
	{
		const embed = new MessageEmbed()
			.setTitle('Banner from #guide')
			.setColor('#FF0202')
			.setURL('https://docs.google.com/spreadsheets/d/e/2PACX-1vTVvty9BpQFxf6HemfEbcJcVSnLacRuooJ0V9HxNsuK16nXulkMoMqLGa4TjzL7ex-5lyzTgrd8B7is/pubhtml#');

		message.channel.send(embed);
	}

	if (command === 'wiki')
	{
		const embed = new MessageEmbed()
			.setTitle('Link to wiki')
			.setColor('#FE8300')
			.setURL('https://illusionconnectwiki.com/wiki/characters');

		message.channel.send(embed);
	}

	if (command === 'skins')
	{
		const embed = new MessageEmbed()
			.setTitle('Skins to date from the wiki')
			.setColor('#0AFF02')
			.setURL('https://illusionconnectwiki.com/art/categories/official-skins.7/');

		message.channel.send(embed);
	}

	if (command === 'search') 
	{
		const name = args.join('').toLowerCase();
		if (!radiantIcons.has(name)) 
		{
			message.channel.send('ERROR: Partner not found.');
		}
		else 
		{
			//formatting and sending embedded image
			if(rarity.get(name) === "SSR")
			{
				const embed = new MessageEmbed()
					.setAuthor('Partner', 'https://github.com/18anguyen24/ICSearchBot/blob/main/rarity/ssr.png?raw=true')
					.setColor('#E3E16A')
					.setTitle('__**' + trueNames.get(name) + '**__ :large_blue_diamond: ' + partnerDataBase(name, 'cost'))
					.setImage(findClass(name))
					.setDescription(`**[Passive]**:fire: ` + partnerDataBase(name, 'passive'))
					.addField('**[Lineup Skill]**', partnerLineup(name))
					.setThumbnail(radiantIcons.get(name))
					.addFields(
						{
							name: '[Unique]:boom:',
							value: partnerDataBase(name, 'uniqueSkill'),
							inline: true,
						},
						{
							name: '[Special]:comet:',
							value: partnerDataBase(name, 'special'),
							inline: true,
						},
						{
							name: '[Normal]:crossed_swords:',
							value: partnerDataBase(name, 'attack'),
							inline: true,
						},
					)
					.addFields(
						{
							name: '4:star: \n[Unique]:boom:',
							value: partnerDataBase(name, 'fourStar'),
							inline: true,
						},
						{
							name: '5:star: \n[Passive]:fire:',
							value: partnerDataBase(name, 'fiveStar'),
							inline: true,
						},
						{
							name: '6:star: \n[Special]:comet:',
							value: partnerDataBase(name, 'sixStar'),
							inline: true,
						},
					)
					.addField(':star:**AWAKENING**:star:', awakenSkill(name));
					message.channel.send(embed);
			}
			else if(rarity.get(name) === "SR")
			{
				const embed = new MessageEmbed()
					.setAuthor('Partner', 'https://github.com/18anguyen24/ICSearchBot/blob/main/rarity/sr.png?raw=true')
					.setColor('#8838D9')
					.setTitle('__**' + trueNames.get(name) + '**__ :large_blue_diamond: ' + partnerDataBase(name, 'cost'))
					.setImage(findClass(name))
					.setDescription(`**[Passive]**:fire: ` + partnerDataBase(name, 'passive'))
					.addField('**[Lineup Skill]**', partnerLineup(name))
					.setThumbnail(radiantIcons.get(name))
					.addFields(
						{
							name: '[Unique]:boom:',
							value: partnerDataBase(name, 'uniqueSkill'),
							inline: true,
						},
						{
							name: '[Special]:comet:',
							value: partnerDataBase(name, 'special'),
							inline: true,
						},
						{
							name: '[Normal]:crossed_swords:',
							value: partnerDataBase(name, 'attack'),
							inline: true,
						},
					)
					.addFields(
						{
							name: '3:star: \n[Unique]:boom:',
							value: partnerDataBase(name, 'threeStar'),
							inline: true,
						},
						{
							name: '4:star: \n[Passive]:fire:',
							value: partnerDataBase(name, 'fourStar'),
							inline: true,
						},
						{
							name: '5:star: \n[Special]:comet:',
							value: partnerDataBase(name, 'fiveStar'),
							inline: true,
						},
					);
					message.channel.send(embed);
			}
			if(rarity.get(name) === "R")
			{
				const embed = new MessageEmbed()
					.setAuthor('Partner', 'https://github.com/18anguyen24/ICSearchBot/blob/main/rarity/r.png?raw=true')
					.setColor('#00c3ff')
					.setTitle('__**' + trueNames.get(name) + '**__ :large_blue_diamond: ' + partnerDataBase(name, 'cost'))
					.setImage(findClass(name))
					.setDescription(`**[Passive]**:fire: ` + partnerDataBase(name, 'passive'))
					.setThumbnail(radiantIcons.get(name))
					.addFields(
						{
							name: '[Unique]:boom:',
							value: partnerDataBase(name, 'uniqueSkill'),
							inline: true,
						},
						{
							name: '[Special]:comet:',
							value: partnerDataBase(name, 'special'),
							inline: true,
						},
						{
							name: '[Normal]:crossed_swords:',
							value: partnerDataBase(name, 'attack'),
							inline: true,
						},
					)
					.addFields(
						{
							name: '2:star: \n[Unique]:boom:',
							value: partnerDataBase(name, 'twoStar'),
							inline: true,
						},
						{
							name: '3:star: \n[Passive]:fire:',
							value: partnerDataBase(name, 'threeStar'),
							inline: true,
						},
						{
							name: '4:star: \n[Special]:comet:',
							value: partnerDataBase(name, 'fourStar'),
							inline: true,
						},
					);
					message.channel.send(embed);
			}
		}
	}

});

function findClass(name)
{
	let partnerClass = new Map();
	partnerClass.set('kasumi', 'attack');
	partnerClass.set('gemmy', 'attack');
	partnerClass.set('maki', 'attack');
	partnerClass.set('hersey', 'attack');
	partnerClass.set('pan', 'attack');
	partnerClass.set('saya', 'attack');
	partnerClass.set('edward', 'attack');
	partnerClass.set('hotaru', 'attack');
	partnerClass.set('gigi', 'attack');
	partnerClass.set('mei', 'attack');
	partnerClass.set('selena', 'guardian');
	partnerClass.set('angela', 'guardian');
	partnerClass.set('kiraya', 'guardian');
	partnerClass.set('camille', 'guardian');
	partnerClass.set('victoria', 'guardian');
	partnerClass.set('annie', 'guardian');
	partnerClass.set('barinas', 'guardian');
	partnerClass.set('sachiko', 'guardian');
	partnerClass.set('yuffie', 'sorcerer');
	partnerClass.set('hachishiki', 'sorcerer');
	partnerClass.set('rotania', 'sorcerer');
	partnerClass.set('nicola', 'sorcerer');
	partnerClass.set('nina', 'sorcerer');
	partnerClass.set('fenebeth', 'sorcerer');
	partnerClass.set('chiyo', 'sorcerer');
	partnerClass.set('tiffany', 'sorcerer');
	partnerClass.set('anna', 'heal');
	partnerClass.set('diana', 'heal');
	partnerClass.set('jasmine', 'heal');
	partnerClass.set('diamond', 'heal');
	partnerClass.set('phoebe', 'light');
	partnerClass.set('vivian', 'light');
	partnerClass.set('amon', 'light');
	partnerClass.set('harto', 'light');
	partnerClass.set('miyuki', 'spell');
	partnerClass.set('rikia', 'spell');
	partnerClass.set('beatrice', 'spell');
	partnerClass.set('gagaku', 'summon');
	partnerClass.set('theenforcers', 'summon');
	partnerClass.set('ann', 'summon');
	partnerClass.set('ashwaya', 'summon');
	partnerClass.set('frantiva', 'summon');
	partnerClass.set('flora', 'summon');
	partnerClass.set('penny', 'attack');
	partnerClass.set('alice', 'light');
	partnerClass.set('bontenmaru', 'guardian');
	partnerClass.set('carol', 'attack');
	partnerClass.set('loro', 'guardian');
	partnerClass.set('nanalie', 'spell');
	partnerClass.set('polly', 'heal');
	partnerClass.set('rie', 'sorcerer');
	partnerClass.set('shanti', 'guardian');
	partnerClass.set('mary', 'sorcerer');
	partnerClass.set('mia', 'attack');
	partnerClass.set('astaroth', 'spell');
	partnerClass.set('madhatter', 'summon');
	partnerClass.set('yume', 'attack');
	partnerClass.set('natata', 'sorcerer');
	partnerClass.set('alena', 'sorcerer');
	partnerClass.set('brooke', 'light');
	partnerClass.set('taka', 'guardian');
	partnerClass.set('ming', 'heal');
	partnerClass.set('okuni', 'light');
	partnerClass.set('junko', 'heal');
	partnerClass.set('ai', 'sorcerer');
	partnerClass.set('sakura', 'spell');



	let trueClass = new Map();
	trueClass.set('attack', 'https://www.illusionconnectgame.com/images/temp200821/public/Attack.png');
	trueClass.set('sorcerer', 'https://www.illusionconnectgame.com/images/temp200821/public/Sorcerer.png');
	trueClass.set('guardian', 'https://www.illusionconnectgame.com/images/temp200821/public/Guardian.png');
	trueClass.set('spell', 'https://www.illusionconnectgame.com/images/temp200821/public/Spell.png');
	trueClass.set('light', 'https://www.illusionconnectgame.com/images/temp200821/public/Light.png');
	trueClass.set('summon', 'https://www.illusionconnectgame.com/images/temp200821/public/Summon.png');
	trueClass.set('heal', 'https://www.illusionconnectgame.com/images/temp200821/public/Heal.png');

	return trueClass.get(partnerClass.get(name));
}

function partnerLineup(partner)
{
	let partnerLineSkill = new Map();
	partnerLineSkill.set('maki', '**[Activation Requirement]** Average Lineup Energy is less than or equal to **14**. \n**[Activation Effect]** When Ally partner dies, she deals **100%** ATK DMG to enemy Leader.');
	partnerLineSkill.set('gigi', '**[Activation Requirement]** Average Lineup Energy is less than or equal to **14**. \n**[Activation Effect]** DMG Rate of partners with less than **14** Energy increases by **15%**.');
	partnerLineSkill.set('selena', '**[Activation Requirement]** Average Lineup Energy greater than or equal to **14**. \n**[Activation Effect]** Whenever an Ally partner appears, she grants the Leader a Shield equal to **10%**.');
	partnerLineSkill.set('kiraya', '**[Activation Requirement]** Deploy at least **5** Light or Healing class partners. \n**[Activation Effect]** Recovery Rate of all Ally partners increases by **50%**.');
	partnerLineSkill.set('camille', '**[Activation Requirement]** Average Lineup Energy greater than or equal to **14**. \n**[Activation Effect]** Camille taunts all enemies for **2** rounds when joining the battle. Increases max HP by **30%**.');
	partnerLineSkill.set('annie', '**[Activation Requirement]** Deploy at least **5** parterns of Sorcerer class. \n**[Activation Effect]** When Annie is present, DMG RES Rate of Ally partners of Sorcerer class is increased by **30%**. Every empty enemy position increases Annie\'s DMG RES Rate by **3%**.');
	partnerLineSkill.set('yuffie', '**[Activation Requirement]** Deploy at least **5** Sorcerer class partners. \n**[Activation Effect]** Ally partners of Sorcerer class deal **20%** additional DMG to enemy partners');
	partnerLineSkill.set('anna', '**[Activation Requirement]** Deploy at least **5** partners of different classes. \n**[Activation Effect]** When Anna is present, grants herself and allied partners deployed after Anna **10%** DMG Rate and **10%** DMG RES Rate.');
	partnerLineSkill.set('jasmine', '**[Activation Requirement]** No more than **2** partners of any one Energy cost on the Team. \n**[Activation Effect]** After every action, Jasmine restores **20%** HP Max to Ally partner with the lowest HP.');
	partnerLineSkill.set('phoebe', '**[Activation Requirement]** Deploy at least **5** Light or Healing class partners. \n**[Activation Effect]** When Phoebe appears, she grants Invincible status to **3** random Ally units, lasts **20** seconds.');
	partnerLineSkill.set('ann', '**[Activation Requirement]** No more than **2** partners of any one Energy cost on the Team. \n**[Activation Effect]** Mermaid Princess and Snow Queen increase HP Max by **60%**.');
	partnerLineSkill.set('taka', '**[Activation Requirement]** Deploy at least **4** Guardian allies. \n**[Activation Effect]** When an Ally partner appears, **1** random Guardian ally gains **500** rage.');
	partnerLineSkill.set('okuni', '**[Activation Requirement]** Deploy at least **6** Guardian or Light allies. \n**[Activation Effect]** All Guardian allies gain a shield equal to **100%** of their max HP.');
	partnerLineSkill.set('sakura', '**[Activation Requirement]** Junko Konno and Ai Mizuno are in the team. \n**[Activation Effect]** Whenever Sakura attacks, Junko and Ai will also launch an attack.');
	partnerLineSkill.set('ai', '**[Activation Requirement]** Sakura Minamoto and Junko Konno are in the team. \n**[Activation Effect]** Whenever Ai attacks, Sakura and Junko will also launch an attack.');
	partnerLineSkill.set('junko', '**[Activation Requirement]** Sakura Minamoto and Ai Mizuno are in the team. \n**[Activation Effect]** Whenever Junko attacks, Sakura and Ai will also launch an attack.');


	if(partnerLineSkill.has(partner))
	{
		return partnerLineSkill.get(partner);
	}
	return 'No Lineup Skill found.';
}

function awakenSkill(partner)
{
	let partnerAwakenSkill = new Map();
	partnerAwakenSkill.set('maki', 'Deals damage equal to **ATK*500% (+50%)**; Increase DMG Rate and DMG Res Rate by **20%**.');

	if(partnerAwakenSkill.has(partner))
	{
		return partnerAwakenSkill.get(partner);
	}
	return 'No Awakening found for this partner.';
}

function partnerDataBase(partner, typeToFind) 
{
	let partnerDescription = new Map();
	switch(partner)
	{
		case "kasumi":
			partnerDescription.set('cost', '17');

			partnerDescription.set('passive', 'When Kasumi appears, her **CRIT DMG** increases by **55%**, and she steals all enemy Invincible and Shield effects.');
			partnerDescription.set('uniqueSkill', 'Attacks an enemy __column__ and deals **ATK*265%** damage. She loses **40%** HP but increases her CRIT Rate by **60%**.');
			partnerDescription.set('special', 'Attacks a __single__ enemy and deals **ATK*162%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*265% (+65%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases DMG Rate by **11%** for 3 rounds for each effect stolen; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Sacrifices **5%** HP to increase CRIT Rate by **25%** when attacking; Chance to use Special Skill **+15%**.');
			break;
		
		case "gemmy":
			partnerDescription.set('cost', '17');

			partnerDescription.set('passive', 'When Gemmy dies, she revives and receives **100% ATK**, **100% DEF**, **1% HP**, and **1000** Rage. Triggers 1 time per battle');
			partnerDescription.set('uniqueSkill', 'Gemmy deals DMG equal to **420%** of **ATK** to a __single__ target, plus an additional DMG equal to **12%** of the target\'s current HP. The additional **DMG** does not exceed **300% ATK**.');
			partnerDescription.set('special', ' Deals **DMG** equal to **165%** of **ATK** to a __single__ target and randomly increases one allied partner\'s Lifesteal Rate by **20%**. The effect lasts the entire battle and cannot stack.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals an additional **DMG** equal to **17%** of the target\'s current HP; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Can revive **2** times, the second time inheriting **50% ATK**; Increases basic **ATK** by **20%**.');
			partnerDescription.set('sixStar', 'Increases one allied partner\'s Lifesteal Rate by **30%**; Increases Skill Casting Rate by **+15%**.');
			break;

		case "maki":
			partnerDescription.set('cost', '12');

			partnerDescription.set('passive', 'When Maki dies, **220% ATK DMG** is dealt to enemy leader.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*400%** damage. Has a **80%/25%** chance to trigger a **1**-hit / **2**-hit __combo__, dealing **135%/100%** damage.');
			partnerDescription.set('special', 'Attacks a __single__ enemy and deals **ATK*162%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*400% (+100%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases ATK by **15%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Deals **50%** of damage dealt to the enemy Leader if the target is an enemy partner; Chance to use Special Skill **+15%**.');
			break;

		case "hersey":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'When Hersey appears, she deals **90% ATK DMG** to all enemy partners, and an additional **200% DMG** to Sorcerer class partners.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **410%** damage, and deals **30%** Spread Shot DMG to other enemy Sorcerer partners.');
			partnerDescription.set('special', 'Attacks a single enemy and deals **ATK*168%** damage. Enemy sorcerer partners are attacked first.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*410% (+100%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases **DMG** Rate by **15%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Increases **CRIT** Rate by **30%** when attacking; Chance to use Special Skill **+15%**.');
			break;

		case "pan":
			partnerDescription.set('cost', '14');

			partnerDescription.set('passive', 'Every empty position on the battlefield increases Pan\'s ATK by **4.5%**. Unique Skill causes target to speak the truth from time to time, increasing Pan\'s **CRIT** Rate in battle by **15%**.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*380%** damage, reducing the target\'s Recovery Rate by **80%** for **3** rounds.');
			partnerDescription.set('special', 'Attacks a __single__ enemy and deals **ATK*156%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*380% (+100%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','Increases **CRIT Rate** by **15%**; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Restores **120** Rage; Chance to use Special Skill **+15%**.');
			break;

		case "saya":
			partnerDescription.set('cost', '10');

			partnerDescription.set('passive', 'Saya\'s unique skill has a **25%** chance of instantly killing enemy partner; equally effective against enemies with current Invincible or Death RES status.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*400%** damage. If the target is an enemy partner, deals additional damage equal to **150%** of max HP.');
			partnerDescription.set('special', 'Attacks a __single__ enemy and deals **ATK*162%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*400% (+100%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases the chance to instantly kill by **5%** for each **5%** ATK higher than the target\'s; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Increases **CRIT** by **35%** when attacking; Chance to use Special Skill **+15%**.');
			break;

		case "edward":
			partnerDescription.set('cost', '16');

			partnerDescription.set('passive', 'Steal **80%** Rage from the opponent\'s Spirit with the highest Rage and share them evenly to all allied Spirits.');
			partnerDescription.set('uniqueSkill', 'Deals DMG equal to **420%** of ATK and steals all of the __target\'s__ buffs. Stealing has no effect on enemy leader. A success stealing grants **6% CRIT** Rate for every stack. The effect lasts the entire battle and stacks up to **5** times.');
			partnerDescription.set('special', 'Deals DMG equal to **165%** of ATK to a __single__ target. Before attacking, he steals **1** buff. Stealing has no effect on the enemy leader. If it succeeds, it grants **8% CRIT** Rate. The effect lasts the entire battle and cannot stack.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Every stack increases **CRIT** Rate by **6% (+2%)**; Increase basic HP by **20%**');
			partnerDescription.set('fiveStar','Steal **100%** Rage from the opponent\'s Spirit with the highest Rage; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'A success stealing grants **8% (+4%) CRIT** Rate; Increases SKill Casting Rate by **15%**.');
			break;

		case "hotaru":
			partnerDescription.set('cost', '10');

			partnerDescription.set('passive', 'All Hotaru\'s attacks have a **28%/10%** chance of triggering a 1-hit/2-hit **combo**, dealing **150%/100% ATK DMG** to enemies in one __column__.');
			partnerDescription.set('uniqueSkill', 'Attacks an enemy __column__ and deals **ATK*210%** damage. Has **70%** chance to stun the target for **1** round.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*162%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals ATK*105% damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*210% (55%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases **CRIT** Rate by **15%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Has a **50%** chance to stun the target for **1** round when attacking; Chance to use Special Skill **+15%**.');
			break;

		case "gigi":
			partnerDescription.set('cost', '11');

			partnerDescription.set('passive', 'Every time Gigi takes an action, ATK increases by **16.5%**; stacks up to **5** times.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*380%** damage. Also [stuns] the target for **1** round.');
			partnerDescription.set('special', 'Attacks a __single__ enemy and deals **ATK*156%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*380% (+100%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','Increases DEF by **22%** when taking each action; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Increases DEF Penetration by **40%** when attacking; Chance to use Special Skill **+15%**.');
			break;
		
		case "mei":
			partnerDescription.set('cost', '12');

			partnerDescription.set('passive', 'When Mei dies, she deals **330% ATK DMG** to enemy partner with lowest HP; her own **CRIT** Rate in battle increases by **15%**.');
			partnerDescription.set('uniqueSkill', 'Attacks the __enemy partner__ with the lowest HP and deals **ATK*380%** damage.');
			partnerDescription.set('special', 'Attacks a __single__ enemy and deals **ATK*156%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*380% (+100%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar', 'Increases **CRIT** Rate by **15%**; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Increases **CRIT** by **50%** if target\'s HP is below **50%**; Chance to use Special Skill **+15%**.');
			break;

		case "selena":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'Selena gains **2** Immunity to Fatal DMG per battle.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*400%** damage, **35%** of which is used to heal the Leader.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*162%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*400% (+100%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases max HP by **33%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'The ally with the lowest HP is healed for **20%** of damage dealt; Chance to use Special Skill **+15%**.');
			break;

		case "angela":
			partnerDescription.set('cost', '18');

			partnerDescription.set('passive', 'When Angela appears, **1** dead Ally partner is revived with **70%** HP.');
			partnerDescription.set('uniqueSkill', 'Stops attacking and enters defensive mode. Unable to attack but increasses DMG RES Rate (cannot be dispelled) by **65%** and taunts the enemy team for 2 rounds.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*162%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Increases DMG RES Rate by **65% (+15%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Gains a shield that equals **30%** of HP%; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Increases DMG RES Rate by **15%** after taking action; Chance to use Special Skill **+15%**.');
			break;

		case "kiraya":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'When Kiraya appears, she grants a **40%** HP Shield.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*400%** damage. Grants a shield equal to **20%** of the caster\'s HP to allies in the same column.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*162%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*400% (+100%)**; Increases basic HP by **20%**');
			partnerDescription.set('fiveStar','Reduces enemy\'s Rage recovery by **60%** for **10** seconds when joining battle; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Gains a shield equal to **10%** of HP; Chance to use Special Skill **+15%**.');
			break;

		case "camille":
			partnerDescription.set('cost', '20');

			partnerDescription.set('passive', 'Before Camille appears, every partner death deducts **1** Energy.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*200%** damage, increasing Reflect Rate by **40%**.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*162%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*200% (50%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases max HP by **6.5%** each time an effect is triggered; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Restores HP by **10%**; Chance to use Special Skill **+15%**.');
			break;

		case "victoria":
			partnerDescription.set('cost', '14');

			partnerDescription.set('passive', 'When Victoria appears, she grants a **40%** HP Shield. If Saya and Nina are on the team, Shield value increases by an additional **15%**.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*400%** damage. Taunts all enemies for **2** rounds.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*162%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*400% (+100%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases Block Rate by **15%**; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Increases Block Rate by **20%** after taking action; Chance to use Special Skill **+15%**.');
			break;

		case "annie":
			partnerDescription.set('cost', '12');

			partnerDescription.set('passive', 'When Annie is present, DMG RES Rate of Ally Leader increases by **30%**');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **380%** damage, increasing her max HP by **30%**.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*156%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*380% (+100%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','Increases HP by **30%**; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Has a **40%** chance to stun the target for **1** round; Chance to use Special Skill **+15%**.');
			break;

		case "barinas":
			partnerDescription.set('cost', '17');

			partnerDescription.set('passive', 'When Barinas dies, he returns to the hand, receiving **120%** ATK and **88%** HP Max. Triggers **1** time per battle.');
			partnerDescription.set('uniqueSkill', 'Attacks enemies in a __cross pattern__ and deals **ATK*240%** damage. For each enemy hit, increase ATK by **5%** and DEF by **15%**.');
			partnerDescription.set('special',  'Attacks an enemy __column__ and deals **ATK*120%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals Damage equal to **ATK*400% (+100%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases Block Rate by **15%**; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Increase Block Rate by **20%** after taking action; Chance to use Special Skill **+15%**.');
			break;

		case "sachiko":
			partnerDescription.set('cost', '10');

			partnerDescription.set('passive', 'When Sachiko appears, she grants a **25%** HP Shield. Every 1 Tobunkai partner on the battlefield increases DMG Rate by an additional 8% and DMG RES Rate by an additional **8%**');
			partnerDescription.set('uniqueSkill', 'Attacks an enemy __row__ and deals **ATK*260%** damage. For each target hit, increases DMG RES Rate by **15%**.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*156%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*260% (+65%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','For each Tobunkai ally in the battle, increases DMG Rate and DMG RES Rate by **8%**; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Increases DMG RES Rate by **5%**; Chance to use Special Skill **+15%**.');
			break;

		case "yuffie":
			partnerDescription.set('cost', '14');

			partnerDescription.set('passive', 'When Yuffie is present, AOE DMG of all Ally units increases by **16.5%**, with effect doubled for Yuffie.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy __team__ and deals **ATK*210%** damage. Enemies with 14 or more energy take an additional **15%** damage.');
			partnerDescription.set('special',  'Attacks an enemy __column__ and deals **ATK*120%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*210% (+55%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increase ATK by **15%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Deals **15%** more damage to enemies with **14** or more energy; Chance to use Special Skill **+15%**.');
			break;

		case "hachishiki":
			partnerDescription.set('cost', '16');

			partnerDescription.set('passive', 'When Shiki Hachi is stunned, increases your DMG RES Rate by **30%**. When on the same team, Rie\'s DMG Rate and DMG RES are reduced by **80%**.');
			partnerDescription.set('uniqueSkill', 'Deals DMG equal to **ATK*265%** to **3** __random__ enemies; reduces the target\'s DMG RES Rate by **20%**. \nLasts the whole round and cannot be stacked, and has a **60%** chance to trigger Enrage, increase DMG by **100%**, and stuns the target for **1** round. After triggering Enrage, you will be free from Stun for **1** round.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*160%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals **ATK*265% (+55%)** DMG; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases DMG RES Rate by **50%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Increases **CRIT** Rate by **20%**; Chance to use Special Skill **+15%**.');
			break;

		case "rotania":
			partnerDescription.set('cost', '20');

			partnerDescription.set('passive', 'Every enemy partner on the battlefield increases Rotania\'s DMG Rate by **7%**.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy __team__ and deals **ATK*200% damage**. Enemy\'s summoned take **1.5** times more damage.');
			partnerDescription.set('special',  'Attacks an enemy __column__ and deals **ATK*120%** damage.');
			partnerDescription.set('attack', 'Attacks an enemy column and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*200% (+50%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases **CRIT** Rate by **3%** for each enemy partner in battle; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Increases **CRIT** Rate by **35%** when attacking; Chance to use Special Skill **+15%**.');
			break;

		case "nicola":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'Nicola\'s attacks decrease the target\'s DMG RES Rate by **33%**, lasts **3** rounds.');
			partnerDescription.set('uniqueSkill', 'Attacks __**2**__ enemies and deals **ATK*285%** damage. Enemies with high HP are attacked first.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*180%** damage. Enemies with the highest HP will be attacked first.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals **ATK*285% (+70%)** damage; increases number of targets by **1**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases Lifesteal Rate by **15%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Increases Lifesteal Rate by **15%** when attacking; Chance to use Special Skill **+15%**.');
			break;

		case "nina":
			partnerDescription.set('cost', '12');

			partnerDescription.set('passive', 'Every time Nina damages an enemy, her DMG Rate increases by 9%.');
			partnerDescription.set('uniqueSkill', 'Attacks an enemy __column__ and deals ATK*265% damage. For each target hit, increases CRIT Rate by 17%.');
			partnerDescription.set('special',  'Attacks a single enemy and deals ATK*162% damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals ATK*105% damage.');

			partnerDescription.set('fourStar', 'Deals ATK*265% (+65%) damage; Increase basic HP by 20%.');
			partnerDescription.set('fiveStar','Increases **CRIT** DMG by 25%; Increases basic ATK by 20%.');
			partnerDescription.set('sixStar', 'Increases **CRIT** Rate by 50% when attacking for **2** rounds; Chance to use Special Skill +15%.');
			break;

		case "fenebeth":
			partnerDescription.set('cost', '16');

			partnerDescription.set('passive', 'When Fenebeth appears, she places a curse on all enemy units, lasts **2** rounds. Curse: Every round the target takes damage equal to **60%** of caster\'s ATK, and all heals they receive are converted into DMG.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy __team__ and deals **ATK*200%** damage.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*182%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*200% (+50%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Casts a curse again when dying; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Reduces the target\'s ATK by **40%** for **2** rounds; Chance to use Special Skill **+15%**.');
			break;

		case "chiyo":
			partnerDescription.set('cost', '10');

			partnerDescription.set('passive', 'When Chiyo appearss, DMG Rate of allied Leaderr and all Sorcerer class partners in hand increases by **12%**. If there are more than **4** Sorcerers in the lineup, DMG Rate increases to **15%** for **3** rounds.');
			partnerDescription.set('uniqueSkill', 'Attacks an enemy __row__ and deals **ATK*265% damage**, increasing **CRIT** Rate by **35%**.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*156%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*265% (+65%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','Increases DMG Rate by **15%** if there are more than **4** Sorcerers in the lineup; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Increases DMG Rate of all Sorcerer allied partners by **10%**; Chance to use Special Skill **+15%**.');
			break;

		case "tiffany":
			partnerDescription.set('cost', '14');

			partnerDescription.set('passive', 'Tiffany\'s DMG to Summoned increases by **45%**, and her **CRIT** Rate in battle increases by **15%**.');
			partnerDescription.set('uniqueSkill', 'Attacks an enemy __row__ and deals **ATK*325%** damage. Enemy\'s summoned hit by this attack are killed immediately.');
			partnerDescription.set('special',  'Attacks an enemy __row__ and deals **ATK*120%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*260% (+65%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','Increases **CRIT** Rate by **15%**; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', ' Deals **40%** more damage to enemy\'s summoned; Chance to use Special Skill **+15%**.');
			break;

		case "anna":
			partnerDescription.set('cost', '18');

			partnerDescription.set('passive', 'When Anna is present, grants all allied partners **16.5%** DMG Rate.');
			partnerDescription.set('uniqueSkill', 'Restores HP equal to **ATK*265%** to __all__ allies and restores **300** Rage to herself.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*180%** damage.');
			partnerDescription.set('attack', 'Restores HP equal to **ATK*100%** to the ally with the lowest HP.');

			partnerDescription.set('fourStar', 'Restores HP equal to **ATK*265% (+65%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increase DMG RES Rate by **16.5%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Restores **100** Rage; Chance to use Special Skill **+15%**.');
			break;

		case "diana":
			partnerDescription.set('cost', '14');

			partnerDescription.set('passive', 'When Diana appears, Ally Leader restores **33%** HP.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*285%** damage, restoring all HP to the ally partner with the lowest HP, but reducing the partner\'s Recovery Rate by **70%**.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*168%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*285% (+70%)** and healing reduction is now **20%**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases Heal Rate (to self) by **15%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Restores HP equal to **ATK*120%** to the ally with the lowest HP; Chance to use Special Skill **+15%**.');
			break;

		case "jasmine":
			partnerDescription.set('cost', '13');

			partnerDescription.set('passive', 'When Jasmine is present, ATK of all Ally units in same rank increases by **11%**.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy with the __lowest__ HP and deals **ATK*265%** damage. Also restores HP equal to **ATK*280%** to the ally with the lowest HP.');
			partnerDescription.set('special',  'Attacks the enemy with the __lowest__ HP and deals **ATK*120%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*265% (+65%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','Increase target\'s DEF by **44%**; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Restores HP equal to **ATK*120%** to the ally with the lowest HP; Chance to use Special Skill **+15%**.');
			break;

		case "diamond":
			partnerDescription.set('cost', '16');

			partnerDescription.set('passive', 'Diamond\'s Heal Rate in battle increases by **15%**. When she appears, Ally partner with the lowest HP is returned to the hand, and receives **80%** ATK, and **55%** HP Max.');
			partnerDescription.set('uniqueSkill', 'Restores HP equal to **ATK*210%** to the 2 allies with the __lowest__ HP immediately, then restores HP equal to **ATK*50%** every round for **2** rounds. Also increases the targets\' ATK by **20%** and DEF by **20%** for **2** rounds.');
			partnerDescription.set('special',  'Attacks the enemy with the __lowest__ HP and deals **ATK*240%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Restores HP equal to **ATK*210% (+55%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','Increases Heal Rate (to self) by **15**%; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Restores **100** Rage; Chance to use Special Skill **+15%**.');
			break;

		case "phoebe":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'When Phoebe dies, she revives and receives **110%** ATK, **100%** DEF, **50%** HP, and **500** Rage. Triggers **1** time per battle.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy __team__ and deals **ATK*210%** damage, reducing the targets\' DEF by **25%** for **10** seconds.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*120%** damage.');
			partnerDescription.set('attack', 'Attacks a __single__ enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*210% (+55%)** and DEF reduction effect is now **50%**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases ATK by **15%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Grants a shield equal to **15%** of caster\'s HP to self and ally Leader; Chance to use Special Skill **+15%**.');
			break;

		case "vivian":
			partnerDescription.set('cost', '17');

			partnerDescription.set('passive', 'When Vivian appears, **6** Energy is deducted from the next partner to appear.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*380%** damage, increasing DEF by **50%** for **3** rounds.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*168%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*380% (+100%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Reduces **9** energy of the next partner to join battle; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Restores HP by **30%**; Chance to use Special Skill **+15%**.');
			break;

		case "amon":
			partnerDescription.set('cost', '13');

			partnerDescription.set('passive', 'When **3** or fewer enemies are present, Amon\'s ATK increases by **110%**.');
			partnerDescription.set('uniqueSkill', 'Revives a __single__ dead ally with **40%** HP and **800** Rage.');
			partnerDescription.set('special',  'Attacks an enemy __column__ and deals **ATK*120%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Revives an ally with **30% (+10%)** HP; Increase basic HP by **20%**.');
			partnerDescription.set('fourStar','Increases DEF by **110%** when skill effect is triggered; Increases basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Restores HP equal to **ATK*60%** to self and the revived ally; Chance to use Special Skill **+15%**.');
			break;

		case "harto":
			partnerDescription.set('cost', '16');

			partnerDescription.set('passive', 'Harto\'s DMG to Light and Spell class enemies increases by **33%**.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy __team__ and deals **ATK*190% damage**. For each enemy that is Light or Spell class, increases damage by **10%**.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*156%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*190% (+50%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','Increases **CRIT** Rate by **33%**; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Deals double damage to Light and Spell class enemies; Chance to use Special Skill **+15%**.');
			break;

		case "miyuki":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'All Miyuki\'s attacks decrease target\'s Rage by an additional **330**.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy __team__ and deals **ATK*215%** damage.');
			partnerDescription.set('special',  'Attacks enemies in one __column__, dealing **120%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*215% (+55%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Reduces enemy Leader\'s Rage by **200**; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Increase DEF Penetration by **30%** when attacking; Chance to use Special Skill **+15%**.');
			break;

		case "rikia":
			partnerDescription.set('cost', '12');

			partnerDescription.set('passive', 'When Rikia appears, all Ally debuffs are dispelled. Every debuff dispelled increases her HP Max by **16.5%**');
			partnerDescription.set('uniqueSkill', 'Attacks __all__ enemies and deals **ATK*195%** damage, and places one of the following debuffs on the enemy: [Stun], [Silence], reduces ATK by **20%**, or reduces DEF by **20%**');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*156%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*105% (+50%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','Increases DMG Rate by **16.5%**; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Silences the target for **2** rounds; Chance to use Special Skill **+15%**.');
			break;

		case "beatrice":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'When Beatrice appears, every Light, Healing, and Guardian class enemy on the enemy side increases her ATK by **12%**.');
			partnerDescription.set('uniqueSkill', 'Attacks enemies in a __cross pattern__ and deals **ATK*285%** damage. Has a **30%** chance to stun the target for **1** round.');
			partnerDescription.set('special',  'Attacks an enemy __column__ and deals **ATK*120%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*285% (+70%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','For each enemy that is Light, Heal, or Guardian class, increases HP by **9%** when joining battle; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Has a **30%** chance to stun the target for **1** round; Chance to use Special Skill **+15%**.');
			break;
		
		case "gagaku":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'When the Spirit Fox summoned by Gagaku dies, **132%** ATK DMG is dealt to the enemy unit with the lowest HP.');
			partnerDescription.set('uniqueSkill', 'Attacks an enemy __column__ and deals **ATK*265%** damage. Summons **3** spirit foxes to join the battle. The foxes inherit **100%** of Gagaku\'s ATK and have only **1** HP.');
			partnerDescription.set('special',  'Attacks an enemy __column__ and deals **ATK*168%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*265% (+65%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases DMG Rate by 15%; deals **ATK*132% (+18%)** damage when the fox dies; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Summons a spirit fox that inherits Gagaku\'s ATK by **100%** but with only **1** HP; Chance to use Special Skill **+15%**.');
			break;

		case "theenforcers":
			partnerDescription.set('cost', '19');

			partnerDescription.set('passive', 'When the Enforcers are not in play, every Ally partner of the Summon class that joins that battle requires **1** less Energy.');
			partnerDescription.set('uniqueSkill', 'Attack a __single__ enemy and deal **ATK*475%** damage. Vanessa and Lucy inherit **100%** of Betty\'s ATK, **100%** of her DEF, and **60%** of her HP. The **3** of them gain [Life Link]. Vanessa taunts the enemy team for **2** rounds.');
			partnerDescription.set('special',  'Attacks an enemy __column__ and deals **ATK*168%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*475% (+115%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases ATK by **5.5%** and max HP by **11%**; Increasesbasic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Increases **CRIT** Rate by **15%** when attacking; Chance to use Special Skill **+15%**.');
			break;

		case "ann":
			partnerDescription.set('cost', '14');

			partnerDescription.set('passive', 'When the Snow Queen is present, DMG Rate of all allies increases by 16.5%. When the Mermaid Princess is present, DMG RES Rate of all Allies is increased by **16.5%**.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*330%** damage. Also summons Mermaid Princess and Ice Queen to battle. They are unable to attack, but they inherit **100%** of Ann\'s DEF and **50%** of her HP.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*156%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to **ATK*330% (+85%)**; Increases basic HP by **20%**.');
			partnerDescription.set('fourStar','Increases DMG Rate by **16.5%**; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Restores **100** Rage; Chance to use Special Skill **+15%**.');
			break;

		case "ashwaya":
			partnerDescription.set('cost', '17');

			partnerDescription.set('passive', 'When a Wandering Nightmare dies, **100%** ATK DMG is dealt to enemy Sorcerer partners.');
			partnerDescription.set('uniqueSkill', 'Summons wandering nightmares that populate all empty spaces on your field. They inherit **95%** of Ashwaya\'s ATK, **0%** of her DEF and **50%** of her HP');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*240%** damage.');
			partnerDescription.set('attack', 'Attacks a __single__ enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Inherits **95% (+25%)** ATK from Ashwaya; Increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases ATK by **22%** for each wandering Nightmare present; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Restores **100** Rage; Chance to use Special Skill **+15%**.');
			break;

		case "frantiva":
			partnerDescription.set('cost', '13');

			partnerDescription.set('passive', 'When Frantiva dies, **3** Shadows are summoned. Shadows receive **120%** of her ATK, **50%** of her DEF, and **50%** of her HP.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*400%** damage, increasing her max HP by **25%**.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*168%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to ATK*400% (+100%); Increases basic HP by 20%.');
			partnerDescription.set('fiveStar','Self and clones take 40% less AOE damage; Increase basic ATK by 20%.');
			partnerDescription.set('sixStar', 'Increase DEF Penetration by 40% when attacking; Chance to use Special Skill +15%.');
			break;

		case "flora":
			partnerDescription.set('cost', '12');

			partnerDescription.set('passive', 'Flora splits into two units on her death. Puppet Nono receives **55%** ATK, **100%** DEF, and **100%** HP. Flora receives **100%** ATK, **50%** DEF, and **55%** HP.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*360%** damage.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*156%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals ATK*100% damage.');

			partnerDescription.set('threeStar', 'Deals damage equal to ATK*360% (+90%); Increases basic HP by 20%.');
			partnerDescription.set('fourStar','Increases HP by 15%; Increase basic ATK by 20%.');
			partnerDescription.set('fiveStar', 'Reduces target\'s DEF by 30% for 2 rounds; Chance to use Special Skill +15%.');
			break;
		
		case "penny":
			partnerDescription.set('cost', '14');

			partnerDescription.set('passive', 'When Penny appears, the ATK of the **2** Ally partners in hand with the highest Energy increases by **22%**, their **CRIT** Rate increases by **22%**.');
			partnerDescription.set('uniqueSkill', 'Penny attacks a __single__ enemy and deals **ATK*340%** damage.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*95%** damage.');

			partnerDescription.set('twoStar', 'Deals damage equal to **ATK*340% (+85%)**.');
			partnerDescription.set('threeStar','Increases DMG Rate by **15%** when joining battle; increases basic ATK and HP by **10%**.');
			partnerDescription.set('fourStar', 'Increases the ATK of the ally with the highest energy in hand by **15%**; chance to use special skill **+15%**.');
			break;

		case "alice":
			partnerDescription.set('cost', '10');

			partnerDescription.set('passive', 'When Alice dies, she increases the ATK of **1** partner on the battlefield and **1** partner in the hand by **22%**, and their DEF by **11%**.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*360%** damage, increases the DMG rate of Muscipula partners by **25%** for **3** rounds.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%**.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*95%** damage.');

			partnerDescription.set('twoStar', 'Deals damage equal to **ATK*360% (+90%)**.');
			partnerDescription.set('threeStar','Attribute-boost effects are doubled on Muscipula allies; increases basic ATK and HP by **10%**.');
			partnerDescription.set('fourStar', 'Increases ATK by **30%** for **3** rounds after using a skill; chance to use special skill **+15%**.');
			break;
		
		case "bontenmaru":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'Bontenmaru increases DMG RES rate by **22%**.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*340%** damage; Attack based enemy partners will be prioritized.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%**;Attack based enemy partners will be prioritized.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*85%** damage.');

			partnerDescription.set('twoStar', 'Deals damage equal to **ATK*340% (+95%)**.');
			partnerDescription.set('threeStar','Deals **44%** more damage to Attack classes; increases basic ATK and HP by **10%**.');
			partnerDescription.set('fourStar', 'Reduces DMG Rate of target by 20% for **2** rounds; chance to use special skill **+15%**.');
			break;
		
		case "carol":
			partnerDescription.set('cost', '9');

			partnerDescription.set('passive', 'For **3** rounds after Carol appears, every attack decreases target\'s ATK by **65%**, lasts 10 seconds.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*340%** damage, stealing **2** [enhance effects] from the target.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%**.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*95%** damage.');

			partnerDescription.set('twoStar', 'Deals damage equal to **ATK*340% (+85%)**.');
			partnerDescription.set('threeStar','Increases ATK by **20%** when joining battle; increases basic ATK and HP by **10%**.');
			partnerDescription.set('fourStar', 'Steals **1** buff from the target; chance to use special skill **+15%**.');
			break;

		case "loro":
			partnerDescription.set('cost', '11');

			partnerDescription.set('passive', 'When Loro appears, she grants a **44%** HP shield to herself.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*340%** damage, increasing Block Rate by **30%**.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%**.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*95%** damage.');

			partnerDescription.set('twoStar', 'Deals damage equal to **ATK*340% (+85%)**.');
			partnerDescription.set('threeStar','Increases Block Rate by **15%** when joining battle; increases basic ATK and HP by **10%**.');
			partnerDescription.set('fourStar', 'Increases Block Rate by **15%** when taking action; chance to use special skill **+15%**.');
			break;

		case "mary":
			partnerDescription.set('cost', '8');

			partnerDescription.set('passive', 'When Mary appears, DMG Rate of all Ally partners in hand increases by **15%**.');
			partnerDescription.set('uniqueSkill', 'Attacks an enemy __column__ and deals **ATK*230%** damage, adding [Burn] to the targets(deals **ATK*40%** DMG over **3** rounds).');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%**.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*95%** damage.');

			partnerDescription.set('twoStar', 'Deals damage equal to **ATK*230% (+60%)**.');
			partnerDescription.set('threeStar','Increases **CRIT** Rate by **15%** when joining battle; increases basic ATK and HP by **10%**.');
			partnerDescription.set('fourStar', 'Deals **30%** more damage to [Burned] enemies; chance to use special skill **+15%**.');
			break;

		case "mia":
			partnerDescription.set('cost', '12');

			partnerDescription.set('passive', 'When Mia dies, **55%** of her ATK and **55%** of her HP are transferred to the Ally Leader.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*340%** damage, reducing the target\'s DEF by **30%** for **2** rounds.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%**.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*95%** damage.');

			partnerDescription.set('twoStar', 'Deals damage equal to **ATK*340% (+85%)**.');
			partnerDescription.set('threeStar','Increases DMG Rate by **15%** when joining battle; increases basic ATK and HP by **10%**.');
			partnerDescription.set('fourStar', 'Increases DEF Penetration by **40%** when taking action; chance to use special skill **+15%**.');
			break;
		
		case "nanalie":
			partnerDescription.set('cost', '10');

			partnerDescription.set('passive', 'When Nanalie appears, ATK of all enemies decreases by **10%**, lasts **15** seconds');
			partnerDescription.set('uniqueSkill', 'Attacks an enemy __row__ and deals **ATK*250%** damage.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%**.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*95%** damage.');

			partnerDescription.set('twoStar', 'Deals damage equal to **ATK*250% (+65%)**.');
			partnerDescription.set('threeStar','Reduces target\'s DEF by **20%** when joining battle; increases basic ATK and HP by **10%**.');
			partnerDescription.set('fourStar', 'Increases DEF Penetration by **40%** when attacking; chance to use special skill **+15%**.');
			break;

		case "polly":
			partnerDescription.set('cost', '14');

			partnerDescription.set('passive', 'Polly\'s heals on Ally Leader are increased by **110%**.');
			partnerDescription.set('uniqueSkill', 'Polly restores HP equal to **ATK*140%** to entire team. Further increased to Leader by **ATK*100%** over **3** rounds.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*240%**.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*95%** damage.');

			partnerDescription.set('twoStar', 'Deals damage equal to **ATK*140% (+35%)**.');
			partnerDescription.set('threeStar','Increases Heal Rate by **15%** when joining battle; increases basic ATK and HP by **10%**.');
			partnerDescription.set('fourStar', 'Dispels an additional debuff on the target; chance to use special skill **+15%**.');
			break;

		case "rie":
			partnerDescription.set('cost', '12');

			partnerDescription.set('passive', 'Rie gains **1** Immunity to Fatal DMG per battle.');
			partnerDescription.set('uniqueSkill', 'Attacks 3 __random__ enemies and deals **ATK*225%** damage. \nHas a **60%** chance to trigger [Frenzy](not affected by Effect Hit), dealing **100%** additional damage and [stuns] the target for **1** round.  Own HP is reduced to **1** after [Frenzy] is triggered.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%**.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*95%** damage.');

			partnerDescription.set('twoStar', 'Deals damage equal to **ATK*225% (+55%)**.');
			partnerDescription.set('threeStar','Deals **28%** more damage to Guardian class enemies; increases basic ATK and HP by **10%**.');
			partnerDescription.set('fourStar', 'Restores HP by **15%** when taking action; chance to use special skill **+15%**.');
			break;

		case "astaroth":
			partnerDescription.set('cost', '12');

			partnerDescription.set('passive', 'When Astaroth dies, she restores 200 Rage to Leader and Barinas, restoring an additional **10%** HP to Leader.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy __team__ and deals **ATK*210%** damage; **8%** of DMG heals the Leader.');
			partnerDescription.set('special',  'Attacks an enemy __column__ and deals **ATK*105%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'TBD');
			partnerDescription.set('fiveStar','TBD');
			partnerDescription.set('sixStar', 'TBD');
			break;

		case "madhatter":
			partnerDescription.set('cost', '14');

			partnerDescription.set('passive', 'When the Mad Hatter appears, Alice, Jasmine, and Ann\'s DMG RES Rate increases by **30%**.');
			partnerDescription.set('uniqueSkill', 'Creates **2** Hats.  When a Hat is destroyed, enemy team takes **120%** DMG. Enemy Sorcerers take an additional **40%** DMG.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*100%** damage.');

			partnerDescription.set('threeStar', 'TBD');
			partnerDescription.set('fourStar','TBD');
			partnerDescription.set('fiveStar', 'TBD');
			break;

		case "yume":
			partnerDescription.set('cost', '16');

			partnerDescription.set('passive', 'When Yume is present, reduce Rage recovery of all enemies by **20**; increasing self DEF penetration by **25%**');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **ATK*420%** damage and stealing **200** rage from the target. If the target\'s rage is 0 at this time, the target will be stunned for one round.');
			partnerDescription.set('special',  'Attacks a __single__ enemy  and deals **ATK*165%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Steals 200(+100) Rage; increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','When Yume is on the field, increase allies DEF penetration by **25%**; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Increases DEF penetration by **15%** when Special is used in combat, cannot stack.; Chance to use Special Skill **+15%**.');
			break;

		case "natata":
			partnerDescription.set('cost', '13');

			partnerDescription.set('passive', 'When Natata appears, reduces DMG RATE of all enemy partners by **20%** for **2** rounds.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy __team__ and deals **ATK*210%** damage; DMG increases by **X%** for each empty space.');
			partnerDescription.set('special',  'Attacks a __single__ enemy  and deals **ATK*160%**');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*210% (+50%)**; increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','Reduces enemy DMG RATE by an additional **20%**; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Reduces enemy ATK by **40%** for **2** rounds when attacking; Chance to use Special Skill **+15%**.');
			break;

		case "alena":
			partnerDescription.set('cost', '16');

			partnerDescription.set('passive', 'Alena increases her DMG Rate by **3%** for every buff she dispells, max **6** times.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy __team__ and deals **ATK*210%** damage, dispelling **2** buffs at a time; Immunity buffs are prioritized.');
			partnerDescription.set('special',  'Attacks a __single__ enemy  and deals **ATK*160%**');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'When Unique Skill is used, cleanses **2** debuffs from all allies; increases basic HP by **20%**.');
			partnerDescription.set('fiveStar','DMG Rate increase per buff dispelled is now **5%**; Increase basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'When Special is used, heals the lowest health ally by **ATK*120%**; Chance to use Special Skill **+15%**.');
			break;

		case "brooke":
			partnerDescription.set('cost', '16');

			partnerDescription.set('passive', 'When Brooke is healed, she has a **20%** chance to use her Unique Skill(deals half damage when procced through this effect).');
			partnerDescription.set('uniqueSkill', 'Attacks an enemy __row__ and deals **ATK*240%**; For each Guardian on the field, increases the DMG Rate of Brooke by **30%**.');
			partnerDescription.set('special',  'Attacks a __single__ enemy  and deals **ATK*180%**');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*240% (+70%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases chance of proccing Unique Skill from healing by **5%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Grants a random ally a shield equal to **10%** of her own max HP; Chance to use Special Skill **+15%**.');
			break;

		case "taka":
			partnerDescription.set('cost', '16');

			partnerDescription.set('passive', 'When Taka is present, all Guardians\' reflect rate is increased by **30%**. ');
			partnerDescription.set('uniqueSkill', 'All allies instantly launch a **1** round attack, and reduces the cost of a random Guardian in hand by **4**.');
			partnerDescription.set('special',  'Attacks a __single__ enemy  and deals **ATK*162%**, also dealing **30%** splash damage to the enemy with the lowest health.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Grants all Guardian allies on the field a **2** turn taunt; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Reflect Rate becomes **50%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Splash DMG increases to **60%**; Chance to use Special Skill **+15%**.');
			break;

		case "ming":
			partnerDescription.set('cost', '16');

			partnerDescription.set('passive', 'When Ming is present, allies restore **10%** of their max HP after their actions. Ming and Guardian allies get double the healing amount.');
			partnerDescription.set('uniqueSkill', 'Restore HP equal to **ATK*220%** to all allies and increases their DEF by **25%**');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*180%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Restores HP equal to **ATK*220% (+65%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Passive healing increased to **15%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Removes **1** ally debuff; Chance to use Special Skill **+15%**.');
			break;

		case "okuni":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'Okuni reduces all single target DMG dealt to her by **30%**.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy __team__ and deals **ATK*210%** damage and gains **150** Rage for each enemy hit(MAX **450**).');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*168%** damage.');
			partnerDescription.set('attack', 'Attacks a __single__ enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*210% (+50%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Reduces single target DMG dealt to her by **40%** instead; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Grants two random allies a **100%** chance to proc their Specials for **1** turn; Chance to use Special Skill **+15%**.');
			break;

		case "junko":
			partnerDescription.set('cost', '13');

			partnerDescription.set('passive', 'When Junko dies, she is resurrected as a zombie and receives 100% ATK, 100% DEF, and 100% HP, but she can only cast normal attacks. Triggers only once.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy with the __lowest__ HP and deals **ATK*260%** damage.  \nIf the enemy\'s energy is > or = to 14, inflicts **Acrophobia**(Increases DMG taken by **100%**, does not affect enemy Leaders). \nHeals the two lowest HP allies for **ATK*120%**.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%** damage, reducing their Heal rate by **40%**.');
			partnerDescription.set('attack', 'Attacks a __single__ enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'TBD');
			partnerDescription.set('fiveStar','TBD');
			partnerDescription.set('sixStar', 'TBD');
			break;

		case "sakura":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'When Sakura dies, she is resurrected as a zombie and receives 100% ATK, 100% DEF, and 100% HP, but she can only cast normal attacks. Triggers only once.');
			partnerDescription.set('uniqueSkill', 'Attacks the enemy __team__ and deals **ATK*210%** damage.  All targets are inflicted with **Bad Luck**(Take **ATK*60%** DMG after every action). \nEnemies hit will also either recieve a __silence__, __stun__, or suffer an ATK or DEF reduction of **30%** for **1** round.');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%** damage, reducing their DMG rate by **20%**.');
			partnerDescription.set('attack', 'Attacks a __single__ enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'TBD');
			partnerDescription.set('fiveStar','TBD');
			partnerDescription.set('sixStar', 'TBD');
			break;

		case "ai":
			partnerDescription.set('cost', '16');

			partnerDescription.set('passive', 'When Ai dies, she is resurrected as a zombie and receives 100% ATK, 100% DEF, and 100% HP, but she can only cast normal attacks. Triggers only once.');
			partnerDescription.set('uniqueSkill', 'Attacks an enemy __row__ and deals **ATK*280%** damage. Targets hit will have a **50%** chance to be stunned for **1** round. \nAdditionally, for each enemy hit in the __row__, deal **ATK*120%** to a random enemy(max 3).');
			partnerDescription.set('special',  'Attacks a __single__ enemy and deals **ATK*150%** damage, reducing their DEF by **20%**.');
			partnerDescription.set('attack', 'Attacks a __single__ enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'TBD');
			partnerDescription.set('fiveStar','TBD');
			partnerDescription.set('sixStar', 'TBD');
			break;
		}

	return partnerDescription.get(typeToFind);
}

client.login(process.env.token);