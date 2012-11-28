define(
	['jQuery'],
	function ($) {
		$(document).on("mobileinit", function () {
			// disable jquery mobile routing to avoid conflict with backbone routing
	        $.mobile.ajaxEnabled = false;
	        $.mobile.linkBindingEnabled = false;
	        $.mobile.hashListeningEnabled = false;
	        $.mobile.pushStateEnabled = false;
	        $.mobile.changePage.defaults.changeHash = false;
		});
});