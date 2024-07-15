let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	let img = `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg` 
	let teks = `
 ┌  ◦ *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
 │  ◦ ${usedPrefix}qc
 │  ◦ ${usedPrefix}attp
 │  ◦ ${usedPrefix}stikapple
 │  ◦ ${usedPrefix}stikkddi
 │  ◦ ${usedPrefix}stikgoogle
 │  ◦ ${usedPrefix}stikdocomo
 │  ◦ ${usedPrefix}stiksoftbank
 │  ◦ ${usedPrefix}stikhtc
 │  ◦ ${usedPrefix}stikmozilla
 │  ◦ ${usedPrefix}stiklg
 │  ◦ ${usedPrefix}stikopenmoji
 │  ◦ ${usedPrefix}stikemojipedia
 │  ◦ ${usedPrefix}stikjoypixels
 │  ◦ ${usedPrefix}stikopenmoji
 │  ◦ ${usedPrefix}stikfacebook
 │  ◦ ${usedPrefix}stikskype
 │  ◦ ${usedPrefix}stikwhatsapp
 │  ◦ ${usedPrefix}stiktwitter
 │  ◦ ${usedPrefix}stiksamsung
 │  ◦ ${usedPrefix}stikmicrosoft
 │  ◦ ${usedPrefix}emojimix
 │  ◦ ${usedPrefix}getexif
 │  ◦ ${usedPrefix}togif
 │  ◦ ${usedPrefix}tovideo
 │  ◦ ${usedPrefix}toimg
 │  ◦ ${usedPrefix}dinokuning
 │  ◦ ${usedPrefix}patrick
 │  ◦ ${usedPrefix}spongebob
 │  ◦ ${usedPrefix}doge
 │  ◦ ${usedPrefix}manusialidi
 │  ◦ ${usedPrefix}sdoge
 │  ◦ ${usedPrefix}smeme <teks> | <teks>
 │  ◦ ${usedPrefix}stiker
 │  ◦ ${usedPrefix}toimg ( reply stiker )
 │  ◦ ${usedPrefix}wm 
 │  ◦ ${usedPrefix}tourl <reply image>
 └ `
	conn.sendMessage(m.chat,{image: {url: img}, caption: teks }, { quoted: m })
}

handler.command = /^stickermenu$/i
handler.limit = false
handler.register = true

module.exports = handler

function getRandomThreeDigitNumber() {
    const randomNumber = Math.floor(Math.random() * 44); // Menghasilkan angka acak antara 0 dan 43
    return String(randomNumber).padStart(3, '0'); // Mengonversi ke string dan menambahkan nol di depannya jika perlu
}