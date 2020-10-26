
console.log("hey everybody!");

var dict = {
    "Gmail":{"curr" : ["https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_server_1x.png", // 2-5 are the same for us
		"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
		"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_rtl_r2.png",
		"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_2x_rtl_r2.png",
		"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_rtl_r2.png"],
	"old":["https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-2.png",
		"https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png"]},
	
	"Calendar":{"curr" : ["url(\"https://www.gstatic.com/companion/icon_assets/fgdY29RxT2yHBfEODHlF70ZI3ytOaPoX/calendar_v3_2x.png\")"], 
    "old":["url(\"https://ssl.gstatic.com/calendar/images/dynamiclogo/2x/cal_31_v2.png\")"]},
	
	"Drive":{"curr": [], "old":[]},
    
	"Docs":{"curr": [], "old":[]},
	
	"Meet":{"curr": [], "old":[]}
}

var images = document.getElementsByTagName('img');
var side_icons = document.getElementsByClassName("aT5-aOt-I-JX-Jw");

for (var i = 0; i < images.length; i++) {
    var cond = false;
    for(key in dict)
    {
        console.log(key);

        if(images[i].src in dict[key]["curr"])
        {
            images[i].src = dict[key]["old"][0];
            cond = true;
        }
        if(cond)
            break;

    }
}

for (var i = 0; i < images.length; i++) {
    for(key in dict)
    {
		var cond = false;
        console.log(key);

		for (curr_url in dict[key]["curr"])
		{
			if (images[i].src === curr_url)
			{
				console.log(images[i].srcset + " " + dict[key]["curr"] + " " + key);
				images[i].srcset = dict[key]["old"][0].concat(" 2x, ", dict[key]["old"][0], " 1x");
				cond = true;
			}
			if(cond)
				break;
        }
    }
}

for (var i = 0; i < side_icons.length; i++) {
    var cond = false;
    for(key in dict)
    {
        console.log(key);

        if(side_icons[i].style.backgroundImage === dict[key]["curr"][0])
        {
            console.log("Found " + i + " " + key);
            side_icons[i].style.backgroundImage = dict[key]["old"][0];
			console.log(images[i]);
            cond = true;
        }
        if(cond)
            break;

    }
}