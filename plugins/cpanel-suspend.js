let fetch = require('node-fetch');
let handler = async function (m, { text, args, usedPrefix }) {
    let cmd = args[0];
    let srv = args[1];
    let domaine = 'https://ferdev.me';
    let apipltc = 'ptlc_ptWOtbwGW0buNb9xCrPZts6DrEJMKV3wSRlij7X4vV1';

    if (!cmd) throw 'Masukkan Command Nya (suspend/unsuspend)!';
    if (!srv) throw 'Masukkan ID Server Nya!';

    let url = '';
    let successMessage = '';

    switch (cmd.toLowerCase()) {
        case 'suspend':
            url = `${domaine}/api/application/servers/${srv}/suspend`;
            successMessage = '🤩*BERHASIL SUSPEND..*';
            break;
        case 'unsuspend':
            url = `${domaine}/api/application/servers/${srv}/unsuspend`;
            successMessage = '🤩*BERHASIL BUKA SUSPEND..*';
            break;
        default:
            throw 'Command tidak dikenal, gunakan suspend atau unsuspend';
    }

    let f = await fetch(url, {
        "method": "POST",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apipltc
        }
    });

    let res = f.ok ? { errors: null } : await f.json();
    if (res.errors) return m.reply('🕊️*SERVER NOT FOUND*');
    m.reply(successMessage);
};

handler.command = /^(mysv)$/i;
handler.private = true;
handler.owner = true;
module.exports = handler;