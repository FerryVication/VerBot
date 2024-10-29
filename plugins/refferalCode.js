const crypto = require('crypto'); // Library untuk membuat kode acak

// Konfigurasi hadiah redeem
const rewards = {
    50: 7000,    // 50 koin = Rp7.000
    150: 15000,  // 150 koin = Rp15.000
    350: 35000,  // 350 koin = Rp35.000
    750: 75000   // 750 koin = Rp75.000
};

const coinsPerInvite = 5; // Koin yang didapatkan oleh pengguna yang mengundang
const coinsForUser = 2;   // Koin yang didapatkan oleh pengguna yang menggunakan kode

// Tanggal mulai dan kadaluwarsa event
const eventStartDate = new Date('2024-10-10T00:00:00Z'); // Tanggal mulai event
const eventEndDate = new Date('2024-10-28T23:59:59Z');   // Tanggal kadaluwarsa event

// Fungsi untuk format tanggal dd/mm/yyyy
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0'); // Ambil hari dan tambahkan '0' di depan jika perlu
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ambil bulan dan tambahkan '0' di depan jika perlu
    const year = date.getFullYear(); // Ambil tahun
    return `${day}/${month}/${year}`; // Format tanggal
}

// Tampilkan informasi event
const eventInfo = `
 **ChatOn: Eksplorasi Seru dengan Bot WhatsApp!**

Halo, Sobat WhatsApp!  
Ikuti "ChatOn" dan kumpulkan saldo digital hanya dengan mengundang teman-temanmu! Semakin banyak teman yang kamu ajak, semakin besar saldo yang bisa kamu dapatkan. Event ini berlangsung selama 2 minggu, jadi jangan sampai ketinggalan!

 **Cara Ikutan & Hadiah Saldo Digital:**
- Invite 10 pengguna baru: Rp7.000
- Invite 25 pengguna baru: Rp15.000
- Invite 50 pengguna baru: Rp35.000
- Invite 100 pengguna baru: Rp75.000

Catatan: Pengguna baru harus aktif minimal 7 hari agar invite dianggap valid.

 *Tanggal:* ${formatDate(eventStartDate)} – ${formatDate(eventEndDate)}
 *Waktu:* Sepanjang hari (24/7)
 *Tempat:* WhatsApp (bisa diakses di mana saja!)

Ayo, manfaatkan kesempatan ini! Undang teman-temanmu, kumpulkan saldo digital, dan nikmati fitur seru bot kami! 
`;

let handler = async (m, { conn, usedPrefix, text }) => {
    let users = global.db.data.users; // Akses database pengguna

    // Cek status event
    const eventStatus = checkEventStatus();
    if (eventStatus !== 'active') {
        return m.reply(eventStatus); // Jika event belum dimulai atau telah berakhir, kirim pesan
    }

    if (text) { // Jika pengguna memasukkan kode referal
        if ('ref_count' in users[m.sender]) 
            throw '*Tidak Bisa Menggunakan Kode Referal Lagi!*'; // Cek apakah sudah pernah pakai kode

        let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]; // Cari pembuat kode
        if (!link_creator) throw '*Kode Referal Tidak Valid!*'; // Validasi kode

        // Tambahkan koin untuk pembuat kode dan pengguna baru
        users[link_creator].troopcamp = (users[link_creator].troopcamp || 0) + coinsPerInvite; // Koin untuk pembuat kode
        users[m.sender].troopcamp = (users[m.sender].troopcamp || 0) + coinsForUser; // Koin untuk pengguna baru
        users[m.sender].ref_count = 0; // Set jumlah invite pengguna baru ke 0

        // Notifikasi kepada pengguna baru
        m.reply(`*Selamat! Kamu mendapatkan ${coinsForUser} koin karena menggunakan kode referal.*\nKoin kamu saat ini: ${users[m.sender].troopcamp} koin\n${eventInfo}`);

        // Notifikasi kepada pembuat kode
        m.reply(`*Seseorang telah menggunakan kode referal kamu!*\nKamu mendapatkan ${coinsPerInvite} koin.\nKoin kamu saat ini: ${users[link_creator].troopcamp} koin\n${eventInfo}`, link_creator);

    } else { // Jika pengguna ingin melihat atau membuat kode referal
        let code = users[m.sender].ref_code = users[m.sender].ref_code || generateCode(); // Buat/tampilkan kode referal
        users[m.sender].ref_count = users[m.sender].ref_count || 0; // Set jumlah invite ke 0 jika belum ada

        let command_text = `${usedPrefix}ref ${code}`; // Perintah referal
        let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`; // Link referal

        // Pesan untuk dibagikan
        let share_text = `
Gunakan kode referal berikut dan dapatkan 2 koin gratis!

Referal Code: *${code}*
${command_link}
`.trim();

        // Kirim informasi kepada pengguna
        m.reply(`
 *Dapatkan koin dengan mengundang teman menggunakan kode referal kamu!*  
 *${users[m.sender].ref_count} orang telah menggunakan kode referal kamu*
 *Koin kamu saat ini: ${users[m.sender].troopcamp || 0} koin*

Kode referal kamu: ${code}  
Bagikan link kepada teman: ${command_link}  

Atau kirim pesan ini kepada teman: wa.me/?text=${encodeURIComponent(share_text)}

Berikut daftar hadiah redeem:  
${Object.entries(rewards).map(([coins, reward]) => `${coins} Koin = Rp${reward}`).join('\n')}
${eventInfo}
`.trim());
    }
};

// Fungsi untuk membuat kode acak
function generateCode() {
    return new Array(11)
        .fill()
        .map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)])
        .join('');
}

// Fungsi untuk memeriksa status event
function checkEventStatus() {
    const now = new Date(); // Ambil tanggal dan waktu sekarang
    if (now < eventStartDate) {
        return '*Event belum dimulai!*'; // Kembalikan pesan jika event belum dimulai
    }
    if (now > eventEndDate) {
        return '*Event telah berakhir!*'; // Kembalikan pesan jika event telah berakhir
    }
    return 'active'; // Kembalikan status aktif jika event sedang berlangsung
}

// Fungsi untuk redeem koin
handler.redeem = async (m, { conn, text }) => {
    let users = global.db.data.users;
    let coins = users[m.sender].troopcamp || 0; // Ambil jumlah koin pengguna

    // Cek status event
    const eventStatus = checkEventStatus();
    if (eventStatus !== 'active') {
        return m.reply(eventStatus); // Jika event belum dimulai atau telah berakhir, kirim pesan
    }

    let reward = rewards[text]; // Cek apakah koin sesuai dengan reward
    if (!reward) return m.reply('*Jumlah koin tidak valid untuk redeem!*');

    if (coins < text) return m.reply(`*Koin kamu kurang! Kamu butuh ${text - coins} koin lagi.*`);

    users[m.sender].troopcamp -= text; // Kurangi koin pengguna
    m.reply(`*Selamat! Kamu berhasil redeem Rp${reward}. Saldo akan segera dikirim.*`);
};

handler.help = ['ref', 'redeem <jumlah_koin>']; // Bantuan perintah
handler.tags = ['main']; // Kategori perintah
handler.command = ['ref', 'redeem']; // Perintah yang didaftarkan
handler.register = true; // Set agar hanya pengguna terdaftar yang bisa pakai

module.exports = handler; // Ekspor handler