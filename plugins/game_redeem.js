let fetch = require('node-fetch');
let cooldown = 86400000; // Cooldown dalam Sehari
const now = new Date();
let BASE_URL = 'https://api.counterapi.dev/v1'; // BASE URL COUNT API

let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `Masukan Kode Random Yang Didapat Dari Admin!\n\ncontoh:\n${usedPrefix + command} Fer_76667`; // Cek jika kode tidak diberikan
    m.reply('⏱️ *Mohon tunggu... Sedang Mengecek Kode*'); // Pesan sedang mengecek kode
    await sleep(5000); // Jeda selama 5 detik
    let data = await (await fetch('https://raw.githubusercontent.com/CyberCarboon2/FileServer/main/giftAway.json')).json(); // Request data ke server
    let { expiredDate, limit, key } = data; // Ambil data dari respons
    let add = parseInt(limit); // Konversi limit menjadi integer
    let parts = expiredDate.split('/'); // Memecah string berdasarkan '/'
    let day = parseInt(parts[0], 10); // Mengambil hari
    let month = parseInt(parts[1], 10) - 1; // Mengambil bulan (kurangi 1 karena bulan dimulai dari 0)
    let year = parseInt(parts[2], 10); // Mengambil tahun
    let user = global.db.data.users[m.chat];
    let expiry = new Date(year, month, day); // Membuat objek Date dari bagian-bagian
    if (args[0] === key) { // Cek apakah kode yang diberikan sesuai dengan key
    	await addAmount(key); // Tambah count API
        if (now > expiry) throw `Oopsss Kode Tersebut Sudah Kadaluarsa Pada *${expiredDate}*`; // Kode sudah kadaluarsa
        if (now - user.lastduel < cooldown) throw '🗿 *Kamu Sudah Menggunakan Kode Tersebut!*'; // Cek cooldown
        m.reply(`🥳 *Selamat! Kamu Mendapatkan*\n\n↪️ ${limit} Limit`); // Pesan sukses
        user.limit += add; // Tambah limit
        user.lastduel = now.getTime(); // Update waktu penggunaan terakhir
    } else {
        m.reply('👻 Kode Tidak Terdaftar'); // Jika key tidak sesuai
    }
};

async function addAmount(key) { 
	let nameApp = 'VerBotX';// Default Parameter 
	let data = await fetch(`${BASE_URL}/${nameApp}/${key}/up`) // Request ke API
	.then(response => {
		if (!response.ok) { // Cek Responnya 
			return response.json().then(errorData => {
				// Print ke Console
				console.log(errorData);
			});
		}
		return response.json().then(data => {
			// Print ke Console jika Berhasil
			console.log(data);
		});
	});
}

// Fungsi Jeda 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


handler.help = ['getreff']
handler.command = /^getreff$/i
handler.limit = false
handler.register = true
handler.private = true

module.exports = handler