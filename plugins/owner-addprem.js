let handler = async (m, { conn, args }) => {
    const { MessageType } = require('@adiwajshing/baileys');
    
    // Memecah args berdasarkan spasi
    let [nama, timeUnit, amount] = args;

    // Validasi input
    if (!nama || !timeUnit || !amount) throw 'Format : .addprem 628xxx h|m|j [jumlah]';
    
    let planning = parseInt(amount);
    if (isNaN(planning) || planning <= 0) throw 'Jumlah hari/jam/menit harus angka yang valid!';

    let duration;
    switch (timeUnit.toLowerCase()) {
        case 'h': // h untuk hari
            duration = planning * 86400000; // Konversi hari ke milidetik
            break;
        case 'm': // m untuk menit
            duration = planning * 60000; // Konversi menit ke milidetik
            break;
        case 'j': // j untuk jam
            duration = planning * 3600000; // Konversi jam ke milidetik
            break;
        default:
            throw 'Unit waktu tidak valid! Gunakan h untuk hari, j untuk jam, atau m untuk menit.';
    }

    if (global.prems.includes(nama.split`@`[0])) throw 'Dia sudah premium!';
    global.prems.push(`${nama.split`@`[0]}`);
    conn.reply(m.chat, `@${nama.split`@`[0]} sekarang premium selama ${planning} ${timeUnit === 'h' ? 'hari' : timeUnit === 'j' ? 'jam' : 'menit'}!`, m, {
        contextInfo: {
            mentionedJid: [nama]
        }
    });

    let usernya = nama + '@s.whatsapp.net';
    let mentionedJid = nama + '@s.whatsapp.net';
    let now = new Date() * 1;
    global.db.data.users[usernya].premium = true;
    if (now < global.db.data.users[usernya].premiumDate) global.db.data.users[usernya].premiumDate += duration;
    else global.db.data.users[usernya].premiumDate = now + duration;

    let nameNya = global.db.data.users[usernya].name;
    let today = new Date();
    let futureDate = new Date(now + duration);

    // Format Tanggal dan Waktu dalam Bahasa Indonesia
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    let _today = today.toLocaleDateString('id-ID', options);
    let _timeToday = today.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    let expired = futureDate.toLocaleDateString('id-ID', options);
    let _timeExpired = futureDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    let teksnya = `
    ┌────···[ *ᴠᴇʀʙᴏᴛx ꜱᴛᴏʀᴇ* ]···──────
    │
    │	ʜᴀʟʟᴏ ᴋᴀᴋ, ${nameNya} ☺️
    │
    ├────···[ *ɪɴꜰᴏʀᴍᴀꜱɪ* ]···───────
    │
    │  • ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ ᴛᴇʟᴀʜ ᴍᴇʟᴀᴋᴜᴋᴀɴ
    │ 	ᴘᴇᴍʙᴇʟɪᴀɴ ᴘᴀᴋᴇᴛ ᴘʀᴇᴍɪᴜᴍ ${planning} ${timeUnit === 'h' ? 'hari' : timeUnit === 'j' ? 'jam' : 'menit'}
    │
    │  • ᴘᴀᴅᴀ :
    │  	${_today} ${_timeToday}
    │
    │  • ʙᴇʀᴀᴋʜɪʀ ᴘᴀᴅᴀ  :
    │ 	${expired} ${_timeExpired}
    │
    ├────·────────────────────`;

    await conn.relayMessage(usernya, {
        extendedTextMessage: {
            text: teksnya,
            contextInfo: {
                mentionedJid: [mentionedJid]
            }
        }
    }, {})
}

handler.help = ['addprem 628xxx h|m|j [jumlah]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i
handler.limit = true
handler.rowner = true
handler.limit = 10000
handler.premium = true

module.exports = handler;