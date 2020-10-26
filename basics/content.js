
console.log("hey everybody!");

var dict = {
    "Gmail":{"curr" : ["https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_server_1x.png","https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",],
     "old":["https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png"],},
    "Maps":{"curr" : ["https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png",],
     "old":[]},
    "Calendar":{"curr" : ["https://www.gstatic.com/companion/icon_assets/fgdY29RxT2yHBfEODHlF70ZI3ytOaPoX/calendar_v3_2x.png"], 
    "old":[]},
    "Meet":{"curr": [], "old":[]}
}


var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
    var cond = false;
    for(key in dict)
    {

        if(images[i].src in dict[key][curr])
        {
            images[i].src = dict[key][old][0];
            cond = true;
        }
        if(cond)
            break;

    }
}