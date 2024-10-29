// Module
// Code by Feri
let PhoneNumber = require('awesome-phonenumber');
let levelling = require('../lib/levelling');
const { createHash } = require('crypto');
const axios = require ("axios");
const fetch = require("node-fetch");
// Mulai
let handler = async(m, { conn, text, usedPrefix, command, isPrems }) => {
	// User nya
	let who = m.sender
	// Data dari Database
	let { name, age, email, limit, money, premiumDate, premium, regTime, level, role, registered } = global.db.data.users[who]
	// Untuk Photo Profile
	let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png");
	// Untuk Serial Number nya
	let sn = createHash('md5').update(m.sender).digest('hex');
	// Tanggal Terdaftar
	let datee = new Date(regTime);
	let regiss = datee.toISOString().slice(0,19).replace('T',' ');
	// Captione
	let nama = name.toUpperCase();
	let cp =`*✧────···[ ᴘʀᴏꜰɪʟ ᴋᴀᴍᴜ ]···────✧*
\t						*${nama}*
					${isPrems ? 'ᴘʀᴇᴍɪᴜᴍ ᴜꜱᴇʀ👑' : 'ꜰʀᴇᴇ ᴜꜱᴇʀ😜'}\n
├────···[ *ɪɴꜰᴏʀᴍᴀꜱɪ ᴘʀɪʙᴀᴅɪ* ]···────✧
│⬡ *ɴᴀᴍᴀ : ${registered ? name : ''}*
│⬡ *ᴜᴍᴜʀ : ${age} ᴛᴀʜᴜɴ*
│⬡ *ʀᴏʟᴇ : ${role}*
│⬡ *ʟᴇᴠᴇʟ : ${level}*
│⬡ *ᴇᴍᴀɪʟ : ʜɪᴅᴅᴇɴ*
│⬡ *ɴᴏᴍᴏʀ* : ${who.replace('@s.whatsapp.net', '')}
│⬡ *ꜱᴇʀɪᴀʟ* :
│⬡ *${sn}*
│⬡ *ʟɪᴍɪᴛ* : ${isPrems ? 'ᴜɴʟɪᴍɪᴛᴇᴅ' : limit}
│⬡ *ᴍᴏɴᴇʏ* : Rp. ${money}
│⬡ *ᴛᴇʀᴅᴀꜰᴛᴀʀ* : 
│⬡ ${registered ? `*ʏᴀ, ᴘᴀᴅᴀ : ${regiss}*` : 'No'}
│⬡ *ᴘʀᴇᴍɪᴜᴍ* : ${isPrems ? '*ᴛᴇɴᴛᴜ*' : 'ᴛɪᴅᴀᴋ'}
│⬡ *ᴇxᴘɪʀᴇᴅ* : ${isPrems ? msToDate(premiumDate - new Date() * 1) : 'ᴛɪᴅᴀᴋ ᴘʀᴇᴍɪᴜᴍ'}
╰━━━━━━━━━━━━━━━━┈─◂`.trim()
     let mentionedJid = [who]
 	conn.sendFile(m.chat, pp, 'pp.jpg', cp, m, false, { contextInfo: { mentionedJid: conn.parseMention(cp) }})
 }
handler.help = ['profil','profile']
handler.tags = ['info']
handler.command = /^profile|profil$/i
handler.limit = false
handler.register = true

module.exports = handler

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" ʜᴀʀɪ "+hours+" ᴊᴀᴍ "+ minutes + " ᴍᴇɴɪᴛ";
		// +minutes+":"+sec;
  }