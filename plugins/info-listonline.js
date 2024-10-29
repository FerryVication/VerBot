let handler = async (m, { conn }) => {
  const greetings = ["Halo", "Hai", "Halo!", "Hai!", "Selamat datang", "Assalamualaikum", "Hai kak", "Halo kak", "Hai!", "Halo!", "Hi", "Hello", "Hiks", "Halo, siapa disana?", "Hai, apa kabar?", "Selamat datang di dunia yang sunyi", "Assalamualaikum, aku sendiri di sini", "Halo kak, aku merasa sepi", "Halo, kenapa kau meninggalkanku?", "Hai, kau meninggalkan aku sendiri", "Halo, aku merasa kesepian", "Halo, dunia yang sepi"];
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];

  const groupInfo = await conn.groupMetadata(m.chat);
  const onlineMembers = Object.entries(conn.chats).filter(([k, v]) => k.endsWith('@s.whatsapp.net') && v.presences && groupInfo.participants.some(p => k.startsWith(p.id))).sort((a, b) => a[0].localeCompare(b[0], 'id', { sensitivity: 'base' })).map(([k], i) => `*${i + 1}.* @${k.split('@')[0]}`).join('\n');

  let text = `${randomGreeting},\n\n🍀 *Daftar Peserta Online di Grup ${groupInfo.subject}* \n\n`;
  if (onlineMembers) {
    text += onlineMembers;
  } else {
    text += 'Tidak ada peserta online saat ini.';
  }

  conn.reply(m.chat, text, m);
}

handler.command = /^(listonline|online|daftaronline|active)$/i
handler.help = ["daftaronline"];
handler.group = true

module.exports = handler;