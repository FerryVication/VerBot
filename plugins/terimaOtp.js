let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `error`
    let [nope, name] = text.split('|');
    jid = "6288225349583"
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    let teks = `*<#> Your Otp Code Is* : \n\n\t.otpReceived Tytyd\n\nSalin Kode Diatas Lalu Kirim Ke Bot Pendaftaran!`
    await conn.sendMessage(data.jid, {text: teks}, { quoted: m })
}
handler.command = /^(otp)$/i

module.exports = handler