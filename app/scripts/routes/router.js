/*global define*/

define([
    'jquery',
    'backbone',
    'json'
], function ($, Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({
    	initialize: function(options) {
    		this.modalContainer = options.modalContainer;
    	},

        routes: {
        	'': 'home',
        	'about': 'about',
        	'attributions': 'attributions'
        },

        home: function() {
        	require(['collections/quiz', 'views/quiz', 'json!data/eng.json'],
        	function(QuizCollection, QuizView, EngData) {
        		var quiz = new QuizCollection();
	            var quizView = new QuizView({
	            	collection: quiz
	            });
	            quizView.render();
        	});
        },

		handleModal: function(modalName) {
			var self = this;
			require(['views/' + modalName], function(ModalView) {
				// create, render and attach modal to the DOM
				var modalView = new ModalView();
				self.modalContainer.append(modalView.render().$el);
				// open modal
				modalView.$el.modal();
				// remove modal from DOM when closed
				modalView.$el.on('hidden.bs.modal', function (e) {
					modalView.remove();
				})
			});
		},

	    about: function() {
        	this.handleModal('about');
        },

        attributions: function() {
        	this.handleModal('attributions');
        }
    });

    return Router;
});
