
console.log("hey everybody!");

myVar = setTimeout(f, 4500);

function f()
{
    var date = new Date();
    var dict = {
    "Gmail":{
        "curr" : [
            "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_server_1x.png",
            "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
            "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png",
            "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_2x_rtl_r2.png",
            "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_rtl_r2.png",],
        "old":[
            "https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-gmail-icon-download-png-and-vector-1.png"]},
    
	"Maps":{
        "curr" : [
            "https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png",],
        "old":[
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Google_Maps_icon.svg/1200px-Google_Maps_icon.svg.png"]},
    
	"Calendar":{
        "curr" : [
            "https://www.gstatic.com/companion/icon_assets/fgdY29RxT2yHBfEODHlF70ZI3ytOaPoX/calendar_v3_2x.png"], 
        "old":[
            "https://ssl.gstatic.com/calendar/images/dynamiclogo/2x/cal_" + date.getDate() + "_v2.png"]},

    "Meet":{
        "curr": [
            "https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png"],
        "old":[
            "https://cdn.freelogovectors.net/wp-content/uploads/2020/07/google-meet-logo.png"]},
    
    "Drive" : {
        "curr" : [
            "https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png",
            "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png"],
        "old" : [
            "https://www.pepperi.com/wp-content/uploads/2016/10/google-drive.png",]}

    }

    var new_dict = {
        // big gmail
        "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png":
        "https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-2.png",

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
        "https://migrants-refugees.va/wp-content/uploads/2017/04/Google-Drive-icon.png",
        // small calendar
        "https://www.gstatic.com/companion/icon_assets/fgdY29RxT2yHBfEODHlF70ZI3ytOaPoX/calendar_v3_2x.png":
        "https://ssl.gstatic.com/calendar/images/dynamiclogo/2x/cal_" + date.getDate() + "_v2.png",
        // small drive extension icon
        "chrome://extension-icon/apdfllckaahabafndbhieahigkjlhalf/128/1":
        "https://migrants-refugees.va/wp-content/uploads/2017/04/Google-Drive-icon.png",
        // meet "Google"
        "https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png":
        "https://raw.githubusercontent.com/sharp30/Google-Logos/main/images/meet_google.png"
    }
    var tabs = document.getElementsByTagName('link');
    var images = document.getElementsByTagName('img');
    var side_icons = [document.getElementsByClassName("aT5-aOt-I-JX-Jw"),document.getElementsByClassName("Yb-Il-d-c-j"),document.getElementsByClassName("DWWcKd-OomVLb-LgbsSe-Bz112c-haAclf")];

    for (var i = 0; i < tabs.length; i++) 
    {
        if(tabs[i].href in new_dict)
        {
            console.log("found");
            tabs[i].href = new_dict[tabs[i].href];
        }
        
    }
    for (var i = 0; i < images.length; i++) 
    {
        if(images[i].src in new_dict)
        {
            console.log("found");
            images[i].srcset = new_dict[images[i].src].concat(" 2x, ", new_dict[images[i].src], " 1x");
        }
        
    }
    for (var i = 0; i < images.length; i++) 
    {
        if(images[i].src in new_dict)
        {
            console.log("found");
            images[i].srcset = new_dict[images[i].src].concat(" 2x, ", new_dict[images[i].src], " 1x");
        }
        
    }
    console.log("second for")
    for (var l = 0; l < side_icons.length; l++)
    {
        for (var i = 0; i < side_icons[l].length; i++)
        {
            var src = side_icons[l][i].style.backgroundImage.substring(5,side_icons[l][i].style.backgroundImage.length -2);
            if(src in new_dict)
            {
                side_icons[l][i].style.backgroundImage = side_icons[l][i].style.backgroundImage.replace(src,new_dict[src]);
            }

        }
    } 
}