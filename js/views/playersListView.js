define([
	'Global',
	'Players',
	'Text!../html/templates/lists/playerListing.html'
	],
	function(Global, players, playerListing) {
		var PlayersListView = Backbone.View.extend({
			tagName: 'ul',
			id: 'inbox-list',
			attributes: {"data-role": 'listview', "data-divider-theme": 'd' },
			initialize: function() {
				this.template = _.template(playerListing);
			},
			
			render: function() {
				var container = $(this.el),
					template = this.template;
							
				console.log(players);
				players.each(function(player) {
					console.log(player);
					container.append(template(player.toJSON()));
				});
				console.log(container);
				
			}
		});
		return new PlayersListView();
	}
);
