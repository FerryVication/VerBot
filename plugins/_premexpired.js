let handler = m => m;

handler.before = async function (m, { conn }) {
	let user = global.db.data.users[m.sender];
	if (user && user.premium && user.premiumDate && (new Date() >= user.premiumDate)) {
		global.db.data.users[m.sender].premium = false;
		global.db.data.users[m.sender].premiumDate = 0;
		preme = global.prems
		let who = m.sender
		preme.splice(preme.indexOf(who.replace('@s.whatsapp.net', '')), 1);
		await m.reply(' Akses Premium Kamu Telah Berakhir, Silahkan Hubungi Owner Untuk Memperpanjang Akses');
		}
};

module.exports = handler;