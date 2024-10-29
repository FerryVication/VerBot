const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 

let handler = async (m, { conn, text, usedPrefix, command }) => {
let user = global.db.data.users[m.sender].name
let teksSewa1 =`
┌────···[ *ᴀᴋꜱᴇꜱ ᴘʀᴇᴍɪᴜᴍ* ]···────✧
│
│	4 ʜᴀʀɪ : ʀᴘ. 3000-,
│	
├────···[ *ʙᴇɴᴇꜰɪᴛ* ]···─────────
│
│  • ᴜɴʟɪᴍɪᴛᴇᴅ ʟɪᴍɪᴛ
│  • ᴜɴʟᴏᴄᴋ ᴀʟʟ ꜰᴇᴀᴛᴜʀᴇ
│  • ᴄᴜꜱᴛᴏᴍᴇʀ ꜱᴜᴘᴘᴏʀᴛ
│  
├───────────────────────`
let teksSewa2 =`
┌────···[ *ᴀᴋꜱᴇꜱ ᴘʀᴇᴍɪᴜᴍ* ]···────✧
│
│	7 ʜᴀʀɪ : ʀᴘ. 6000-,
│	
├────···[ *ʙᴇɴᴇꜰɪᴛ* ]···─────────
│
│  • ᴜɴʟɪᴍɪᴛᴇᴅ ʟɪᴍɪᴛ
│  • ᴜɴʟᴏᴄᴋ ᴀʟʟ ꜰᴇᴀᴛᴜʀᴇ
│  • ᴄᴜꜱᴛᴏᴍᴇʀ ꜱᴜᴘᴘᴏʀᴛ
│  
├───────────────────────`
let teksSewa3 =`
┌────···[ *ᴀᴋꜱᴇꜱ ᴘʀᴇᴍɪᴜᴍ* ]···────✧
│
│	30 ʜᴀʀɪ : ʀᴘ. 12.000-,
│	
├────···[ *ʙᴇɴᴇꜰɪᴛ* ]···─────────
│
│  • ᴜɴʟɪᴍɪᴛᴇᴅ ʟɪᴍɪᴛ
│  • ᴜɴʟᴏᴄᴋ ᴀʟʟ ꜰᴇᴀᴛᴜʀᴇ
│  • ᴄᴜꜱᴛᴏᴍᴇʀ ꜱᴜᴘᴘᴏʀᴛ
│  
├───────────────────────`
let teksSewa4 =`
┌────···[ *ꜱᴇᴡᴀ ʙᴏᴛ* ]···────✧
│
│	7 ʜᴀʀɪ : ʀᴘ. 6000-,
│	30 ʜᴀʀɪ : ʀᴘ. 14000-,
│	
├────···[ *ʙᴇɴᴇꜰɪᴛ* ]···─────────
│
│  • ꜰʀᴇᴇ ᴀᴅᴅ ᴛᴏ 1 ɢʀᴏᴜᴘ
│  • ᴘʀᴇᴍɪᴜᴍ ᴀᴄᴄᴇꜱꜱ ꜰᴏʀ ʀᴇɴᴛᴇʀꜱ ( 3 days )
│  • ᴄᴜꜱᴛᴏᴍᴇʀ ꜱᴜᴘᴘᴏʀᴛ
│  
├───────────────────────`

  const msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.fromObject({
            text: `ʜᴀʟʟᴏ ᴋᴀᴋ ${user}, ʙᴇʀɪᴋᴜᴛ ᴀᴅᴀʟᴀʜ ʟɪꜱᴛ ᴘʀɪᴄɪɴɢ ᴘᴀᴋᴇᴛ ᴠᴇʀʙᴏᴛx`,
          }),
          footer: proto.Message.InteractiveMessage.Footer.fromObject({
            text: "*© 𝚅𝚎𝚛𝙱𝚘𝚝𝚇*",
          }),
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `ʜᴀʟʟᴏ ᴋᴀᴋ ${user}, ʙᴇʀɪᴋᴜᴛ ᴀᴅᴀʟᴀʜ ʟɪꜱᴛ ᴘʀɪᴄɪɴɢ ᴘᴀᴋᴇᴛ ᴠᴇʀʙᴏᴛx`,
            subtitle: `ʜᴀʟʟᴏ ᴋᴀᴋ ${user}, ʙᴇʀɪᴋᴜᴛ ᴀᴅᴀʟᴀʜ ʟɪꜱᴛ ᴘʀɪᴄɪɴɢ ᴘᴀᴋᴇᴛ ᴠᴇʀʙᴏᴛx`,
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
            	{
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: teksSewa4,//`> *7Days : 6K*\n> *14Days : 10K*\n> *30Days : 20K*\n> *Permanent : 35K*\n\n> *</> Benefit Premium </>*\n\n> *Get Unlimited Limit*\n> *Free Add To Group(1x)*\n> *Get Access All Feature*`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                  text: "*© 𝚅𝚎𝚛𝙱𝚘𝚝𝚇*",
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                  title: ``,
                  hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg` } }, { upload: conn.waUploadToServer })) 
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": "{\"display_text\":\"ꜱᴇᴡᴀ ʙᴏᴛ\",\"url\":\"https://wa.me/6285133756729?text=min+sewa+bot\",\"merchant_url\":\"https://wa.me/6285133756729?text=min+beli+akses+premium+yang+4+Hari\"}"
                    }]
                })
              },
              {
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: teksSewa1,//`> *7Days : 6K*\n> *14Days : 10K*\n> *30Days : 20K*\n> *Permanent : 35K*\n\n> *</> Benefit Premium </>*\n\n> *Get Unlimited Limit*\n> *Free Add To Group(1x)*\n> *Get Access All Feature*`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                  text: "*© 𝚅𝚎𝚛𝙱𝚘𝚝𝚇*",
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                  title: ``,
                  hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg` } }, { upload: conn.waUploadToServer })) 
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": "{\"display_text\":\"ʙᴇʟɪ ᴀᴋꜱᴇꜱ ɪɴɪ\",\"url\":\"https://wa.me/6285133756729?text=min+beli+akses+premium+yang+4+Hari\",\"merchant_url\":\"https://wa.me/6285133756729?text=min+beli+akses+premium+yang+4+Hari\"}"
                    }]
                })
              },
              {
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: teksSewa2,//`> *7Days : 6K*\n> *14Days : 10K*\n> *30Days : 20K*\n> *Permanent : 35K*\n\n> *</> Benefit Premium </>*\n\n> *Get Unlimited Limit*\n> *Free Add To Group(1x)*\n> *Get Access All Feature*`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                  text: "*© 𝚅𝚎𝚛𝙱𝚘𝚝𝚇*",
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                  title: ``,
                  hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg` } }, { upload: conn.waUploadToServer })) 
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": "{\"display_text\":\"ʙᴇʟɪ ᴀᴋꜱᴇꜱ ɪɴɪ\",\"url\":\"https://wa.me/6285133756729?text=min+beli+akses+premium+yang+7+Hari\",\"merchant_url\":\"6285133756729?text=min+beli+akses+premium+yang+7+Hari\"}"
                    }]
                })
              },
              {
                body: proto.Message.InteractiveMessage.Body.fromObject({
                  text: teksSewa3,//`> *7Days : 3K*\n> *14Days : 6K*\n> *30Days : 10K*\n> *Permanent : 28K*\n\n> *</> Benefit Sewa BOT </>*\n\n> *Get Free Premium(3days)*\n> *Get 100 Limit(s)*\n> *Access All Feature(3Days)*`
                }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({
                  text: "*© 𝚅𝚎𝚛𝙱𝚘𝚝𝚇*",
                }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                  title: "",
                  hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `https://raw.githubusercontent.com/clicknetcafe/Databasee/main/azamibot/media/picbot/menus/menus_${getRandomThreeDigitNumber()}.jpg` } }, { upload: conn.waUploadToServer })) 
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                  buttons: [
                    {
                      "name": "cta_url",
                      "buttonParamsJson": "{\"display_text\":\"ʙᴇʟɪ ᴀᴋꜱᴇꜱ ɪɴɪ\",\"url\":\"https://wa.me/6285133756729?text=min+beli+akses+premium+yang+30+Hari\",\"merchant_url\":\"https://wa.me/6285133756729?text=min+beli+akses+premium+yang+30+Hari\"}"
                    }]
                })
              }
            ]
          })
        })
      }
    }
  }, {})

  await conn.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  })
}

function getRandomThreeDigitNumber() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 35); // Menghasilkan angka acak antara 0 dan 34
    } while (randomNumber === 0);
    return String(randomNumber).padStart(3, '0'); // Mengonversi ke string dan menambahkan nol di depannya jika perlu
}

handler.help = handler.command = ['plans','donasi','donate','sewa','buyprem','belibot','belilimit']
handler.register = true
module.exports = handler