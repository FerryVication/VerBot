let handler = async (m, { text, args, conn, usedPrefix, command }) => {
	if (!text) throw `*Cara Pendaftaran :*\n\n${usedPrefix + command} nomor|username\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|ferry123`;
	let [nope, name] = text.split('|');
	jid = "6281779320971"
	jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
	let data = (await conn.onWhatsApp(jid))[0] || {};
    let teks = `#otp ${nope}|${name}`
    await conn.sendMessage(data.jid, {text: `#otp ${nope}|${name}`}, { quoted: m })
    m.reply(`Otp Telah Terkirim Silahkan Masukan Kode Unik Yang Dikirim ke Anda!`)
}
handler.command = /^(beta)$/i

module.exports = handler