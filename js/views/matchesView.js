define([
	'Global',
	'headerView',
	'Players',
	'Text!../html/templates/lists/playerSelect.html'
	],
	function(Global, HeaderView, players, playerListing) {
		var MatchesView = Backbone.View.extend({
			tagName: 'ul',
			id: 'matches-list',
			attributes: {"data-role": 'listview', "data-divider-theme": 'd', "data-theme": "c" },
			initialize: function() {
				this.template = _.template(playerListing);
				this.collection = players;
			},
			
			render: function() {
				var container = $(this.el),
					template = this.template,
					players = this.collection,
					headerView = new HeaderView();

				container.empty();

				headerView.render({title: "Matches", rightAction: "New"});
				console.log(players);
				players.each(function(player) {
					container.append(template(player.toJSON()));
				});
				
				$('#main').find(":jqmData(role='content')").empty().append(container).trigger('create');				
			}
		});
		return MatchesView;
	}
);
