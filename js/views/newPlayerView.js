define([
	'Global',
	'Player',
	'Players',
	'Text!../html/templates/panes/newPlayer.html'
	],
	function(Global, Player, players, newPlayerTemplate) {
		var NewPlayerView = Backbone.View.extend({
			id: 'new-player',
			attributes: {'data-role': 'dialog'},
			initialize: function() {
				
			},
			render: function() {
				var container = $(this.el),
					template = _.template(newPlayerTemplate);
				
				container.empty().append(template);

				return container;
			},
			
			events: {
				"tap #new-player-btn": "newPlayer",
				"keyup form": "formValidation"
			},
			newPlayer: function(e) {
				e.preventDefault();
				var formJSON = $(this.el).find(":jqmData(role='content') form").formParams();
				player = new Player(formJSON);
				player.set('_firebase_name', formJSON.first + ' ' + formJSON.last);
				players.create(player);
				history.back();
			},
			formValidation: function(e) {
				var message = $("form").formParams(),
					values = _.values(message);
					size = values.length;
				if (_.without(values, "").length == size){
					$('#new-player-btn').removeClass('ui-disabled');
				} else {
					$('#new-player-btn').addClass('ui-disabled');
				}
			}
		});

		return NewPlayerView;
	}
);