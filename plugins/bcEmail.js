const nodemailer = require('nodemailer');
const fs = require('fs');
// Baca file databaseEmail.json
const databaseEmail = JSON.parse(fs.readFileSync('plugins/db_user/databaseEmail.json'));
// Inisialisasi variabel counter
let emailSentCount = 0;
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	if (!text) throw 'Penggunaan : .bcemail pesannya '
	// Konfigurasi transporter Nodemailer
	const transporter = nodemailer.createTransport({
    	service: 'Gmail',
    	auth: {
        	user: 'verbotx@gmail.com', // Alamat email pengirim
        	pass: 'yfkioorisbgmetwz' // Kata sandi email pengirim
    	}
	});

	// Isi pesan email dalam format HTML
const emailContent = `
<!DOCTYPE html>
<html lang="en">
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
        <p class="bold">ʜᴀʟʟᴏ</p>
        <stong>${text}</strong>
    </div>
    <div class="ex">
    	<hr>
    </div>
    <div class="footer">
        <p>© 2024 ᴠᴇʀʙᴏᴛx ᴀʟʟ ʀɪɢʜᴛꜱ ʀᴇꜱᴇʀᴠᴇᴅ.</p>
    </div>
</body>
</html>`;

// Kirim email ke setiap alamat email dalam daftar
databaseEmail.forEach((data, index) => {
    if (data.email) {
        // Konfigurasi email
        const mailOptions = {
            from: 'support@ferdev.me', // Alamat email pengirim
            to: data.email, // Alamat email penerima
            subject: 'P E M B E R I T A H U A N',
            html: emailContent
        };

        // Kirim email
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                m.reply(`Error sending email to ${data.email}:`, error);
            } else {
                m.reply(`Email sent to ${data.email}:`, info.response);
            }
            emailSentCount++; // Inkrementasi counter

            // Cek apakah ini email terakhir yang dikirim
            if (index === databaseEmail.length - 1) {
                // Lakukan sesuatu setelah selesai mengirim semua email
                m.reply(`Success Broadcast ke ${emailSentCount} emails`)
            }
        });
    }
});
}
handler.private = true
handler.command = /^bcemail/i

module.exports = handler