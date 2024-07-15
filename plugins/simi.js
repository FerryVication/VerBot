var fetch = require('node-fetch');

var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* .vr Siapa Kamu? `
//Set Logic Disini 
let logic = 'Hai Saya Adalah VerBotX,,Bot Whatsapp Yang Dikembangkan Oleh Ferry,Saya Bernama VerBotX,Saya Dibuat Oleh Ferry Dengan Penuh Kesempurnaan Yang Tiada Taraa,Jika Kamu Ingin Mencari Tau Lebih Dalam Tentang Ownerku Visit https://ferry.rf.gd'
  var js = await fetch(`https://aemt.me/simi?text=${text}`)
var json = await js.json()
try {
  await m.reply(json.result)
} catch (err ) {
m.reply(`${eror}`)
}}
handler.command = handler.help = ['simi','verbotx','vr'];
handler.premium = false
handler.register = true
handler.limit = true
module.exports = handler;