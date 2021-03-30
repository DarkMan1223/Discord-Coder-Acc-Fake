
// 20 token dane   
//
const Discord = require("discord.js");
const Canvas = require("canvas");
const fs = require("fs");
const cmd = require("node-cmd");
const config = require("./config.json");
const prefix = config.prefix;
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client(); 
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client(); 
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client();
const client34 = new Discord.Client();
const client35 = new Discord.Client();
const client36 = new Discord.Client();
const client37 = new Discord.Client();
const client38 = new Discord.Client();
const client39 = new Discord.Client();
const client40 = new Discord.Client();
const client41 = new Discord.Client();
const client42 = new Discord.Client();
const client43 = new Discord.Client();
const client44 = new Discord.Client();
const client45 = new Discord.Client();
const client46 = new Discord.Client();
const client47 = new Discord.Client();
const client48 = new Discord.Client();
const client49 = new Discord.Client();
const client50 = new Discord.Client();
const client51 = new Discord.Client();
const client52 = new Discord.Client();
const client53 = new Discord.Client();
const client54 = new Discord.Client();
const client55 = new Discord.Client();
const client56 = new Discord.Client();
const client57 = new Discord.Client();
const client58 = new Discord.Client();
const client59 = new Discord.Client();
const client60 = new Discord.Client();
const client61 = new Discord.Client();
const client62 = new Discord.Client();
const client63 = new Discord.Client();
const client64 = new Discord.Client();
const client65 = new Discord.Client();
const client66 = new Discord.Client();
const client67 = new Discord.Client();
const client68 = new Discord.Client();
const client69 = new Discord.Client();
const client70 = new Discord.Client();
const client71 = new Discord.Client();
const client72 = new Discord.Client();
const client73 = new Discord.Client();
const client74 = new Discord.Client();
const client75 = new Discord.Client();
const client76 = new Discord.Client();
const client77 = new Discord.Client();
const client78 = new Discord.Client();
const client79 = new Discord.Client();
const client80 = new Discord.Client();
const client81 = new Discord.Client();
const client82 = new Discord.Client();
const client83 = new Discord.Client();
const client84 = new Discord.Client();
const client85 = new Discord.Client();
const client86 = new Discord.Client();
const client87 = new Discord.Client();
const client88 = new Discord.Client();
const client89 = new Discord.Client();
const client90 = new Discord.Client();
const client91 = new Discord.Client();
const client92 = new Discord.Client();
const client93 = new Discord.Client();
const client94 = new Discord.Client();
const client95 = new Discord.Client();
const client96 = new Discord.Client();
const client97 = new Discord.Client();
const client98 = new Discord.Client();
const client99 = new Discord.Client();
const client100 = new Discord.Client();

const help = `**
كۆمانده‌كان:

بۆ زیاد كردنی ڕیاكشن
!react <Channel ID> <Message ID> <Emoji>

بۆ هێنانه‌ ڤۆیسی هه‌موو بۆته‌كان
**`;

client6.on("message", message => {
if (message.author.bot) return;

 let prefix = "!"
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

// +say
if (command === "say") {
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە ADMINISTRATOR");
message.delete();
message.channel.sendMessage(args.join(" "));
} 

if (command == "embed") {
if (!message.channel.guild)
return message.channel
.send("ببورە ئەم ئەمرە تەنها بۆ سێرفەرە")
.then(m => m.delete(5000));
if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.channel.send("ببورە ئەم دەسەڵاتەت نیە MANAGE_MESSAGES");
let say = new Discord.RichEmbed()
.setDescription(args.join(" "))
.setColor(0x23b2d6);
message.channel.sendEmbed(say);
message.delete();
}
});





const err = `** \`\`\`  [ERORR] : لازم تسوي رتبة بـ اسم  \`\`\`
         \`\` Role.Kahrbaa \`\` **`;

