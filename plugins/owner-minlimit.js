 /* 
Script By Reelly XD
  ï¿½ YT: 
  ï¿½ IG: 
Buy Script? 
  ï¿½ WA: +62 857-0436-85323
  ï¿½ TELE: t.me/rely_xd
  ï¿½ Github: github.com/ReellyXD
*/


const { MessageType } = require('@adiwajshing/baileys');

let handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'Masukkan jumlah limit yang ingin ditambahkan pada pengguna. Contoh: .addlimit @user 10';
  }
    
 	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '⏱️',
			key: m.key,
		}
	})

  let mentionedJid = m.mentionedJid[0];
  if (!mentionedJid) {
    throw 'Tag pengguna yang ingin kurangi limitnya. Contoh: .minlimit @user 10';
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
    };
  }

  users[mentionedJid].limit -= pointsToAdd;

  conn.reply(m.chat, `Berhasil Mengurangi ${pointsToAdd} limit @${mentionedJid.split('@')[0]}.`, m, {
    mentions: [mentionedJid]
  });
};

handler.help = ['minlimit @user <jumlah limit>'];
handler.tags = ['xp'];
handler.command = /^minlimit$/i;
handler.owner = true;

module.exports = handler;
