
const nodemailer = require('nodemailer');
var dataUser = `
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
        <p class="bold">ʜᴀʟʟᴏ, ᴛᴇʀɪᴍᴀ ᴋᴀꜱɪʜ ᴛᴇʟᴀʜ ᴍᴇɴᴅᴀꜰᴛᴀʀ ᴅɪ ᴠᴇʀʙᴏᴛx,ꜱɪʟᴀʜᴋᴀɴ ꜱᴀʟɪɴ ᴅᴀɴ ᴛᴇᴍᴘᴇʟ ʟᴀʟᴜ ᴋɪʀɪᴍ ᴋᴇ ᴠᴇʀʙᴏᴛx ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴠᴇʀɪꜰɪᴋᴀꜱɪ</p>
        <p>ᴅɪʙᴀᴡᴀʜ ɪɴɪ ᴀᴅᴀʟᴀʜ ᴋᴏᴅᴇ ᴏᴛᴘ ᴀɴᴅᴀ :</p>
        <p><strong>receiveDontDel </strong></p> <!-- Ganti {kode_otp} dengan kode OTP yang sesuai -->
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
        user: 'verbotx@gmail.com', // Ganti dengan alamat email pengirim
        pass: 'yfkioorisbgmetwz' // Ganti dengan kata sandi email pengirim
    }
});

// Pengaturan email yang akan dikirim
let mailOptions = {
    from: 'support@ferdev.me', // Alamat email pengirim
    to: 'freepikdotkom@gmail.com', // Alamat email penerima
    subject: 'Your OTP Code',
    html: dataUser
};

// Kirim email
// Kirim email
transporter.sendMail(mailOptions, function(error, info){
    try {
        if (error) {
            throw new Error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    } catch (error) {
        console.error('Failed to send email:', error.message);
        // Lakukan sesuatu untuk menangani kesalahan pengiriman email, seperti log ke file atau memberikan pesan kepada pengguna
    }
});