const Discord = require('discord.js') ;
const client = new Discord.Client( ) ;

var prefix = '!'
var token = 'NTk0ODY1MDIwNzY1MjA4NTg2.XRo-Gg.kqReIannrJ6cS_sneG4GbWVG0u0

client.login(token) ;

client.on( 'ready ' , function( ){
       console.log("Je suis connecté ")
})

client.on('message' , function(message)){
	   if(message.content.includes(prefix + 'déconnexion'){
               message.channel.send('**je me déconnecte avec succès**')
       }
)