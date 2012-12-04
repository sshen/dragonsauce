define(
	['BackPusher'],
	function(BackPusher) {
		var Player = Backbone.Model.extend({
			idAttribute: '_firebase_name',
			defaults: {
				"wins":0,
			},
		});
		return Player;
	}
);