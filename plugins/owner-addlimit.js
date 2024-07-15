const { MessageType } = require('@adiwajshing/baileys');
let handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'Masukkan jumlah limit yang ingin ditambahkan pada pengguna.';
  }
    
 	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '♥️',
			key: m.key,
		}
	})

  let mentionedJid = text.split(' ')[0]+'@s.whatsapp.net'
  const ferry = "6285133756729@s.whatsapp.net";
  if ( m.chat === ferry ) {
  	let {name, pasangan, money, bank, lastclaim, premiumDate, premium, registered, regTime, age } = global.db.data.users[mentionedJid]
  	if (!mentionedJid) {
  		throw 'Tag pengguna yang ingin ditambahkan limitnya. Contoh: .addlimit @user 10';
	}
	let pointsToAdd = parseInt(text.split(' ')[1]);
	if (isNaN(pointsToAdd)) {
		throw 'Jumlah limit yang dimasukkan harus berupa angka. Contoh: .addlimit @user 10';
	}
	let users = global.db.data.users;
	if (!users[mentionedJid]) {
		users[mentionedJid] = {
			limit: 0,
			exp: 0,
			lastclaim: 0
		}
	}
	users[mentionedJid].limit += pointsToAdd;
	let limitSekarang = users[mentionedJid].limit
	// Mengirim Pesan Pemberitahuan Kepada User Yang Dikirim Limit 
	conn.reply(m.chat, `Berhasil menambahkan ${pointsToAdd} limit untuk @${mentionedJid.split('@')[0]}.`, m, {
    	mentions: [mentionedJid]
  	});
  	let teks = `*Hallo Kak ${registered ? name : ''} ☺️, Selamat Kamu Mendapatkan ${pointsToAdd} Limit Dari Owner🤩, Sisa Limit Kamu Sekarang : ${limitSekarang} Limit*`
  	await conn.relayMessage(mentionedJid, {
                extendedTextMessage:{
                text: teks, 
                contextInfo: {
                mentionedJid: [mentionedJid]
                }
          }}, {})
	} else {
		m.reply('Lu Siapa Anjir, Command ini Khusus Owner Kocak!');
	};
	};


handler.command = /^addlimit$/i;
handler.rowner = true;
handler.owner = true;
handler.limit = true;
module.exports = handler;