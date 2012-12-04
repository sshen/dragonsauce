define([
	'Global',
	'footerView',
	'playersListView',
	'Players',
	'Text!../html/templates/common/main.html'
	],
	function(Global, footerView, PlayersListView, players, mainTemplate ) {
		var MainView = Backbone.View.extend({
			el: $('#main'),
			initialize: function() {
				this.mainTemplate = _.template(mainTemplate);
			},
			render: function() {
				var compiledTemplate = this.mainTemplate,
				container = $(this.el);
				container.empty().append(compiledTemplate);
				footerView.render();
				new PlayersListView();
				
				Global.getUtilities().create(container);
			}
		});
		return new MainView();
	}
);