let fetch = require('node-fetch');
let handler = async(m, { conn }) => {
	let gett = await fetch('https://api.binderbyte.com/v1/track?api_key=1ff61f78c5942bc8c168f9253fe69ddf24fc462756a79508e84bcfbc43d151fe&courier=sicepat&awb=005250323559');
	let data = await gett.json();
	// Cek jika respons API berhasil
	if (data.status === 200) {
		// Destructuring dari data.data, bukan langsung dari data
		const { summary, detail, history } = data.data;
		const output = `
=== Ringkasan Paket ===
No. Resi: ${summary.awb}
Kurir: ${summary.courier}
Status: ${summary.status}
Tanggal: ${summary.date}

=== Detail Pengiriman ===
Asal: ${detail.origin}
Tujuan: ${detail.destination}
Pengirim: ${detail.shipper}
Penerima: ${detail.receiver}

=== Riwayat Pengiriman ===
${history.map((item, index) => 
  `[${index + 1}] Tanggal: ${item.date}
    Keterangan: ${item.desc}`).join('\n\n')}
		`;
		m.reply(output);
	} else {
		// Jika status bukan 200, kirim pesan error
		m.reply(`Gagal melacak paket: ${data.message}`);
	}
}

handler.command = /^paketku/i;
handler.register = true;
handler.group = false;
handler.owner = true;

module.exports = handler;