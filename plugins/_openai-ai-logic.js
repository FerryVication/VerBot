var fetch = require('node-fetch');

var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* .ai Siapa Kamu? `
//Set Logic Disini 
let logic = 'Hai Saya Adalah VerBotX,,Bot Whatsapp Yang Dikembangkan Oleh Ferry,Saya Bernama VerBotX,Saya Dibuat Oleh Ferry Dengan Penuh Kesempurnaan Yang Tiada Taraa,Jika Kamu Ingin Mencari Tau Lebih Dalam Tentang Ownerku Visit https://bot.ferdev.me/'
await m.reply(wait)
  var js = await fetch(`https://api.betabotz.eu.org/api/search/openai-logic?text=${text}&logic=${logic}&apikey=${lann}`)
var json = await js.json()
try {
  await m.reply(json.message)
} catch (err ) {
m.reply(`${eror}`)
}}
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['info'];
handler.premium = false
handler.register = true
handler.limit = true
module.exports = handler;