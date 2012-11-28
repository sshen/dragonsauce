define(
	['Backbone', 'Player'],
	function(Backbone, 'Player') {
		var Players = Backbone.Collection.extend({
			model: Player,
			url: resources.get('launchpad-metadata').get('href'),
			parse: function(response) {
				return response.item;
			},
			initialize: function() {
				this.fetch({async: false});
			}
		});

		return Players;
	}
);
