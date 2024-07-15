let fetch = require('node-fetch')
const nodemailer = require('nodemailer')
const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, args, usedPrefix }) {
	let user = global.db.data.users[m.sender]
	if (user.registered === true) throw `Anda Sudah Terdaftar!`
	if (!Reg.test(text)) throw `Format Salah,Lakukan Seperti Contoh Dibawah Ini\n*${usedPrefix}daftar emailmu|nama|umur*\n\n*CONTOH* : .daftar verbot@gmail.com|admin|18`
	let [email, nama, umur] = text.split('|');
    if (!email) throw 'Alamat Email Tidak Boleh Kosong ( WAJIB email Yang Masih Aktif!!! )'
    if (!nama) throw 'Nama tidak boleh kosong (Wajib)'
    if (!umur) throw 'Umur tidak boleh kosong (Wajib)'
    age = parseInt(umur)
    if (age > 40) throw 'Umur Tidak Boleh Terlalu Tua!'
    if (age < 10) throw 'Umur Tidak Boleh Terlalu Muda!'
    nameHasil = nama.trim()
    let sn = createHash('md5').update(m.sender).digest('hex')
    var dataUser = `
<!DOCTYPE html>
<html lang="id" class="notranslate">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Content</title>
    <style>
        /* Style untuk judul */
        .title {
            text-align: center;
            background-color: #292929; /* Warna biru muda */
            color: #FFFFFF; /* Warna putih */
            font-weight: bold;
            padding: 10px;
        }

        /* Style untuk konten */
        .content {
            text-align: center;
            padding: 20px;
            margin-bottom: 60px; /* Mengatur margin bawah agar footer tidak menutupi konten */
        }

        /* Style untuk footer */
        .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            background-color: #292929; /* Warna hitam abu-abu */
            color: #FFFFFF; /* Warna putih */
            text-align: center;
            padding: 10px;
        }
        /* Style untuk teks tebal */
        .bold {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="title">
        <h1>ᴠᴇʀʙᴏᴛx</h1>
    </div>
    <div class="content">
        <p class="bold">ʜᴀʟʟᴏ, ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ ᴛᴇʟᴀʜ ᴍᴇɴᴅᴀꜰᴛᴀʀ ᴅɪ ᴠᴇʀʙᴏᴛx,ꜱɪʟᴀʜᴋᴀɴ ꜱᴀʟɪɴ ᴋᴏᴅᴇ ᴏᴛᴘ ᴀɴᴅᴀ ᴅᴀɴ ᴛᴇᴍᴘᴇʟ ʟᴀʟᴜ ᴋɪʀɪᴍ ᴋᴇ ʙᴏᴛ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴠᴇʀɪꜰɪᴋᴀꜱɪ</p>
        <p>ᴅɪʙᴀᴡᴀʜ ɪɴɪ ᴀᴅᴀʟᴀʜ ᴋᴏᴅᴇ ᴏᴛᴘ ᴀɴᴅᴀ :</p>
        <p><strong>/receiveDontDel ${sn}#${nameHasil}#${umur}#${email}</strong></p> <!-- Ganti {kode_otp} dengan kode OTP yang sesuai -->
    </div>
    <div class="ex">
    	<hr>
    </div>
    <div class="footer">
        <p>© 2024 ᴠᴇʀʙᴏᴛx ᴀʟʟ ʀɪɢʜᴛꜱ ʀᴇꜱᴇʀᴠᴇᴅ.</p>
    </div>
</body>
</html>`
    // Konfigurasi transporter
    let transporter = nodemailer.createTransport({
    	service: 'Gmail',
    	auth: {
    		user: 'verbotx@gmail.com',
    		pass: 'yfkioorisbgmetwz'
    	}
    });
    // Pengaturan email yang akan dikirim
    let mailOptions = {
    	from: 'support@ferdev.me',
    	to: email,
    	subject: 'Your OTP Code',
    	html: dataUser
    };
    // Kirim email
	transporter.sendMail(mailOptions, function(error, info){
    	try {
        	if (error) {
            	m.reply('Error Tidak Dapat Mengirim Email ke Alamat Tersebut\n\n',error)
        	} else {
            	m.reply('*Berhasil Mengirim Kode OTP!*\nSilahkan Cek Email Anda Untuk Instruksi Selanjutnya!')
        	}
    	} catch (error) {
        	m.reply('Error Tidak Dapat Mengirim Email ke Alamat Tersebut\n\n',error.message)
        	// Lakukan sesuatu untuk menangani kesalahan pengiriman email, seperti log ke file atau memberikan pesan kepada pengguna
    	}
	});
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']
handler.private = true
handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler