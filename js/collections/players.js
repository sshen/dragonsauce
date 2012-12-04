define(
	['BackPusher', 'Player'],
	function(BackPusher, Player) {
		var Players = Backbone.Collection.extend({
			model: Player,
			url: "/players",
			initialize: function() {
				this.backboneFirebase = new BackboneFirebase(this);
			},
			comparator: function(player) {
  				return player.get("last");
			}
		});
		return new Players();
	}
);
