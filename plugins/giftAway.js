const cooldown = 86400000
let fetch = require('node-fetch')
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
      throw `Masukan Kode Random Yang di Dapat Dari Admin!\n\ncontoh:\n${usedPrefix + command} Fer_76667`
    }
    m.reply('⏱️ *Mohon tunggu... Sedang Mengecek Kode*');
    await sleep(5000);
  let src = await (await fetch('https://raw.githubusercontent.com/CyberCarboon2/FileServer/main/giftAway.json')).json()
  let limite = src.limit
  let get = global.db.data.users[m.sender]
  let reff = src.kodeReff
  let ditambah = parseInt(limite.split(' '))
  if ( args[0] == reff ) {
  	if (new Date - get.lastduel < cooldown) throw `🗿 *Kamu Sudah Menggunakan Kode Tersebut!*`
  	get.limit += ditambah
  	m.reply(`🥳 *Selamat Kode Reff Yang Kamu Pakai Benar Kamu Mendapatkan*\n↪️ ${limite} Limit`)
  	get.lastduel = new Date * 1
	} else {
		m.reply("👻Sayang Sekali Kode Yang Kamu Masukkan Tidak Terdaftar Atau Sudah Kadaluarsa")
	}
}

handler.help = ['getreff']
handler.tags = ['game']
handler.command = /^getreff$/i
handler.limit = false
handler.register = true
handler.private = true

module.exports = handler