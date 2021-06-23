// var axios = require('axios');
// var sockjs = require('sockjs');



/* ****************
*** Twitch CHAT ***
***************** */

// const client = new tmi.Client({
// 	channels: [ 'JustineGriffin' ]
// });

// client.connect();

// client.on('message', (channel, tags, message, self) => {

//     var twitchMessage = document.createElement("li")
//     twitchMessage.id = 'twitchMessage'
//     var twitchMessageText = document.createTextNode(`${tags['display-name']}: ${message}`)
//     twitchMessage.appendChild(twitchMessageText)
//     document.getElementById('messagesComp').appendChild(twitchMessage);
// 	    console.log(`${tags['display-name']}: ${message}`);

// });

/* ************ EMOTE ATTEMPT *********** */ 

// const client = new tmi.Client({
//   options: { debug: true, messagesLogLevel: "info" },
//   connection: {
//     reconnect: true,
//     secure: true
// 	},
//   channels: [ 'HasanAbi' ]
// });

// client.connect() //.catch(console.error);

// client.on('message', (channel, tags, message, self) => {
//     var twitchMessage = document.createElement("li")
//     var twitchMessageText = document.createTextNode(`${tags['display-name']}: ${message}`)

// /* START emote render */

// function getMessageHTML(message,  emotes ) {
//   if (!emotes) return message;

//   // store all emote keywords
//   // ! you have to first scan through 
//   // the message string and replace later
//   const stringReplacements = [];

//   // iterate of emotes to access ids and positions
//   Object.entries(emotes).forEach(([id, positions]) => {
//     // use only the first position to find out the emote key word
//     const position = positions[0];
//     const [start, end] = position.split("-");
//     const stringToReplace = message.substring(
//       parseInt(start, 10),
//       parseInt(end, 10) + 1
//     );

//     stringReplacements.push({
//       stringToReplace: stringToReplace,
//       replacement: `<img src="https://static-cdn.jtvnw.net/emoticons/v1/${id}/3.0">`,
//     });
//   });

//   // generate HTML and replace all emote keywords with image elements (messageHTML)
//   const twitchMessage = stringReplacements.reduce(
//     (acc, { stringToReplace, replacement }) => {
//       // obs browser doesn't seam to know about replaceAll
//       return acc.split(stringToReplace).join(replacement);
//     },
//     message
//   );
//   return twitchMessage;
// }
// getMessageHTML();

// /* END emote render */

// client.on('message', (channel, tags, message, self) => {
//   if(self) return;



// });

// twitchMessage.id = 'twitchMessage'
// twitchMessage.appendChild(twitchMessageText)
// document.getElementById('messagesComp').appendChild(twitchMessage);
// console.log(`${tags['display-name']}: ${message}`);


// });

/* END emote render VERSION */

/* *************************************** VOLUME ************************* */


// // https://chat4.volume.com/ws
// var sock = new WebSocket('https://volume.com/api/chatvideocontext/sisjones/');
        
// sock.onopen = function() {
//     console.log('open');
//     // sock.send('test');
//     // sock.send(JSON.stringify(roomInfo))
// };

// sock.addEventListener('message', function (event) {
//     console.log('Volume WS Message', event.data);

//     // var volumeMessage = document.createElement('li'); // is a node
//     // // volumeMessage.classList.add('messageListVolume')
//     // volumeMessage.innerHTML = event.data;
//     // document.getElementById.appendChild(volumeMessage);

//     var volumeMessage = document.createElement("li")
//     volumeMessage.id = 'volumeMessage'
//     var volumeMessageText = document.createTextNode(event.data)
//     volumeMessage.appendChild(volumeMessageText)
//     document.getElementById('messagesComp').appendChild(volumeMessage);

// });

// sock.onclose = function() {
//     console.log('close');
// };

/* ***** SCROLL ****** */
// https://medium.com/swlh/auto-scroll-in-javascript-283bdf76dc01

// var chatScroll = document.getElementById("messagesComp");
// chatScroll.scrollTop = chatScroll.scrollHeight;


    
/* ******** NEW ATTEMPT ********** */


// var username = "sisjones"
// axios.get(`https://volume.com/api/chatvideocontext/${username}/`, (response) => {
//     console.log("axios test")
//     var websocket_connection_url = response.data['wschat_host'];
//     var sock = new WebSocket(websocket_connection_url)
//     sock.on('connection', function(conn) {
//         conn.on('data', function(data) {
//             console.log(data)
//             console.log('test')    
//         })
//     });
// });

var username = "eliora"
axios.get(`https://volume.com/api/chatvideocontext/${username}/`)
    .then(response => {
    console.log("axios test", response.data.wschat_host)
    var websocket_connection_url = response.data.wschat_host;
    var sock = new SockJS(websocket_connection_url)

    var connectRoom = 
    {
      method: 'connect',
      data: {
      user: response.data['chat_username'],
      password: response.data['chat_password'],
      room: response.data['broadcaster_username'],
      room_password: response.data['room_pass']
      }
      }

      var joinRoom = 
        {
        method: 'joinRoom',
        data: {
        room: response.data['broadcaster_username']
        }
        }

    sock.onopen = function() {
      console.log(open);
      sock.send(JSON.stringify(connectRoom));
      sock.send(JSON.stringify(joinRoom));
      console.log(joinRoom)
    }

    // sock.onmessage = function(e) {
    //   console.log('message:', e.data);
    // }

    sock.addEventListener('message', function (event) {
    console.log('Volume WS Message', event.data);

    var volumeMessage = document.createElement("li")
    volumeMessage.id = 'volumeMessage'
    var volumeMessageText = document.createTextNode(event.data)
    volumeMessage.appendChild(volumeMessageText)
    document.getElementById('messagesComp').appendChild(volumeMessage);
    });

});


/* ******** NOTES ********** */
/*
 find a browser for non-browser javascript to send http request
 javascript event cycle
*/