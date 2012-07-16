window.app = {};
window.app.init = {};

$(function() {

	var App = Backbone.Model.extend({

	});

	var AppView = Backbone.View.extend({
		model: new App,
		el: $('body'),

		initialize: function() {

			app.talks = new app.init.TalkView;
		}
	});

	new AppView;

});