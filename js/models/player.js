define(
	['BackPusher'],
	function(BackPusher) {
		var Player = Backbone.Model.extend({
			idAttribute: 'dragonsauce',
		});
		return Player;
	}
);