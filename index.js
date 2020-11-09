const { Client, MessageEmbed, DiscordAPIError, Channel } = require('discord.js');
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


client.once('ready', () => {
	console.log('rd');
});

client.on('message', async message => 
{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);

	const command = args.shift().toLowerCase();
    // ...
    if (command === 'help') {
        const str = 
            "add [summoner name] Adds a player to the list." +
            "\ndelete [summoner name] Deletes a player from the list." +
            "\nranks Lists all added players and their ranks."
        message.channel.send(str);
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
					.setColor('#00c3ff')
					.setTitle('__**' + name.charAt(0).toUpperCase() + name.slice(1) + '**__ :large_blue_diamond: ' + partnerDataBase(name, 'cost'))
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
					);
					message.channel.send(embed);
			}
			else if(rarity.get(name) === "SR")
			{
				const embed = new MessageEmbed()
					.setColor('#00c3ff')
					.setTitle('__**' + name.charAt(0).toUpperCase() + name.slice(1) + '**__ :large_blue_diamond: ' + partnerDataBase(name, 'cost'))
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

		}
	}

});

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
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals ATK*400% damage. Has a 80%/25% chance to trigger a 1-hit / 2-hit __combo__, dealing **135%/100%** damage.');
			partnerDescription.set('special', 'Attacks a __single__ enemy and deals **ATK*162%** damage.');
			partnerDescription.set('attack', 'Attacks a single enemy and deals **ATK*105%** damage.');

			partnerDescription.set('fourStar', 'Deals damage equal to **ATK*400% (+100%)**; Increase basic HP by **20%**.');
			partnerDescription.set('fiveStar','Increases ATK by **15%**; Increases basic ATK by **20%**.');
			partnerDescription.set('sixStar', 'Deals **50%** of damage dealt to the enemy Leader if the target is an enemy partner; Chance to use Special Skill **+15%**.');
			break;

		case "hersey":
			partnerDescription.set('cost', '15');

			partnerDescription.set('passive', 'When Hersey appears, she deals **90% ATK DMG** to all enemy partners, and an additional **200% DMG** to Sorcerer class partners.');
			partnerDescription.set('uniqueSkill', 'Attacks a __single__ enemy and deals **410%** damage. Enemy sorcerers will be attacked first.');
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
			partnerDescription.set('sixStar', ' Has a **50%** chance to stun the target for **1** round when attacking; Chance to use Special Skill **+15%**.');
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
			partnerDescription.set('fourStar','Increases **CRIT** Rate by **15%**; Increase basic ATK by **20%**.');
			partnerDescription.set('fiveStar', 'Increases **CRIT** by **50%** if target\'s HP is below **50%**; Chance to use Special Skill **+15%**.');
			break;
	}

	return partnerDescription.get(typeToFind);
}


client.login('bot-token');