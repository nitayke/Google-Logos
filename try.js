var new_gmail = "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_2x_r2.png 2x ,https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png 1x";
var old_gmail = "https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-2.png 2x ,https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-2.png 1x";

var new_calendar = "url(\"https://www.gstatic.com/companion/icon_assets/fgdY29RxT2yHBfEODHlF70ZI3ytOaPoX/calendar_v3_2x.png\")";
var old_calendar = "url(\"https://ssl.gstatic.com/calendar/images/dynamiclogo/2x/cal_31_v2.png\")";

var images = document.getElementsByTagName('img');
var side_icons = document.getElementsByClassName("aT5-aOt-I-JX-Jw");

for (var i = 0; i < images.length; i++)
{
	if (images[i].srcset === new_gmail)
		images[i].srcset = old_gmail;
}
for (var i = 0; i < side_icons.length; i++)
{
	if (side_icons[i].style.backgroundImage === new_calendar)
		side_icons[i].style.backgroundImage = old_calendar;
}