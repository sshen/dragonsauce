define([
	'Global',
	'headerView',
	'footerView',
	'playersListView',
	'Text!../html/templates/common/main.html'
	],
	function(Global, headerView, footerView, playersListView, mainTemplate ) {
		var mainView = Backbone.View.extend({
			el: $('#main'),
			initialize: function() {
				this.mainTemplate = _.template(mainTemplate);
			},
			render: function() {
				var compiledTemplate = this.mainTemplate,
				container = $(this.el);
				container.empty().append(compiledTemplate);
				footerView.render();
				headerView.render();
				playersListView.render();
				
				Global.getUtilities().create(container);
			}
		});
		return new mainView();
	}
);