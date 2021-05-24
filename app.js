


const client = new tmi.Client({
	channels: [ 'cloudyrobin' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    // document.getElementById('message').innerHTML = message;
    var twitchMessage = document.createElement("li")
    var twitchMessageText = document.createTextNode(`${tags['display-name']}: ${message}`)
    twitchMessage.appendChild(twitchMessageText)
    document.getElementById('messageListTwitch').appendChild(twitchMessage);
	console.log(`${tags['display-name']}: ${message}`);

});

/* ****************
*** VOLUME CHAT ***
***************** */

// Call https://volume.com/api/chatvideocontext/eduardoarantes/ to get the all the info you need to connect

var info = {"allow_group_shows": true, "needs_supporter_to_pm": false, "ads_zone_ids": {"300x250,centre": "", "300x250,right": "", "300x250,left": "", "468x60": "", "160x600,top": "", "160x600,bottom": "", "160x600,middle": ""}, "chat_settings": {"sort_users_key": "a", "silence_broadcasters": "false", "highest_token_color": "darkpurple", "font_color_broadcaster": "#EEE", "emoticon_autocomplete_delay": "0", "ignored_users": "", "show_emoticons": true, "font_size": "12pt", "b_tip_vol": "20", "allowed_chat": "all", "room_leave_for": "org", "font_color": "#20bbb0", "font_family": "\"Comic Sans MS\", cursive", "room_entry_for": "org", "v_tip_vol": "20"}, "num_followers": 84, "is_age_verified": false, "flash_host": "edge-12.volume.com", "tips_in_past_24_hours": 0, "dismissible_messages": [], "show_mobile_site_banner_link": false, "server_name": "www6", "num_users_required_for_group": 2, "group_show_price": 12, "chat_username": "nate", "is_supporter": true, "recommender_hmac": "0bec129810f3132edcf2d128f94628199e65ca1387f36fa3a87d0beefffd27ed", "broadcaster_gender": "male", "hls_source": "https://edge-12.volume.com/live-edge/amlst:faithmeyuu-sd-13c350e3ba9547174c30525de3e109a6c4fbb30e9acfc2613ffdcd6c2d753f7f_trns_h264/playlist.m3u8?rp=498a260974bbb24a636e9a4dd3f80bb48122d09316f113da7fa82753253706ab&u=nate&t=%7B%22username%22%3A%22nate%22%2C%22org%22%3A%22A%22%2C%22expire%22%3A1621833491%2C%22sig%22%3A%2291a10d01eef8329026056d18e78a5e1d7c2d2efd12d440762fafc0622ae7fcc0%22%2C%22room%22%3A%22faithmeyuu%22%7D", "allow_show_recordings": true, "staff_links": "[{\"text\":\"View Stream Status\",\"href\":\"#\"},{\"text\":\"Edit user in admin\",\"href\":\"\\/562pureWLQu6EoK7tVptK\\/accounts\\/siteuser\\/1239\\/change\\/\"},{\"text\":\"View payout info\",\"href\":\"\\/staff_tools\\/dashboard\\/view_payout_info\\/?username=faithmeyuu\"},{\"text\":\"View spending limit\",\"href\":\"\\/staff_tools\\/dashboard\\/spending_limit\\/?username=faithmeyuu\"},{\"text\":\"View security info\",\"href\":\"\\/security\\/cs\\/1239\\/\"},{\"text\":\"Compliance\",\"href\":\"\\/compliance\\/show\\/faithmeyuu\\/\"},{\"text\":\"Impersonate faithmeyuu\",\"href\":\"\\/impersonate\\/start\\/1239\\/\"}]", "is_moderator": false, "room_status": "public", "edge_auth": "", "chat_password": "931796e52778e2d023476b8f8c3c153fbb2e168e99b16d2db404e88fe1992164564cccc9d7fbeae9853e7e771f5c4dd5b5ad4ed904b1dd850899e36965b035fb", "room_pass": "498a260974bbb24a636e9a4dd3f80bb48122d09316f113da7fa82753253706ab", "is_mobile": false, "tfa_enabled": true, "room_title": "SING FOR A CAUSE", "viewer_username": "nate", "hidden_message": "", "following": false, "wschat_host": "https://chat2.volume.com/ws", "num_viewers": 165, "num_followed": 24, "spy_private_show_price": 6, "broadcaster_username": "faithmeyuu", "ignored_emoticons": [], "broadcaster_location": "Philippines", "apps_running": "[]", "token_balance": 245, "private_min_minutes": 0, "room_avatar": "https://volumephotovideo.s3.amazonaws.com/uploads/avatars/1239/2021-03-15/4Pgg13s4wuqk.jpg?AWSAccessKeyId=AKIA2GZBUGOOV7I4G5H4&Expires=1621835291&Signature=bVUkjcNqUXFWygyTu6tXrpd9lm8%3D", "viewer_gender": "m", "auto_load_admin_info": true, "num_users_waiting_for_group": 0, "stream_start_time": 1621820950, "is_widescreen": true, "broadcaster_on_new_chat": false, "http_host": "volume.com", "private_show_price": 60, "num_followed_online": 9, "has_studio": false, "explicit_content": false, "allow_private_shows": true}

// var chat = new SockJS(info['wschat_host']);


// var sock = new SockJS('https://volume.com/api/chatvideocontext/rnbk/');



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
// var chat = new WebSocket(info['wschat_host']);

// var roomInfo = {
//         method: 'connect',
//         data: {
//         user: info['chat_username'],
//         password: info['chat_password'],
//         room: info['broadcaster_username'],
//         room_password: info['room_pass']
//         }
//         };

        
sock.onopen = function() {
    console.log('open');
    // sock.send('test');
    // sock.send(JSON.stringify(roomInfo))
};

sock.addEventListener('message', function (event) {
    console.log('Volume WS Message', event.data);
    
    var volumeMessage = document.createElement('li'); // is a node
    volumeMessage.classList.add('messageListVolume')
    volumeMessage.innerHTML = event.data;
    document.body.appendChild(volumeMessage);
    

    // var volumeMessage = document.createElement("li")
    // var volumeMessageText = document.createTextNode('event.data')
    // volumeMessage.appendChild(volumeMessageText)
    //    volumeMessage.appendChild(event.data)
    // document.getElementByClass('messageListVolume').appendChild(event.data);
	console.log(event.data);
});



// sock.onmessage = function(event) {
//     console.log('message', event);
//     sock.close();
// };

sock.onclose = function() {
    console.log('close');
};



    