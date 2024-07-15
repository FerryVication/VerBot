const axios = require('axios');

let handler = async (m, { conn, text }) => {
    conn.autoai = conn.autoai ? conn.autoai : {};

    if (!text) throw `*• Penggunaan:* .autoai *[on/off]* \nContoh : .autoai on \n\nKet :\n\n .auotai on : Untuk Membuat Room Pribadi Dengan Bot ( chat tidak perlu diawali dengan titik ) \n\n.autoai off : menghapus Room ( penggunaan bot seperti biasanya )`;

    if (text === "on") {
        conn.autoai[m.sender] = {
            pesan: []
        };
        m.reply("[ ✓ ] Berhasil Membuat Room Pribadi Dengan Bot, Tidak Perlu Menggunakan titik pada setiap kalimatnya, langsung chat biasa saja");
    } else if (text === "off" || text === "of") {
        delete conn.autoai[m.sender];
        m.reply("[ ✓ ] Berhasil Menghapus Room");
    }
};


handler.before = async (m, { conn }) => {
    conn.autoai = conn.autoai ? conn.autoai : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!conn.autoai[m.sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (conn.autoai[m.sender] && m.text) {
        let name = conn.getName(m.sender);
        await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
        const messages = [
            ...conn.autoai[m.sender].pesan,
            `p`,
            m.text
        ];
        try {
            const response = await axios.get(`https://api.betabotz.eu.org/api/search/openai-logic`, {
                params: {
                    text: m.text,
                    logic: 'Hai Saya Adalah VerBotX,,Bot Whatsapp Yang Dikembangkan Oleh Ferry,Saya Bernama VerBotX,Saya Dibuat Oleh Ferry Dengan Penuh Kesempurnaan Yang Tiada Taraa,Jika Kamu Ingin Mencari Tau Lebih Dalam Tentang Ownerku Visit https://bot.ferdev.me/',
                    apikey: `${lann}`  // Ganti dengan API key yang sesuai
                }
            });

            const responseData = response.data;
            if (responseData.status) {
                await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
                m.reply(responseData.message);
                conn.autoai[m.sender].pesan = messages;
            } else {
                m.reply("Maaf ya Kak, Lagi Ada Error nih🥺 Jadi Ngga Bisa Jawab")
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf ya Kak, Lagi Ada Error nih🥺 Jadi Ngga Bisa Jawab")
        }
    }
};

handler.command = ['autoai'];
handler.tags = ["ai"];
handler.help = ['autoai'].map(a => a + " *[on/off]*");

module.exports = handler;