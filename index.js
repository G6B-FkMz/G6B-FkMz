const Discord = require('discord.js') ;
const client = new Discord.Client( ) ;

var prefix = '!'
var token = 'NTk0OTA4NTY3ODI0MjM2NTY0.XRjsNw.35ZZih3PfMDwreOU66sI8ZBDH9M

client.login(token) ;

client.on( 'ready ' , function( ){
       console.log("Je suis connecté ")
})

client.on('message' , function(message)){
	   if(message.content.includes(prefix + 'déconnexion'){
               message.channel.send('**je me déconnecte avec succès**')
       }
)