define([],
	function() {

		var utilities = { };

		utilities.globalInit = function() {
			$('body').on('pageshow',function(event, ui){
				var prevPage = $(ui.prevPage)
				if (prevPage.hasClass('ui-dialog')) {
					prevPage.remove();
				}
			});
		};

		utilities.parseTokenAndRegisterOauthHandler = function() {
			var params = {}, queryString = location.hash.substring(1),
			regex = /([^&=]+)=([^&]*)/g, m;
			while (m = regex.exec(queryString)) {
				params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
			}

			var token = params['token'];

			if(typeof token !== 'undefined' && token !== 'undefined' && token !== null && token !== 'null'){
				window.sessionStorage['token']=JSON.stringify(token);
			}
			
			var storedToken = window.sessionStorage['token'];
			
			if(typeof storedToken !== 'undefined' && storedToken !== 'undefined' && storedToken !== null && storedToken !== 'null'){
				$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
					var currentToken = JSON.parse(storedToken);
			 
					jqXHR.setRequestHeader("Authorization", "Bearer " + currentToken);
				});
			} else {
				$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
					jqXHR.setRequestHeader("Authorization", "");
				});
			}

			$(document).ajaxError(function(e, jqxhr, settings, exception) {
				if ( jqxhr.status == 0 || jqxhr.status == 200 || jqxhr.status == 400 || jqxhr.status == 404) {
					
				} else if (jqxhr.status == 401) {
					if (jqxhr.responseText.indexOf('invalid_token') > 0) {
						window.sessionStorage['token'] = null;
						$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
							jqXHR.setRequestHeader("Authorization", "");
						});
						$.ajax(settings);
					}
				} else {
					alert('unknown error in: ' + settings.url + '\nstatus code: ' + jqxhr.status + ' \nerror:\n' + jqxhr.responseText);
				}
			});
		};
		utilities.parseTokenAndRegisterOauthHandler();
	
		utilities.create = function(page) {
			try {
				page.page("destroy");
			} catch (err) {
				// if page has not been initialized yet, destroy is not necessary
			}
			page.page();
		};
		
		utilities.eventAggregator = _.extend({}, Backbone.Events);
		utilities.eventAggregator.on("logout", function() {
			window.sessionStorage['token'] = null;
		});
		
		return {
			getUtilities: function() {
				return utilities;
			}
		}
	}
);