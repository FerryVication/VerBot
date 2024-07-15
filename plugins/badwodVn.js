let handler = async (m, { conn, isPrems}) => {
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let warne = global.db.data.users[m.sender].warn
// AUTO KICK JIKA TOXIC
if (isPrems ) {
	throw 'Gaboleh Gitu Sayangg!😠';
} else {
	if(warne === 5) {
		m.reply("Kamu Telah Berkata Kasar Lebih Dari 5 Kali, Kamu Akan di Kick!");
		await sleep(3000);
		await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
		global.db.data.users[m.sender].warn = 0
	} else {
		global.db.data.users[m.sender].warn += 1
		m.reply(`*Kamu Telah Berkata Kasar Sebanyak ${global.db.data.users[m.sender].warn} Kali, Jika Kamu Berkata Kasar Lebih Dari 5 Kali Kamu Akan di Kick!*`)
	}
}

}
handler.customPrefix = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // tambahin sendiri

handler.limit = false
handler.group = true
handler.command = new RegExp
module.exports = handler