// ======= [ settings JSON   ] ======== //
const dinfo = JSON.parse(fs.readFileSync("./data.json", "UTF8"));
client.on("message", async msg => {
  if (!msg.guild) return;
  if (msg.author.bot) return;
  if (!dinfo)
    dinfo = {
    
      owner: config.kahrbaaid,
      serverid: "NONE",
      channelid: "NONE", 
      timespam: "NONE",
      timestop: "NONE"
    };
  if (msg.content.startsWith(config.prefix + "setownerID")) {
    if (msg.channel.type == "dm")
      
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.owner = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لصاحب التوكانات __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh");
  }
  if (msg.content.startsWith(config.prefix + "setserverID")) {
    if (msg.channel.type == "dm")
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لسيرفر الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "setchannelID")) {
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع ايدي **");
    if (args.length > 18 || args.length <= 17) {
      return msg.channel.send("** تـأكد من ايدي  **");
    }
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**");
    dinfo.channelid = args;
    await msg
      .reply(`** __ تم وضع ايدي جديد لروم الاسبام __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeSpam")) {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) return msg.channel.send("**قم بوضع وقت الاسبام بـ الثواني **");
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timespam = args;
    await msg
      .reply(`** __ تم اضافة مدة ارسال الاسبام ب الثواني __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
  if (msg.content.startsWith(config.prefix + "settimeStop")) {
    // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (msg.channel.type == "dm")
      return msg.reply("** لا تستيطع استخدام الامر علي الخاص .. **");
    if (!dinfo.owner.includes(msg.author.id)) return;
    let args = msg.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args)
      return msg.channel.send(
        "** قم بوضع وقت توقف البوت بعد بداء الاسبام بـ الساعات **"
      );
    if (isNaN(args)) return msg.channel.send("**__الارقام فقط__!**"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = args;
    await msg
      .reply(`** __ تم اضافة مدة توقف الاسبام بـ الساعات  __  \`${args}\`**`)
      .then(m => m.delete(5000));
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
  }
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"

client.on("message", async message => {
  if (message.content === prefix + "reset") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.serverid = "NONE";
    dinfo.channelid = "NONE";
    dinfo.timespam = "NONE"; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    dinfo.timestop = "NONE";
    message.channel.send(`**⚠️ restsettings , <@${dinfo.owner}>**`);
    fs.writeFile("./data.json", JSON.stringify(dinfo), function(a) {
      if (a) throw a;
    });
    await cmd.run("refresh"); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
  }
});

// ======= [ settings JSON - END   ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Reload JSON   ] ======== //
client.on("message", async message => {
  if (message.author.id !== dinfo.owner) return;
  if (message.content === config.prefix + "reload") {
    await cmd.run("refresh");
    await message.channel.send("Done,");
  }
});
// ======= [ Reload JSON - END   ] ======== //

// جمــيع الحقوق محفوظة لدي "Kahrbaa"
// ======= [ Console LOG    ] ======== //
client.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم واحد يعمل`);
  console.log(`Hi ${client.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
}); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
client2.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم اثنين يعمل `);
  console.log(`Hi ${client2.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client2.guilds.size} " ]`); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client3.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 3 يعمل`);
  console.log(`Hi ${client3.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client3.guilds.size} " ]`);
});
client4.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 4 يعمل`);
  console.log(`Hi ${client4.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client4.guilds.size} " ]`);
});
client5.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 5 يعمل`);
  console.log(`Hi ${client5.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client5.guilds.size} " ]`);
});
client6.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 6 يعمل`);
  console.log(`Hi ${client6.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client6.guilds.size} " ]`);
});
client7.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 7 يعمل`);
  console.log(`Hi ${client7.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client7.guilds.size} " ]`);
});
client8.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 8 يعمل`);
  console.log(`Hi ${client8.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client8.guilds.size} " ]`);
});
client9.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 9 يعمل`);
  console.log(`Hi ${client9.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client9.guilds.size} " ]`);
});
client10.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 10 يعمل`);
  console.log(`Hi ${client10.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client10.guilds.size} " ]`);
});
client11.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 11 يعمل`);
  console.log(`Hi ${client11.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client11.guilds.size} " ]`);
});
client12.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 12 يعمل`);
  console.log(`Hi ${client12.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client12.guilds.size} " ]`);
});
client13.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 13 يعمل`);
  console.log(`Hi ${client13.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client13.guilds.size} " ]`);
});
client14.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 14 يعمل`);
  console.log(`Hi ${client14.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client14.guilds.size} " ]`);
});
client15.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 15 يعمل`);
  console.log(`Hi ${client15.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client15.guilds.size} " ]`);
});
client16.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 16 يعمل`);
  console.log(`Hi ${client16.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client16.guilds.size} " ]`);
});
client17.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 17 يعمل`);
  console.log(`Hi ${client17.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client17.guilds.size} " ]`);
});
client18.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 18 يعمل`);
  console.log(`Hi ${client18.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client18.guilds.size} " ]`);
});
client19.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 19 يعمل`);
  console.log(`Hi ${client19.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client19.guilds.size} " ]`);
});
client20.on("ready", () => {
  console.log(`[Kahrbaa] : الحساب رقم 20 يعمل`);
  console.log(`Hi ${client20.user.tag} , This Code by : Kahrbaa `);
  console.log(`i Have  [ " ${client20.guilds.size} " ]`);
});
// ==== [مهم جدااا ] ==== //
const KahDEV = require("request");
const invitecode = config.invite;
client.on("ready", () => {
  console.log(`[BOT] ${client.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN }
  });
});

client2.on("ready", () => {
  console.log(`[BOT] ${client2.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN2 }
  });
});

