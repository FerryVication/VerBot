global.owner = ['6285133756729']  
global.mods = ['6285133756729'] 
global.prems = ['6285133756729']
global.nameowner = 'FeriPratama'
global.numberowner = '6285133756729'
global.mail = 'support@ferdev.me' 
global.gc = 'https://chat.whatsapp.com/Ft15fDnJ3swBQqieMXs3af'
global.instagram = 'https://instagram.com/ferry_vication'
global.wm = 'VerBotX'
global.wait = '⏱️ _*Tunggu ya... sedang di proses...*_'
global.eror = '🖥️ _*Oooppsss.....Server Sedang Error*_'
global.stiker_wait = '⏳ *Stiker sedang dibuat....*'
global.packname = '𝙼𝚊𝚍𝚎 𝚆𝚒𝚝𝚑'
global.author = '© 𝚅𝚎𝚛𝙱𝚘𝚝𝚇'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'beta-verbotxv2' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'YOUR_APIKEY_HERE'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'APIKEY', 
  'https://api.botcahx.eu.org': 'APIKEY'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})