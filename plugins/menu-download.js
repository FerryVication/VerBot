let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	let img = `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg` 
	let teks = `
 ┌   *ꜱᴜᴘᴘᴏʀᴛᴇᴅ ᴍᴇᴅɪᴀ*
 │   ${usedPrefix}storyanime
 │   ${usedPrefix}asupan
 │   ${usedPrefix}capcut
 │   ${usedPrefix}douyin
 │   ${usedPrefix}douyinslide
 │   ${usedPrefix}facebook
 │   ${usedPrefix}gdrive
 │   ${usedPrefix}instagram
 │   ${usedPrefix}krakendownload
 │   ${usedPrefix}mediafire
 │   ${usedPrefix}pinterest <keyword
 │   ${usedPrefix}play
 │   ${usedPrefix}soundcloud
 │   ${usedPrefix}spotify
 │   ${usedPrefix}spotifysearch
 │   ${usedPrefix}threads
 │   ${usedPrefix}tiktok
 │   ${usedPrefix}tiktokslide
 │   ${usedPrefix}twitter
 │   ${usedPrefix}ytmp3
 │   ${usedPrefix}ytmp4
 │   ${usedPrefix}yts <pencarian
 │   ${usedPrefix}ytshorts`
	conn.sendMessage(m.chat,{image: {url: img}, caption: teks }, { quoted: m })
}

handler.command = /^downloadermenu$/i
handler.limit = false
handler.register = false

module.exports = handler

function getRandomThreeDigitNumber() {
    const randomNumber = Math.floor(Math.random() * 44); // Menghasilkan angka acak antara 0 dan 43
    return String(randomNumber).padStart(3, '0'); // Mengonversi ke string dan menambahkan nol di depannya jika perlu
}