client3.on("ready", () => {
  console.log(`[BOT] ${client3.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN3 }
  });
});

client4.on("ready", () => {
  console.log(`[BOT] ${client4.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN4 }
  });
});

client5.on("ready", () => {
  console.log(`[BOT] ${client5.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN5 }
  });
});

client6.on("ready", () => {
  console.log(`[BOT] ${client6.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN6 }
  });
});

client7.on("ready", () => {
  console.log(`[BOT] ${client7.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN7 }
  });
});

client8.on("ready", () => {
  console.log(`[BOT] ${client8.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN8 }
  });
});

client9.on("ready", () => {
  console.log(`[BOT] ${client9.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN9 }
  });
});

client10.on("ready", () => {
  console.log(`[BOT] ${client10.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN10 }
  });
});

client11.on("ready", () => {
  console.log(`[BOT] ${client11.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN11 }
  });
});

client12.on("ready", () => {
  console.log(`[BOT] ${client12.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN12 }
  });
});

client13.on("ready", () => {
  console.log(`[BOT] ${client13.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN13 }
  });
});

client14.on("ready", () => {
  console.log(`[BOT] ${client14.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN14 }
  });
});

client15.on("ready", () => {
  console.log(`[BOT] ${client15.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN15 }
  });
});

client16.on("ready", () => {
  console.log(`[BOT] ${client16.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN16 }
  });
});

client17.on("ready", () => {
  console.log(`[BOT] ${client17.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN17 }
  });
});

client18.on("ready", () => {
  console.log(`[BOT] ${client18.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN18 }
  });
});

