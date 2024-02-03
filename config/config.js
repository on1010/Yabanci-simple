// This is a module export statement for exporting an object
module.exports = {
  // This is an object containing various settings
  settings: {
    prefix: '!', // the prefix for commands example, !help
    botName: '', // this is your bot name, it has to be the same in game
    owerName: 'Azzzul.Bleu', // change this to the owner name
    ownerId: '6505e1e00e8e5adf5a703631', // change this with the owner of the bot ID
    botId: '92d6850d8bf0726625f2592540471be6b7f9a12c06db2f4a85b4240378f9d2ca', // change this with your bot ID, you can get the bot id once you start the bot.
    developers: ['Atekinz'], // you can add as many as you want
    moderators: ['Azzzul.Bleu',
], // add as many as you want
    roomName: 'Changeme', // change this to your room name
    // change this to where you want the bot to teleport on start
    coordinates: {
      x: 18,
      y: 12,
      z: 6,
      facing: 'FrontLeft'
    },
    reactionName: 'wink' // the reaction you want to use to kick players, 'wink', 'wave, 'heart', 'clap', 'thumbsup'
  },
  // This is an object containing authentication data
  authentication: {
    room:"658efe248de700e0ada80415" , // your room ID can be found in highrise.game/room/
    token: "92d6850d8bf0726625f2592540471be6b7f9a12c06db2f4a85b4240378f9d2ca" // your token ID     you can get one from https://highrise.game
  }
}