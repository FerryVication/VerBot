let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	let img = `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg` 
	let teks = `  
 ┌────···[ *ɢᴀᴍᴇ ᴍᴇɴᴜ* ]···────✧
 │	${usedPrefix}asahotak
 │	${usedPrefix}caklontong
 │	${usedPrefix}tebakaku
 │	${usedPrefix}tebakhewan
 │	${usedPrefix}family100
 │	${usedPrefix}bomb
 │	${usedPrefix}iqtest
 │	${usedPrefix}math
 │	${usedPrefix}suitpvp
 │	${usedPrefix}susunkata
 │	${usedPrefix}tebakanime
 │	${usedPrefix}tebakgambar
 │	${usedPrefix}tebakbendera
 │	${usedPrefix}tictactoe [custom room name]
 │	${usedPrefix}werewolf
 │
 ├────···[ *ʀᴘɢ ᴍᴇɴᴜ* ]···────
 │
 │  ◦ ${usedPrefix}berburu
 │  ◦ ${usedPrefix}masak <masakan> <jmlh>
 │  ◦ ${usedPrefix}dapur
 │  ◦ ${usedPrefix}kandang
 │  ◦ ${usedPrefix}kerja
 │  ◦ ${usedPrefix}makan
 └  ◦ ${usedPrefix}tf`
	conn.sendMessage(m.chat,{image: {url: img}, caption: teks }, { quoted: m })
}
handler.command = /^rpgmenu$/i
handler.limit = false
handler.register = true

module.exports = handler

function getRandomThreeDigitNumber() {
    const randomNumber = Math.floor(Math.random() * 44); // Menghasilkan angka acak antara 0 dan 43
    return String(randomNumber).padStart(3, '0'); // Mengonversi ke string dan menambahkan nol di depannya jika perlu
}