client19.on("ready", () => {
  console.log(`[BOT] ${client19.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN19 }
  });
});

client20.on("ready", () => {
  console.log(`[BOT] ${client20.user.username} Ready!`);
  KahDEV({
    method: "POST",
    url: "https://discordapp.com/api/v6/invite/" + invitecode,
    headers: { authorization: process.env.KahTOKEN20 }
  });
});
// DONE //
// ======= [ Console LOG - END   ] ======== //

client.on("message", message => {
  if (!dinfo.owner.includes(message.author.id)) return;
  if (message.content.toLowerCase() === config.prefix + "help") {
    message.delete(5000);
    if (!message.channel.guild) return;
    message.channel.send(help);
  }
});




// ======= [ MODE - React MSG  ] ======== //
client.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send("")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
      } catch (e) {
        return;
      }
    }
  }
});
client2.on("message", async message => {
  if (message.content.startsWith(prefix + "j")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client2.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        // كههربا (حسن ياسر)
        return;
      } // كههربا (حسن ياسر)
    } else {
      try {
        await msg.react(args[2]);
      
      } catch (e) {
        return;
      } // كههربا (حسن ياسر)
    }
  } // كههربا (حسن ياسر)
}); // كههربا (حسن ياسر)
client3.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client3.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client4.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client4.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client5.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client5.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client6.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client6.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client7.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]); // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"

        await msg.react(
          client7.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      }
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        return;
      }
    }
  }
});
client8.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client8.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
      
      } catch (e) {
        return;
      }
    }
  }
});
client9.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client9.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client10.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client10.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client11.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client11.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client12.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client12.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client13.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client13.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client14.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client14.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
         
      } catch (e) {
        return;
      }
    }
  }
});
client15.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client15.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client16.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client16.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client17.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client17.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client18.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client18.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client19.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client19.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client20.on("message", async message => {
  if (message.content.startsWith(prefix + "react")) {
    if (!dinfo.owner.includes(message.author.id)) return;
    let args = message.content.split(" ").slice(1);
    console.log(
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")
    );
    if (!args[0])
      return message.channel.send(
        " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
      );
    if (args[0].length > 18 || args[0].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الروم``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[1])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    if (args[1].length > 18 || args[1].length <= 17) {
      return message.channel
        .send(" Error : ``تاكد من ايدي الرسالة``")
        .then(message => message.delete(4000));
    }
    if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
    if (!args[2])
      return message.channel
        .send(
          " Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
        )
        .then(message => message.delete(4000));
    let channel = await message.guild.channels.get(args[0]);
    if (!channel) return;
    let msg = await channel.fetchMessage(args[1]);
    if (!msg) return;
    if (!args.slice(2)) return;
    if (
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2] &&
      args
        .slice(2)
        .join(" ")
        .replace(/\<|\>/g, "")
        .split(":")[2].length == 18
    ) {
      try {
        await msg.react(
          client20.emojis.get(
            args
              .slice(2)
              .join(" ")
              .replace(/\<|\>/g, "")
              .split(":")[2]
          )
        );
      } catch (e) {
        return;
      }
    } else {
      try {
        await msg.react(args[2]);
        
      } catch (e) {
        return;
      }
    }
  }
});
client21.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client21.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client22.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client22.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client23.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client23.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client24.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client24.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client25.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client25.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client26.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client26.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client27.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client27.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client28.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client29.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client30.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client30.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client31.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client31.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client32.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client32.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client33.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client33.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client34.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client34.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client35.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client35.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client36.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client36.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client37.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client37.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client38.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client38.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client39.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client38.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client39.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client39.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client40.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client40.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client41.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client41.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client42.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client42.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client43.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client43.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client44.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client44.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client45.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client45.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client46.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client46.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client47.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client47.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client48.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client47.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client48.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client48.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client49.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client49.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client50.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client50.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});
client.on("message", async message => {
if (message.content.startsWith(prefix + "react")) {
if (!dinfo.owner.includes(message.author.id)) return;
let args = message.content.split(" ").slice(1);
console.log(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")
);
if (!args[0])
return message.channel.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
);
if (args[0].length > 18 || args[0].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الروم``")
.then(message => message.delete(4000));
}
if (isNaN(args[0])) return message.channel.send("**__الارقام فقط__!**");
if (!args[1])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
if (args[1].length > 18 || args[1].length <= 17) {
return message.channel
.send(" Error : ``تاكد من ايدي الرسالة``")
.then(message => message.delete(4000));
}
if (isNaN(args[1])) return message.channel.send("**__الارقام فقط__!**");
if (!args[2])
return message.channel
.send(
" Error : ``" + prefix + "react <ChannelID> <MessageID> <Emoji>``"
)
.then(message => message.delete(4000));
let channel = await message.guild.channels.get(args[0]);
if (!channel) return;
let msg = await channel.fetchMessage(args[1]);
if (!msg) return;
if (!args.slice(2)) return;
if (
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2] &&
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2].length == 18
) {
try {
await msg.react(
client20.emojis.get(
args
.slice(2)
.join(" ")
.replace(/\<|\>/g, "")
.split(":")[2]
)
);
} catch (e) {
return;
}
} else {
try {
await msg.react(args[2]);

} catch (e) {
return;
}
}
}
});

// ======= [ MODE - React MSG END  ] ======== //


// ======= [ StayVoice - MODE  ] ======== //
client.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client2.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client3.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {

    }
  }
});
client4.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client5.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      }
  }
});
client6.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client7.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client8.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client9.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
    }
  }
});
client10.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      // جمــيع الحقوق محفوظة لدي "Kahrbaa"
      
    }
  }
});
client11.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join() // جمــيع الحقوق محفوظة لدي "Kahrbaa"
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      message.reply("");
    }
  } // جمــيع الحقوق محفوظة لدي "Kahrbaa"
});
client12.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return; // جمــيع الحقوق محفوظة لدي "Kahrbaa"
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client13.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client14.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client15.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client16.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client17.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client18.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client19.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          
        })
        .catch(console.log);
    } else {
      
    }
  }
});
client20.on("message", message => {
  if (!message.guild) return;
  if (message.content === prefix + "wara") {
    if (!dinfo.owner.includes(message.author.id)) return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
         
        })
        .catch(console.log);
    } else {
      
    }
  }
});


client21.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client22.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client23.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client24.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client25.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client26.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client27.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client28.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client29.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client30.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client31.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client32.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {
}
}
});
client33.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client34.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client35.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client36.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client37.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client38.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client39.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client40.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client41.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client42.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client43.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client44.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client45.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client46.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client47.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client48.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client49.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client50.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client51.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client52.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client53.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client54.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client55.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client56.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client57.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client58.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client59.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client60.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client61.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client62.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client63.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client64.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client65.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client66.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client67.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client68.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client69.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client70.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client71.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client72.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client73.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client74.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client75.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client76.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client77.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client78.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client79.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client80.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client81.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client82.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client83.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client84.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client85.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client86.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client87.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client88.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client89.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client90.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client91.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client92.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client93.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client94.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client95.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client96.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client97.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client98.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client99.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client100.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});
client.on("message", message => {
if (!message.guild) return;
if (message.content === prefix + "wara") {
if (!dinfo.owner.includes(message.author.id)) return;
if (message.member.voiceChannel) {
message.member.voiceChannel
.join()
.then(connection => {

})
.catch(console.log);
} else {

}
}
});

    





//تۆكینه‌كان لێره‌ جا بنێ

client.login("");
client2.login("");
client3.login("");
client4.login("");
client5.login("");
client6.login("");
client7.login("");
client8.login("");
client9.login("");
client10.login("");
client11.login("");
client12.login("");
client13.login("");
client14.login("");
client15.login("");
client16.login("");
client17.login("");
client18.login("");
client19.login("");
client20.login("");
client21.login("");
client22.login("");
client23.login("");
client24.login("");
client25.login("");
client26.login("");
client27.login("");
client28.login("");
client29.login("");
client30.login("");
client31.login("");
client32.login("");
client33.login("");
client34.login("");
client35.login("");
client36.login("");
client37.login("");
client38.login("");
client39.login("");
client40.login("");
client41.login("");
client42.login("");
client43.login("");
client44.login("");
client45.login("");
client46.login("");
client47.login("");
client48.login("");
client49.login("");
client50.login("");
client51.login("");
client52.login("");
client53.login("");
client54.login("");
client55.login("");
client56.login("");
client57.login("");
client58.login("");
client59.login("");
client60.login("");
client61.login("");
client62.login("");
client63.login("");
client64.login("");
client65.login("");
client66.login("");
client67.login("");
client68.login("");
client69.login("");
client70.login("");
client71.login("");
client72.login("");
client73.login("");
client74.login("");
client75.login("");
client76.login("");
client77.login("");
client78.login("");
client79.login("");
client80.login("");
client81.login("");
client82.login("");
client83.login("");
client84.login("");
client85.login("");
client86.login("");
client87.login("");
client88.login("");
client89.login("");
client90.login("");
client91.login("");
client92.login("");
client93.login("");
client94.login("");
client95.login("");
client96.login("");
client97.login("");
client98.login("");
client99.login("");
client100.login("");
