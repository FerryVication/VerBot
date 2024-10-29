const cooldown = 86400000
const limit = ["10","10"]
let handler = async (m,{ conn, isPrems} ) => {
  let get = global.db.data.users[m.sender]
  let __timers = (new Date - get.lastclaim)
  let _timers = (86400000 - __timers) 
  let timers = clockString(_timers)
  let jb1 = "120363293840388632@g.us"
    if (m.chat == jb1) {
    
  if (new Date - get.lastclaim < cooldown) throw `Kamu Sudah Mengklaim Limit Gratis Untuk Hari Ini\n\Silahkan Tunggu\n\n\t *${timers}* \n\nUntuk Claimlimit Gratis Lagi`
  if ( isPrems ) throw `Kamu Adalah Pengguna Premium, Tidak Bisa Mengklaim Limit Gratis!`
  if (get.limit > 20 ) throw `*Oopss Jumlah Limit Kamu Sudah Mencapai Batas Yang Ditentukan* \n *Silahkan Upgrade ke Premium Agar Bisa Memiliki Limit Lebih Banyak* `
  let rendem = pickRandom(limit)
  let hasil = rendem
  let ditambah = parseInt(rendem.split(' '))
  get.limit += ditambah
  conn.reply(m.chat, `*Selamat Kamu Mendapatkan ${hasil} Limit Gratis*`, m)
  get.lastclaim = new Date * 1
  
  } else {
  conn.sendMessage(m.chat, {text: ' *Fitur Ini Hanya Bisa Digunakan di Dalam Group Khusus Klaim Limit* \n*Silahkan Gabung dan Pakailah Perintah .claimlimit Untuk Mengklaim Limit Gratis Setiap Harinya*', contextInfo: {
				externalAdReply: {
                    showAdAttribution: false,
                    title: 'Join sekarang',
					body: '',
					mediaTpe: 1,
					thumbnailUrl: "https://btch.pages.dev/file/c8e83855c0b8ccff9901a.jpg",
					sourceUrl: 'https://chat.whatsapp.com/HDKfeE44ckzKEmgzcatLSR',
					renderLargerThumbnail: true		
				}
			}
			}, {quoted: m})
			}
}
handler.help = ['claimlimit']
handler.command = /^(claimlimit)$/i
handler.group = false
handler.register = true
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
     let h = Math.floor(ms / 3600000)
     let m = Math.floor(ms / 60000) % 60
     let s = Math.floor(ms / 1000) % 60
     console.log({ms,h,m,s})
     return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
   }