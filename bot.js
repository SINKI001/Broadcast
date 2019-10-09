const Discord = require("discord.js");
  const SINKI = new Discord.Client();
    const SINKItoken = "NjMxMzk3NjUwMTA0NzEzMjM3.XZ2RFw.c4_GP4x0xL-Qj_8kKeP8uPGf09U"
      SINKI.on('ready', () => {
        SINKI.user.setGame(`SINKI TEST Broadcast`,'https://www.twitch.tv/SINKI_4EVER');
          console.log('Im Ready!');
  
        });

  SINKI.on('message', message => {
    if (message.content.split(' ')[0] == '%k')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   SINKI.on("message", message => {
       var prefix = "%";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "send")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: |massage has been sent to all members')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});
SINKI.login(SINKItoken);
