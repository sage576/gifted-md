const fs = require('fs-extra');
if (fs.existsSync('.env'))
  require('dotenv').config({ path: __dirname + '/.env' });
const path = require("path");

module.exports = { 
    SESSION_ID: process.env.SESSION_ID || 'Gifted~H4sIAAAAAAAAA5VUXZOiOBT9L3nFmkZBvqq6ahEREaVRtEW39iGGCJFPk6DiVP/3LezumXnYne3lKdzcOvfce87Nd1BWhGEPt8D4DmpKLpDj7sjbGgMDjJrjEVPQAzHkEBjADCTRVCXpGK6fzGHI9at3OFznXJcVHa3roijXr5fxOHJy9AzeeqBuDjlBvwFsV5uibYf2LVy9jOlxtPO0k+NulL7JsxIKjama7d3ehsl99wzeOkRIKCkTu05xgSnMPdwGkNCv0Xcc/SZIy2QU5ChThRDd5myEDhu6r2f2q3lggpucrAbxUvsafWWtTcWNWSp0MU/F+S28pC8cvXgp8cSnjbeiBx1J/tbn5IM+I0mJYzfGJSe8/fLcRVdzR1T3lbu9XnsiPCNBxzuB0Dpc+Kqk7vHERdLCEl6vXyO+PF1P443rbi9nqspMl+w7sQL5pki2Rocrp8jdVN+fFe2a/Eo8oJ9eyf7P3O1pGuiX1jqlWpadtTlXx0IVwfnMdfB0de2vk+joDSrNjdyv0R9JjE9RspeImkov62mgHWlq09M6VXXszqKAN3xe6Omx7/6kD3lDf8dyfia+M0WLKVyauWuNmyNFg8PCXentKeA6vGKUaYuFI+37zU6IUhIGKE8qftclGvpT3R5d93CP6IZOlV2bxNnAnCTL50dHGW7dGBj9tx6gOCGMU8hJVT5ikt4DML6EGFHMH+MFi0i/S9GkOoWtn1f34bpWysAslpIzGezOzDMZchwm1TcxeQY9UNMKYcZwPCWMV7RdYMZgghkw/vyrB0p84+/CdeWkfg8cCWV8UzZ1XsH4U9XPS4hQ1ZQ8bEtkdQdMgSH+DGPOSZmwbo5NCSlKyQVbKeQMGEeYM/yjQ0xxDAxOG/xja60q7gbv+e5sJe/noAeKhyAkBgYYDGVVkmVNVSXRkKU/2LdrBwvr+luJOeiB/JE27OvaQBY1ZaAMdL1L7OI9UMIOC4Qwwd3AP+h26DHmkOQMGMByLfO6sy3bPc3uWuY4pp2YVmKCn+19+uRdh91Qs6cjZ1LutPNB3tIsmuHz03rFqnJ+bSH2Z8y6qA49t8vnfwABBtiEKrYCnA4GmaDLvjOq68sCLbV18qR7T8EmgNmJzEvkm7OMB+6r9zR72a5erhX1J+bQU5v8Oj6VpeDIchUECkSZWpvJc1ctxheC8K/Fov1hDzXkWqewb3v+tJgcBpNoHt3uo7Yh0VI5h+5WWwhPcn+ISuuuLaSiRsFy53vCYpxW+URnTFhGcoJoPLpj6TKXk+TdwY8Nyj9eLvLwVidc93sk+PEQfEjwn0K+E+/8Jr71fsH4eFr+bee3L8fR6LpK94PAK4TJeThpo/NFFA/erNUWRXkKDyYVbmeFZeDt7a8eqHPIjxUtgAFgGdPq4RNaNZ2B3fJY/aaYZW5cO0msrvMcMm7+XIo1KTDjsKiB0VeVoShqw4H+nhXQqp5ClgIDBNtsOOoM3pp1HXLIP1cMmN3nL8fg7W+pTqZLfgcAAA==',
    PREFIX: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇",
    OWNER_NUMBER : process.env.OWNER_NUMBER || "",  // put only one number
    SUDO_NUMBERS : process.env.SUDO_NUMBERS || "", // can be multiple numbers separated by commas
    BOT_NAME : process.env.BOT_NAME || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃',
    FOOTER : process.env.FOOTER || 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ',
    CAPTION : process.env.CAPTION || '©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓',
    VERSION: process.env.VERSION || '5.0.0',
    BOT_PIC : process.env.BOT_PIC || 'https://gitcdn.giftedtech.co.ke/image/AZO_image.jpg',            
    MODE: process.env.MODE || "public",
    PM_PERMIT: process.env.PM_PERMIT || 'false',
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi",
    DM_PRESENCE : process.env.DM_PRESENCE || 'online', // recording/typing/online/offline
    GC_PRESENCE : process.env.GC_PRESENCE || 'online', // recording/typing/online/offline
    CHATBOT : process.env.CHATBOT || 'false', // can be true/audio/false   
    CHATBOT_MODE : process.env.CHATBOT_MODE || 'inbox', // can be inbox/groups/allchats
    STARTING_MESSAGE : process.env.STARTING_MESSAGE || "true",
    ANTIDELETE : process.env.ANTIDELETE || 'indm', // inchat/indm/false
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'false',
    ANTICALL : process.env.ANTICALL || 'false', // (decline/true)/block/false
    ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'false',
    ANTILINK : process.env.ANTILINK || 'false', // or delete or kick or true
    AUTO_LIKE_STATUS : process.env.AUTO_LIKE_STATUS || 'true',
    AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || 'true',
    STATUS_LIKE_EMOJIS : process.env.STATUS_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",   
    STATUS_REPLY_TEXT: process.env.STATUS_REPLY_TEXT || "*ʏᴏᴜʀ sᴛᴀᴛᴜs ᴠɪᴇᴡᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ ✅*",             
    AUTO_REACT : process.env.AUTO_REACT || 'false',
    AUTO_REPLY : process.env.AUTO_REPLY || 'false',
    AUTO_READ_MESSAGES : process.env.AUTO_READ_MESSAGES || 'false', // true/commands/false
    AUTO_BIO : process.env.AUTO_BIO || 'false',
    AUTO_BLOCK: process.env.AUTO_BLOCK || '212,233',
    YT: process.env.YT || 'youtube.com/@giftedtechnexus',
    NEWSLETTER_JID: process.env.NEWSLETTER_JID || '120363408839929349@newsletter',
    NEWSLETTER_URL: process.env.NEWSLETTER_URL || 'https://whatsapp.com/channel/0029Vb3hlgX5kg7G0nFggl0Y',
    BOT_REPO: process.env.BOT_REPO || 'mauricegift/gifted-md',
    PACK_NAME: process.env.PACK_NAME || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃',
    PACK_AUTHOR: process.env.PACK_AUTHOR || '𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇'
};

let fileName = require.resolve(__filename);
fs.watchFile(fileName, () => {
    fs.unwatchFile(fileName);
    console.log(`Writing File: ${__filename}`);
    delete require.cache[fileName];
    require(fileName);
});
