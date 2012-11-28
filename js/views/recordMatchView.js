define([
	'Global',
	'Isotope',
	'UserSession',
	'LaunchpadItems',
	'Text!../html/templates/lists/linkItem.html',
	'Text!../html/templates/lists/appItem.html'
	],
	function(Global, Isotope, UserSession, LaunchpadItems, linkItemTemplate, appItemTemplate) {
		var appListView = Backbone.View.extend({
			tagName: 'div',
			id: 'container',
			initialize: function() {
				this.linkItemTemplate = _.template(linkItemTemplate);
				this.appItemTemplate = _.template(appItemTemplate);
			},
			render: function() {
				var container = $(this.el);
				var launchpadItems = new LaunchpadItems();
				var appItemTemplate = this.appItemTemplate;
				var linkItemTemplate = this.linkItemTemplate;
				
				_.each(launchpadItems.models, function(item) {
					if (item.get('type') === 'APP') {
						container.append(appItemTemplate(item.toJSON()));
					} else if (item.get('type') === 'LINK') {
						container.append(linkItemTemplate(item.toJSON()));
					}
				});
				$('#main').find(":jqmData(role='content')").append(container);
				
				$(window).load(function(){
					$('#container').isotope({
						itemSelector : '.item',
						layoutMode : 'masonry'
					});
				});
			},
			events: {
				
			},
			
		});
		
		return new appListView;
	}
);