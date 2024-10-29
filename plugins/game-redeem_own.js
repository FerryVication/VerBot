let fetch = require('node-fetch');
let BASE_URL = 'https://api.counterapi.dev/v1'; // BASE URL COUNT API

let handler = async(m, { usedPrefix, args, command }) => {
	if (!args[0]) throw 'Contoh .rcode key'
	let nameApp = 'VerBotX'
	let data = await fetch(`${BASE_URL}/${nameApp}/${args[0]}`) // Request ke API
	.then(response => {
		if (!response.ok) {
			return response.json().then(errorData => {
				m.reply(`*Error* : \n\n${errorData}`);
			});
		}
		return response.json().then(data => {
			const formattedResponse = {
				id: response.id,
				name: response.name,
				count: response.count,
				createdAt: formatTanggalWaktu(response.created_at),
				updatedAt: formatTanggalWaktu(response.updated_at),
				namespace: {
					id: response.namespace.id,
					name: response.namespace.name,
					createdAt: formatTanggalWaktu(response.namespace.created_at),
					updatedAt: formatTanggalWaktu(response.namespace.updated_at)
				}
			};
			m.reply(formattedResponse);
		});
	});
}

function formatTanggalWaktu(tanggal) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false // Menggunakan format 24 jam
    };
    return new Intl.DateTimeFormat('id-ID', options).format(new Date(tanggal));
}

handler.help = ['rcode']
handler.command = /^rcode$/i
handler.owner = true

module.exports = handler