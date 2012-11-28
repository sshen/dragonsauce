define([
	'Global',
	'Text!../html/templates/lists/playerListing.html'
	],
	function(Global, playerListing) {
		var PlayersListView = Backbone.View.extend({
			tagName: 'ul',
			id: 'inbox-list',
			attributes: {"data-role": 'listview', "data-divider-theme": 'd' },
			
			render: function() {
				var container = $(this.el);
				var playersList = new Firebase('https://firesupport.firebaseIO.com/players');
				console.log(playersList);

				console.log(container);
			}
		});
		return new PlayersListView();
	}
);
