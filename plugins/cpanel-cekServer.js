let fetch = require('node-fetch')
let handler = async function (m, { text, args, usedPrefix }) {
	let page = args[0] ? args[0] : '1';
	let domaine = 'https://ferdev.me'
	let apipltc = 'ptlc_ptWOtbwGW0buNb9xCrPZts6DrEJMKV3wSRlij7X4vV1'
	let f = await fetch(domaine + "/api/application/servers?page=" + page, {
		"method": "GET",
		"headers": {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": "Bearer " + apipltc
		}
	});
	let res = await f.json();
	let servers = res.data;
	let sections = [];
	let messageText = "List Server BY VERBOTX  :\n\n";
	for (let server of servers) {
		let s = server.attributes;
		let f3 = await fetch(domaine + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
			"method": "GET",
			"headers": {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer " + apipltc
			}
		});
		let data = await f3.json();
		let status = data.attributes ? data.attributes.current_state : s.status;
		messageText += `ID Server : ${s.id}\n`;
		messageText += ` Nama Server : ${s.name}\n`;
		messageText += ` Status : ${status}\n\n`;
	}
	messageText += `Halaman : ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
	messageText += `Total Server : ${res.meta.pagination.count}`;
	await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
	
	if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    newReply(`Gunakan perintah ${usedPrefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}}
handler.command = /^(cekserver)$/i
handler.private = true
handler.owner = true
module.exports = handler