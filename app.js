
/* ****************
*** Twitch CHAT ***
***************** */

const client = new tmi.Client({
	channels: [ 'lara6683' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    var twitchMessage = document.createElement("li")
    twitchMessage.id = 'twitchMessage'
    var twitchMessageText = document.createTextNode(`${tags['display-name']}: ${message}`)
    twitchMessage.appendChild(twitchMessageText)
    document.getElementById('messagesComp').appendChild(twitchMessage);
	console.log(`${tags['display-name']}: ${message}`);

});

/* ****************
*** VOLUME CHAT ***
***************** */

// Call https://volume.com/api/chatvideocontext/eduardoarantes/ to get the all the info you need to connect

// var chat = new SockJS(info['wschat_host']);

// var sock = new SockJS('https://volume.com/api/chatvideocontext/rnbk/');
// sock.onopen = function() {
//     console.log('open');
//     sock.send('test');
// };
// sock.onmessage = function(e) {

//     console.log('message', e.data);
//     sock.close();
// };
// sock.onclose = function() {
//     console.log('close');
// };

/* ***********************
        WEB SOCKET
********************** */

var sock = new WebSocket('wss://chat1.volume.com/ws/363/nxc5l112/websocket');
        
sock.onopen = function() {
    console.log('open');
    // sock.send('test');
    // sock.send(JSON.stringify(roomInfo))
};

sock.addEventListener('message', function (event) {
    console.log('Volume WS Message', event.data);

    // var volumeMessage = document.createElement('li'); // is a node
    // // volumeMessage.classList.add('messageListVolume')
    // volumeMessage.innerHTML = event.data;
    // document.getElementById.appendChild(volumeMessage);

    var volumeMessage = document.createElement("li")
    volumeMessage.id = 'volumeMessage'
    var volumeMessageText = document.createTextNode(event.data)
    volumeMessage.appendChild(volumeMessageText)
    document.getElementById('messagesComp').appendChild(volumeMessage);



});

sock.onclose = function() {
    console.log('close');
};

/* ***** SCROLL ****** */
// https://medium.com/swlh/auto-scroll-in-javascript-283bdf76dc01

// var chatScroll = document.getElementById("messagesComp");
// chatScroll.scrollTop = chatScroll.scrollHeight;


    