define([
	'Global',
	'headerView',
	'Players',
	'Text!../html/templates/lists/playerListing.html'
	],
	function(Global, HeaderView, players, playerListing) {
		var PlayersListView = Backbone.View.extend({
			tagName: 'ul',
			id: 'players-list',
			attributes: {"data-role": 'listview', "data-divider-theme": 'd', "data-theme": "c" },
			initialize: function() {
				this.template = _.template(playerListing);
				this.collection = players;
				this.collection.bind('add', this.render, this);
			},
			
			render: function() {
				var container = $(this.el),
					template = this.template,
					players = this.collection,
					headerView = new HeaderView();

				container.empty();

				headerView.render({title: "Players", rightAction: "New"});
				console.log(players);
				players.each(function(player) {
					container.append(template(player.toJSON()));
				});
				
				$('#main').find(":jqmData(role='content')").empty().append(container).trigger('create');				
			}
		});
		return PlayersListView;
	}
);
