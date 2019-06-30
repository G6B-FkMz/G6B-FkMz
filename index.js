const Discord = require( 'discord.js') ;
const client = new Discord.Client( ) ;

var prefix = 't.'
var token = 'NTk0OTA4NTY3ODI0MjM2NTY0.XRjbCg.rlM7B3ZX5XYr4drXU9Pm8GawzTs

client.login(token) ;

client.on( 'ready ' , function( ){
       console.log( "Je suis connecté ")
})

client.on('message' , function(message)){
	   if(message.content.includes(prefix + 'déconnexion'){
               message.channel.send('**je me déconnecte avec succès**')
       }
)
