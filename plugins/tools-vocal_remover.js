const fetch = require('node-fetch');
const uploader = require('../lib/uploadFile');

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/audio/.test(mime)) {
        let buffer = await q.download();
        await m.reply(wait);
        try {
            let fileSizeLimit = 5 * 1024 * 1024;
            if (buffer.length > fileSizeLimit) {
                throw '*Ukuran Media Tidak Boleh Melebihi 5MB*';
            }
            let media = await uploader(buffer);
            let response = await fetch(`https://api.betabotz.eu.org/api/tools/voiceremover?url=${media}&apikey=${lann}`);
            let res = await response.json();
            if (!res.status) {
                throw null
            }
            if (command === 'hapusvocal') {
            	let cp = 'Vocal Remover by VerBotX'
            	await conn.sendMessage(m.chat, {
            		document: { url: res.result.instrumental_path }, 
            		mimetype: 'audio/mpeg',
            		fileName: 'noVocal.mp3',
            		caption: cp
            	}, { quoted: m });
                // await conn.sendMessage(m.chat, { audio: { url: res.result.instrumental_path }, mimetype: 'audio/mpeg' }, { quoted: m });
            } else if (command === 'hapusmusic') {
            	let cp2 = 'Instrumen Remover by VerBotX'
            	await conn.sendMessage(m.chat, {
            		document: { url: res.result.vocal_path },
            		mimetype: 'audio/mpeg',
            		fileName: 'noMusik.mp3',
            		caption: cp2
            	}, { quoted: m });
                // await conn.sendMessage(m.chat, { audio: { url: res.result.vocal_path }, mimetype: 'audio/mpeg' }, { quoted: m });
            }
        } catch (e) {
            throw '*[ 505 SERVER ERROR! ]*'
        }
    } else {
        await m.reply(`Balas / Kirim *audio* dengan Perintah ${usedPrefix + command}`);
    }
}

handler.command = handler.help = ['hapusvocal', 'hapusmusik'];
handler.tags = ['tools'];
handler.limit = true;
handler.register = true;

module.exports = handler;
