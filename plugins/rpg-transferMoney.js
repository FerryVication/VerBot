let handler = async (m, { conn, command, usedPrefix, args, text, owner }) => {
    if (!args[0]) throw 'Contoh Penggunaan : .tf 628123456789 1000\n\n*Biaya Admin 5k/transaksi';
    
    var jumlah = args[1];
    var noReq = args[0];
    const biayaAdmin = 5000;

    if (!noReq.startsWith("62")) throw 'Nomor Tujuan Harus Diawali dengan 628\n\nContoh Penggunaan : .tf 628123456789 1000';
    if (!jumlah) throw 'Contoh Penggunaan : .tf 628123456789 1000';

    let db = global.db.data.users[m.sender];
    if (!db) throw 'Pengguna tidak ditemukan dalam database.';

    let moneyUser = db.money;
    if (moneyUser === undefined) throw 'Properti money tidak ditemukan pada pengguna.';

    let { name, pasangan, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = db;

    let totalBiaya = parseInt(jumlah) + biayaAdmin;

    if (totalBiaya > moneyUser) {
        m.reply(`Ooooppssss Money Kamu Tidak Cukup Untuk Melakukan Transfer dan Membayar Biaya Admin! Kamu membutuhkan ${totalBiaya} tapi hanya memiliki ${moneyUser}.`);
    } else {
        let hasil = parseInt(jumlah);
        
        let recipient = global.db.data.users[`${noReq}@s.whatsapp.net`];
        if (!recipient) throw 'Nomor tujuan tidak ditemukan dalam database.';
        
        if (recipient.money === undefined) {
            recipient.money = 0; // Inisialisasi jika properti money belum ada
        }

        recipient.money += hasil;
        db.money -= totalBiaya; // Kurangi total biaya dari pengguna yang mengirim
        global.db.data.users['6288225349583@s.whatsapp.net'].money += biayaAdmin
        m.reply(`
\t\t*TRANSAKSI BERHASIL*\n\n\nNama Pengirim : \t${registered ? name : ''}\nNomor Tujuan : \t${noReq}\n\nJumlah Transfer : \tRp. ${jumlah}\nBiaya Admin : Rp. ${biayaAdmin},\n\n\nSubtotal : \tRp. ${totalBiaya}`);
    }
};

handler.help = ['tf noTujuan jumlah'];
handler.command = /^(tf)$/i;
handler.group = false;
handler.limit = false;
handler.register = true;
handler.tags = ["rpg"];
module.exports = handler;