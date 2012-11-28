define([
  'Global',
  'mainView'
], function(Global, mainView) {
	// http://documentcloud.github.com/backbone/#Router
	var initialLoad = true;
	
	var AppRouter = Backbone.Router.extend({
		routes: {
			'about': 'showAboutPage',
			// Default
			'*actions': 'defaultAction'
		},

		//Pages
		defaultAction: function(actions){
			this.showMainPage();
		},

		showMainPage: function(){
			if (initialLoad) {
				this.openPage(mainView);
			} else {
				$.mobile.changePage($('#main'));
			};
			$('#main').addClass('ui-btn-up-b').removeClass('ui-body-c');
			$('#footer .ui-btn-active').removeClass('ui-btn-active');
			$('span:contains("Show All")').parent('#footer a').addClass('ui-btn-active');
		},
		showAboutPage: function(){
			var aboutView = new AboutView();
			this.openPage(aboutView);
		},

		//route
		openPage: function(page){
			var renderedPage = page.render();
			$('body').append(renderedPage);

			if (initialLoad) {
				Global.getUtilities().globalInit();
				initialLoad = false;
			} else {
				var pageIdSelector = '#' + page.id;
				$(pageIdSelector).page();
				$.mobile.changePage($(pageIdSelector));
			}
		}
	});
	
	var initialize = function(){
		Global.getUtilities().parseTokenAndRegisterOauthHandler();
		
		var appRouter = new AppRouter();
		var eventAggregator = Global.getUtilities().eventAggregator;

		eventAggregator.on("home", function() {
			appRouter.navigate('', {trigger: true});
		});

		eventAggregator.on("showAbout", function() {
			appRouter.navigate('#about', {trigger: true});
		});

		Backbone.history.start();
	};
	
	return {
		initialize: initialize
	};
});