require.config({
	paths: {
		// path configuration assumes .js suffix

		// Libraries
		'jQuery': 'http://code.jquery.com/jquery.min',
		'jQM': 'http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min',
		'Underscore': 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min',
		'JSON2': 'http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2',
		'Backbone': 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min',
		'Firebase': 'https://static.firebase.com/v0/firebase',
		'BackPusher': 'libs/backbone-firebase',
		'Global': 'global',
		
		// Custom Helpers
		'jQMConfig': 'libs/jqm-config', // Disables JQM Routing
	
		// Models
		'Player': 'models/player',
		
		// Collections
		'Players': 'collections/players',

		// Views
		'mainView': 'views/mainView',
		'headerView': 'views/headerView',
		'footerView': 'views/footerView', // use custom footer that doesn't have launchpad button, and has login/logout buttons
		'playersListView': 'views/playersListView',
		'aboutView': 'views/aboutView',

		// require js plugins
		'Text': 'libs/text'
    },
	shim: {
		'jQuery': {
			exports: '$'
		},
		'jQMConfig': {
			deps: ['jQuery']
		},
		'jQM': {
			deps: ['jQMConfig']
		},
		'Isotope': {
			deps: ['jQuery']
		},
		'Underscore': {
			exports: '_'
		},
		'Backbone': {
			deps: ['Underscore', 'jQuery', 'JSON2'],
			exports: 'Backbone'
		},
		'BackPusher': {
			deps: ['Backbone', 'Firebase']
		},
		'Utilities': {
			deps: ['jQuery','Backbone']
		},
		'Global': {
			deps: ['BackPusher', 'jQM']
		}
	}
});

define(
	['router'],

	function (router) {
		router.initialize();
	}
);