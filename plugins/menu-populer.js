let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	let img = `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg` 
	let teks = `
 ┌   *ꜰɪᴛᴜʀ ᴘᴏᴘᴜʟᴇʀ*
 │   ${usedPrefix}ai
 │   ${usedPrefix}autoai
 │   ${usedPrefix}remini
 │   ${usedPrefix}recolor
 │   ${usedPrefix}stiker
 │   ${usedPrefix}play
 │   ${usedPrefix}limit
 │   ${usedPrefix}removebg
 │   ${usedPrefix}hd
 │   ${usedPrefix}menfess`
	conn.sendMessage(m.chat,{image: {url: img}, caption: teks }, { quoted: m })
}

handler.command = /^populerfitur$/i
handler.limit = false
handler.register = false

module.exports = handler

function getRandomThreeDigitNumber() {
    const randomNumber = Math.floor(Math.random() * 44); // Menghasilkan angka acak antara 0 dan 43
    return String(randomNumber).padStart(3, '0'); // Mengonversi ke string dan menambahkan nol di depannya jika perlu
}