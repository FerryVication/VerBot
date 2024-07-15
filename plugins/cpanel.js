let fetch = require('node-fetch')
let handler = async function (m, { text, usedPrefix }) {
	if (!text) throw `*Penggunaan .cpanel username,nomor!*`
	let t = text.split(',');
	let username = t[0];
	let u = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
	let name = username
	let domaine =  'https://self.ferdev.me'
	let egg = "15"
	let loc = "1"
	let apikey = "ptla_CkZTQQbjmfOX5GmCJ2gsLUh0rQHFJBsgXKt5Z7HHnP9"
	let memo = "2048"
	let cpu = "100"
	let disk = "2048"
	let email = username + "@ferdev.me"
	akunlo = "https://telegra.ph/file/ec98bc1a80136b9138d03.jpg" 
	if (!u) return
	let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
	let password = username + "626"
	let f = await fetch(domaine + "/api/application/users", {
		"method": "POST",
		"headers": {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": "Bearer " + apikey
		},
		"body": JSON.stringify({
			"email": email,
			"username": username,
			"first_name": username,
			"last_name": username,
			"language": "en",
			"password": password
		})
	})
	let data = await f.json();
	if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
	let user = data.attributes
	let f2 = await fetch(domaine + "/api/application/nests/5/eggs/" + egg, {
		"method": "GET",
		"headers": {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": "Bearer " + apikey
		}
	})
	m.reply(`Successfully Create Free Cloud Server With ID: ${user.id}`)
	ctf = `Hello @${u.split`@`[0]}

╭─❏ *『 USER INFO 』*
┣⎙ ➤ *📧EMAIL* : ${email}
┣⎙ ➤ *👤USERNAME* : ${username}
┣⎙ ➤ *🔐PASSWORD* : ${password}
┣⎙ ➤ *🌐LINK LOGIN* : 
┣⎙ ➤ ${domaine}
┗⬣


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
*SERVER YANG TIDAK AKTIF AKAN LANGSUNG DI SUSPEND*
================================================
`
	await conn.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
	let data2 = await f2.json();
	//let startup_cmd = data2.attributes.startup
	let f3 = await fetch(domaine + "/api/application/servers", {
		"method": "POST",
		"headers": {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": "Bearer " + apikey,
		},
		"body": JSON.stringify({
			"name": name,
			"description": "Free Cloud Server",
			"user": user.id,
			"egg": parseInt(egg),
			"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
			"startup": "node index.js",
			"environment": {
				"INST": "npm",
				"USER_UPLOAD": "0",
				"AUTO_UPDATE": "0",
				"JS_FILE": "index.js",
				"CMD_RUN": "npm start",
				"STARTUP_CMD": "node index.js"
			},
			"limits": {
				"memory": memo,
				"swap": 0,
				"disk": disk,
				"io": 500,
				"cpu": cpu
			},
			"feature_limits": {
				"databases": 0,
				"backups": 3,
				"allocations": 0
			},
			deploy: {
				locations: [parseInt(loc)],
				dedicated_ip: false,
				port_range: [],
			},
		})
	})
	let res = await f3.json()
	if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
	let server = res.attributes
	let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*
▬▭▬▭▬▭▬▭▬▭▬▭▬
TYPE: User
▬▭▬▭▬▭▬▭▬▭▬▭▬
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}
▬▭▬▭▬▭▬▭▬▭▬▭▬
*Password telah dikirim ke @${u.split`@`[0]}*
`)
}

handler.command = /^(cpanel)$/i
handler.private = true
handler.owner = true
module.exports = handler