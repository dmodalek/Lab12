(function() {

	var Talk = Backbone.Model.extend({

	});

	app.init.TalkView = Backbone.View.extend({
		model: new Talk,
		el: $('.talks'),
		template: Handlebars.compile($('#tmpl-talk').html()),

		initialize: function() {

			_.bindAll(this, 'render');
			this.render();
		},

		render: function() {
			log($('#tmpl-talk').html())
			log(this);
			var html = this.template(this.model.toJSON());

			log(111);
			$(this.el).html(html);

		}
	});

})();