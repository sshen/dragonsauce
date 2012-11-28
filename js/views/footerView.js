define([
	'Global',
	'Text!../html/templates/common/footer.html',
	],
	function(Global, footerTemplate) {
		var footerView = Backbone.View.extend({
			tagName: 'div',
			attributes: {"data-role":"navbar"},
			initialize: function() {
			},
			render: function() {
				var container = $(this.el);
				var template = _.template(footerTemplate);
				
				container.append(template);
				
				$('#footer').empty().append(container);
			},
			events: {
			},
			
		});
		
		return new footerView;
	}
);