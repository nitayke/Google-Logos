var old_icon = "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_2x_r2.png 2x ,https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png 1x";
var new_icon = "https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-2.png 2x ,https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-2.png 1x";
var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++)
{
	if (images[i].srcset === old_icon)
		images[i].srcset = new_icon;
}