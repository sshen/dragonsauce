define(
	['BackPusher', 'Player'],
	function(BackPusher, Player) {
		var Players = Backbone.Collection.extend({
			model: Player,
			url: "/players",
			initialize: function(callbackFn) {
				this.backboneFirebase = new BackboneFirebase(this);
				if ($.isFunction(callbackFn))
					callbackFn.call();
			}
		});
		return new Players();
	}
);
