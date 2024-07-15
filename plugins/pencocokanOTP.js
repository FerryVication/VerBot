let fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
let handler = async function (m, { text, usedPrefix }) {
	let user = global.db.data.users[m.sender]
	var emaile = global.db.data.users[m.sender].email = ' '
	if (!text) throw `*Masukan Kode OTP Yang Dikirim Lewat Email!*`
	let [sn, nama, umur, email] = text.split('#');
	// Fungsi untuk membaca file JSON
	function bacaFileJSON(namaFile) {
  	try {
    	const data = fs.readFileSync(namaFile);
    	return JSON.parse(data);
  	} catch (error) {
    	return [];
  	}
	}
	// Fungsi untuk menulis data ke dalam file JSON
	function tulisFileJSON(namaFile, data) {
  	fs.writeFileSync(namaFile, JSON.stringify(data, null, 2));
	}
	// Fungsi untuk menyimpan email baru ke dalam database
	function simpanEmail(email, namaFile) {
  	// Baca file JSON
 	let databaseEmail = bacaFileJSON(namaFile);
 	// Tambahkan email baru ke dalam array
 	databaseEmail.push({ email: email });
 	// Tulis kembali file JSON dengan data yang diperbarui
 	tulisFileJSON(namaFile, databaseEmail);
	}
	// Pengguna memasukkan email
	const databaseFile = 'plugins/db_user/databaseEmail.json';
	// Simpan email ke dalam database
	if (!email) throw `*Salin Semua Kode OTP Yang Dikirim Lewat Email!*`
	simpanEmail(email, databaseFile);
	let snnya = sn
	let loadd = [
 '*《 █▒▒▒▒▒▒▒▒▒》10%*',
 '*《 ██▒▒▒▒▒▒▒▒》20%*',
 '*《 ███▒▒▒▒▒▒▒》30%*',
 '*《 ████▒▒▒▒▒▒》40%*',
 '*《 █████▒▒▒▒▒》50%*',
 '*《 ██████▒▒▒▒》60%*',
 '*《 ███████▒▒▒》70%*',
 '*《 ████████▒▒》80%*',
 '*《 █████████▒》90%*',
 '*《 ██████████》100%*',
 '*"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."*',
 ]

	let { key } = await conn.sendMessage(m.chat, {text: '*Mencocokan Data*'})
	if (sn === snnya) {
		if (user.registered === true) throw `Anda Sudah Terdaftar!`
		user.registered = true
		emaile = email
		age = parseInt(umur)
		user.name = nama.trim()
		user.age = age
		user.regTime = + new Date
		for (let i = 0; i < loadd.length; i++) {
		await sleep(1000)
		await conn.sendMessage(m.chat, {text: loadd[i], edit: key })} return conn.reply(m.chat, `
👑 *Terima Kasih Telah Mendaftar!* 👑

*Pendaftaran Kamu Berhasil Dengan Info Berikut* :

I N F O R M A S I
📝 *Nama: ${nama}*
🍂 *Umur: ${umur}*
📡 *Email : ${email}*
👻 *Note* : *Gunakan Perintah .claimlimit Untuk Mengklaim Limit Gratis!*
_____________________
🧑‍💻 Serial Number: 
${sn}`, m)
		// Send Message To Owner if Registratuion Success!
		let tto = `
		┌────···[ *ɴᴇᴡ ʀᴇɢɪꜱ ꜱᴜᴄᴄᴇꜱꜱ* ]···────✧
 		│
		 │	ɴᴀᴍᴇ : ${nama}
 		│	ᴀɢᴇ    : ${age}
 		│	ᴇᴍᴀɪʟ : ${email}
		 │	ɴᴜᴍʙᴇʀ : m.chat
		 │
 		├───────────────────────`
		let ownere = '6285133756729@s.whatsapp.net'
		await conn.relayMessage(ownere, {
                extendedTextMessage:{
                text: tto, 
                contextInfo: {
                mentionedJid: [mentionedJid]
                }
          }}, {})
	} else {
		m.reply('Sepertinya OTP Yang Kamu Masukan Tidak Valid,Silahkan Cek Email Kamu!')
	}
}

handler.command = /^(receiveDontDel)$/i
handler.private = true
module.exports = handler

const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}