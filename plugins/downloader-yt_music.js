const axios = require('axios');

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Masukan URL! Dari YouTube Music\n\ncontoh:\n${usedPrefix + command} https://music.youtube.com/watch?v=ppqvHXvkj-s`;    
   
        if (!text) throw 'masukan link youtube music';   
        m.reply(wait);      
        const response = await axios.get(`https://api.betabotz.eu.org/api/download/allin?url=${text}&apikey=${lann}`); 
        const mp3 = response.result.medias.find(media => media.extension === 'mp3');
        const res = response.result;      
        var { title, source, duration } = res;
        let caption = `*Title:* ${title}\n*Duration:* ${duration}`
        // await conn.sendFile(m.chat, mp3, null, m);
        await conn.sendMessage(m.chat, { 
            document: { url: mp3 }, 
            mimetype: 'audio/mpeg',
            fileName: `${title}.mp3`,
            caption: caption
        }, { quoted: m });
};
handler.help = ['ytmusic'];
handler.command = /^(ytmusic)$/i
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
handler.register = true;

module.exports = handler;