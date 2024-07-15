let fetch = require('node-fetch')
let handler = async (m, { args }) => {
if (!args[0]) throw `Masukan Apikey!`
  try {
    let api = await fetch(`https://api.betabotz.eu.org/api/checkkey?apikey=${args[0]}`).then(result => result.json());
    let todayHit = api.result.todayHit
    let totalHit = api.result.totalHit
    let limit = api.result.limit
    let exp = api.result.expired
    m.reply(`*D A T A  S T A T I S T I K*\n🤲 Limit Tersisa : ${limit}\n📆 Expired : ${exp}\n📝 Today Hit : ${todayHit}\n📊 Total Hit : ${totalHit}`) 
  } catch (e) {
    console.log(e) 
    m.reply('Apikey tidak terdaftar!')
  }
}          
handler.command = /^cekreq$/i;
handler.private = true
handler.owner = true
module.exports = handler;
