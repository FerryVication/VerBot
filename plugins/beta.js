const fetch = require('node-fetch');
const cheerio = require('cheerio');

let handler = async (m, { conn }) => {
  let uptime = await fetch(`https://api.betabotz.eu.org/main/statistic`)
    .then(response => response.text());
  let message = `${uptime}`
m.reply(message)
};

handler.help = ['beta']
handler.customPrefix = /^(beta)$/i 
handler.command = new RegExp

module.exports = handler;