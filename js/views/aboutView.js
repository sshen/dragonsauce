define([
	'Global',
	'UserSession',
	'CalendarFeed',
	'Text!../html/templates/common/about.html'
	],
	function(Global, UserSession, calendarFeed, aboutTemplate) {
		var AboutView = Backbone.View.extend({
			id: 'about',
			attributes: {'data-role': 'dialog'},
			initialize: function() {
				
			},
			render: function() {
				var container = $(this.el),
					mhpuser = new UserSession().get('mhpuser'),
					compiledTemplate = _.template(aboutTemplate),
					templateVariables;

				if (typeof mhpuser !== 'undefined' && mhpuser !== null) {
					calendarFeed.call();

					templateVariables = {
						"user": mhpuser.displayName,
						"url": calendarFeed.url
					};
				}

				container.empty().append(compiledTemplate(templateVariables));

				return container;
			},
			clear: function() {

			},
			events: {
				"tap #about-ok-btn": "home"
			},
			home: function(event) {
				event.preventDefault();
				Global.getUtilities().eventAggregator.trigger("home");
			}
		});

		return AboutView;
	}
);