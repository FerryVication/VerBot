async function before(m) {
  this.ev.on('call', async (call) => {
      if (call[0].status == 'offer') {
        await this.sendMessage(call[0].from, {
          text: "🚨 *Kamu Telah di Banned* 🚨\n\n⚙️*Status :* *Blocked*\n📜 *Keterangan :* *Kamu Telah di Banned Karena Melanggar Salah Satu Syarat dan Ketentuan Penggunaan VerBotX, Silahkan Baca Syarat dan Ketentuan VerBotX di [ https://tos.ferdev.me ] untuk Mengajukan Banding*",
          quoted: call[0]
        });
        await this.rejectCall(call[0].id, call[0].from);
        await this.updateBlockStatus(call[0].from, "block");
      }
  });
}
module.exports = {
  before
};