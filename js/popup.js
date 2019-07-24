var background = chrome.extension.getBackgroundPage();
$(function() {
	if (background.isLogin()) {
		$('.popup-form').show();
	} else {
		$('.popup-login').show();
	}
});