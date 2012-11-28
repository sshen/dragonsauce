define([
	'Global',
	'Text!../html/templates/navbars/header.html',
	],
	function(Global, header) {
		var headerView = Backbone.View.extend({
			initialize: function() {
				this.template = _.template(header);
			},
			render: function() {
				var container = this.template({title: 'Players'});
				$('#header').empty().append(container);	
			}
		});
		return new headerView();
	}
);