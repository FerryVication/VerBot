let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	let img = 'https://telegra.ph/file/cdb3af32e81dfbd7b6eb9.jpg'
	let teks = `
> MENU GAME BY VERBOTX
> ────────────────
> ${usedPrefix}asahotak
> ${usedPrefix}caklontong
> ${usedPrefix}tebakaku
> ${usedPrefix}family100
> ${usedPrefix}bomb
> ${usedPrefix}iqtest
> ${usedPrefix}math <mode>
> ${usedPrefix}suitpvp
> ${usedPrefix}susunkata
> ${usedPrefix}tebakanime
> ${usedPrefix}tebakgambar
> ${usedPrefix}tebakbendera
> ${usedPrefix}tictactoe [custom room name]
> ${usedPrefix}werewolf
> ────────────────\n`
	conn.sendMessage(m.chat,{image: {url: img}, caption: teks }, { quoted: m })
}

handler.command = /^gamemenu$/i
handler.limit = false
handler.register = true

module.exports = handler