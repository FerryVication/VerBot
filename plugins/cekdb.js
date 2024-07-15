const fs = require('fs');
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
// Baca file databaseEmail.json
const databaseEmail = JSON.parse(fs.readFileSync('plugins/db_user/databaseEmail.json'));

// Hitung jumlah email yang tidak kosong
let nonEmptyEmailCount = 0;

databaseEmail.forEach(data => {
    if (data.email && data.email.trim() !== '') {
        nonEmptyEmailCount++;
    }
});

m.reply(`Total Jumlah Email Terdaftar di Database : ${nonEmptyEmailCount}`);
}

handler.private = true
handler.owner = true
handler.command = /^cekdb/i

module.exports = handler