let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	let img = `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg` 
	let umurUser = global.db.data.users[m.sender].age
	let teks = `  
 ┌────···[ *xᴠɪᴅᴇᴏꜱ & xɴxx* ]···────✧
 │
 │	${usedPrefix}xvideossearch
 │	${usedPrefix}xnxxsearch 
 │	${usedPrefix}xnxxdown
 │	${usedPrefix}xvideosdown
 │	${usedPrefix}krakendl
 │
 ├────···[ *ᴀɴɪᴍᴇ ᴘɪᴄᴛ* ]···────
 │
 │  ◦ ${usedPrefix}ahegao
 │  ◦ ${usedPrefix}ass
 │  ◦ ${usedPrefix}bdsm
 │  ◦ ${usedPrefix}blowjob
 │  ◦ ${usedPrefix}cum
 │  ◦ ${usedPrefix}cuckold
 │  ◦ ${usedPrefix}ero
 │  ◦ ${usedPrefix}femdom
 │  ◦ ${usedPrefix}foot
 │  ◦ ${usedPrefix}gangbang
 │  ◦ ${usedPrefix}glasses
 │  ◦ ${usedPrefix}gifs
 │  ◦ ${usedPrefix}hentai
 │  ◦ ${usedPrefix}jahy
 │  ◦ ${usedPrefix}manga
 │  ◦ ${usedPrefix}masturbation
 │  ◦ ${usedPrefix}neko
 │  ◦ ${usedPrefix}orgy
 │  ◦ ${usedPrefix}pussy
 │  ◦ ${usedPrefix}panties
 │  ◦ ${usedPrefix}yuri
 │  ◦ ${usedPrefix}thighs
 └  ◦ ${usedPrefix}zettai`
 	if(umurUser < 17) throw 'Oopsss Kamu Belum Cukup Umur Untuk Mengakses Fitur Ini!'
	conn.sendMessage(m.chat,{image: {url: img}, caption: teks }, { quoted: m })
}
handler.command = /^nsfwmenu$/i
handler.limit = false
handler.private = true
handler.register = true

module.exports = handler

function getRandomThreeDigitNumber() {
    const randomNumber = Math.floor(Math.random() * 44); // Menghasilkan angka acak antara 0 dan 43
    return String(randomNumber).padStart(3, '0'); // Mengonversi ke string dan menambahkan nol di depannya jika perlu
}