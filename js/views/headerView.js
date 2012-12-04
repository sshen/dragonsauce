define([
	'Global',
	'Text!../html/templates/common/header.html'
	],
	function(Global, header) {
		var HeaderView = Backbone.View.extend({
			initialize: function() {
				this.template = _.template(header);
			},
			render: function(details) {
				var compiledTemplate = this.template(details),
					container = $(this.el);
				container.empty().append(compiledTemplate);
				$('#header').empty().append(container).trigger('create');
			},
			events: {
				"tap #New-btn": "newPlayer"
			},
			newPlayer: function(e) {
				e.preventDefault();
				Global.getUtilities().eventAggregator.trigger("newPlayerDialog");
			}
		});
		return HeaderView;
	}
);