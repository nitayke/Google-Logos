myVar = setTimeout(f, 4500);

function function_meet(pre_link)
{
    if (pre_link === "https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png")
        return "https://raw.githubusercontent.com/sharp30/Google-Logos/main/images/meet_google.png";
    
    if (pre_link === "https://www.gstatic.com/meet/google_meet_primary_horizontal_2020q4_logo_be3f8c43950bd1e313525ada2ce0df44.svg")
        return "https://raw.githubusercontent.com/sharp30/Google-Logos/main/images/meet.png";

    let place = pre_link.search('dp');
    let size = pre_link.substr(place - 2, 2);
    return "https://www.gstatic.com/images/branding/product/1x/meet_" + size + "dp.png"
}

function function_drive(pre_link) {
    let place = pre_link.search('dp');
    let size = pre_link.substr(place - 2, 2);
    return "https://www.gstatic.com/images/branding/product/1x/drive_" + size + "dp.png";
}

function function_gmail(pre_link){
    if ("https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" === pre_link)
        return "https://raw.githubusercontent.com/sharp30/Google-Logos/main/images/big_gmail.png";
    if ("https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_rtl_r2.png" === pre_link)
        return "https://raw.githubusercontent.com/sharp30/Google-Logos/main/images/gmail_rtl.png";
    let place = pre_link.search('dp');
    //add - for loop for getting all size
    let size = pre_link.substr(place - 2, 2);  
    if(isNaN(size))
    {
        console.log("fuck you all");
        size = "32";
    }
    return "https://www.gstatic.com/images/branding/product/1x/gmail_" + size + "dp.png";
};

function function_calendar(pre_link)
{
    var date = new Date();
    //for side icons only :)
    return "https://ssl.gstatic.com/calendar/images/dynamiclogo/2x/cal_" + date.getDate() + "_v2.png";
};

function f()
{

    var date = new Date();
    var dict = {
        // big gmail
        "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png":
        "https://raw.githubusercontent.com/sharp30/Google-Logos/main/images/big_gmail.png",

        "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_rtl_r2.png":
        "https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-2.png",
        // small gmail
        "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico":
        "https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png",
        // small gmail extension icon
        "chrome://extension-icon/pjkljhegncpnkpknbcohdijeoejaedia/128/1":
        "https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png",
        // small drive
        "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png":
        "https://ssl.gstatic.com/images/branding/product/1x/drive_48dp.png",
        //small drive icon
        "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png":
        "https://ssl.gstatic.com/images/branding/product/1x/drive_32dp.png", 
        // small calendar
        "https://www.gstatic.com/companion/icon_assets/fgdY29RxT2yHBfEODHlF70ZI3ytOaPoX/calendar_v3_2x.png":
        "https://ssl.gstatic.com/calendar/images/dynamiclogo/2x/cal_" + date.getDate() + "_v2.png",
        // small drive extension icon
        "chrome://extension-icon/apdfllckaahabafndbhieahigkjlhalf/128/1":
        "https://migrants-refugees.va/wp-content/uploads/2017/04/Google-Drive-icon.png",
        // meet "Google"
        "https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png":
        "https://raw.githubusercontent.com/sharp30/Google-Logos/main/images/meet_google.png",
        // meet icon
        "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-36dp/logo_meet_2020q4_color_1x_web_36dp.png":
        "https://www.gstatic.com/images/branding/product/1x/meet_32dp.png",

        "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-32dp/logo_meet_2020q4_color_1x_web_32dp.png":
        "https://www.gstatic.com/images/branding/product/1x/meet_32dp.png",
        // "google meet"
        "https://www.gstatic.com/meet/google_meet_primary_horizontal_2020q4_logo_be3f8c43950bd1e313525ada2ce0df44.svg":
        "https://raw.githubusercontent.com/sharp30/Google-Logos/main/images/meet.png"
    }

    let list =[ 
        "meet",
        "gmail",
        "drive",
        "calendar"]

    var tabs = document.getElementsByTagName('link');
    var images = document.getElementsByTagName('img');
    var side_icons = [document.getElementsByClassName("aT5-aOt-I-JX-Jw"),
        document.getElementsByClassName("Yb-Il-d-c-j"),
        document.getElementsByClassName("DWWcKd-OomVLb-LgbsSe-Bz112c-haAclf")];

    for (var i = 0; i < tabs.length; i++) 
    {
        if(!tabs[i].href.includes("gstatic"))
            continue;
        
        for(site in list)
        {
            var str = tabs[i].href.toLowerCase();
            if(str.includes(list[site]))
            {
                tabs[i].href = get_link(tabs[i].href,site);
            }
        }
    }
    
    for (var i = 0; i < images.length; i++) 
    {
        if(!images[i].src.includes("gstatic"))
            continue;
        
        for(site in list)
        {
            var str = images[i].src.toLowerCase();
            if(str.includes(list[site]))
            {
                var link = get_link(images[i].src,site);
                images[i].srcset = link.concat(" 2x, ", link, " 1x");
            }
        }
        
    }
    for (var l = 0; l < side_icons.length; l++)
    {
        for (var i = 0; i < side_icons[l].length; i++)
        {
            var src = side_icons[l][i].style.backgroundImage.substring(5,side_icons[l][i].style.backgroundImage.length -2);
           
            if(src.includes("gstatic"))
                continue;
    
            for(site in list)
            {
                console.log(list[site]);
                var str = src.toLowerCase()
                if(str.includes(list[site]))
                {
                    var link = get_link(images[i].src,site);
                    side_icons[l][i].style.backgroundImage = side_icons[l][i].style.backgroundImage.replace(src,link);
                }
            }
        }
    }
}

function get_link(pre_link,val)
{
    if(val == 0)
        return function_meet(pre_link);
    if(val == 1)
        return function_gmail(pre_link);
    if(val == 2)
        return function_drive(pre_link);
    if(val == 3)
        return function_calendar(pre_link);
}