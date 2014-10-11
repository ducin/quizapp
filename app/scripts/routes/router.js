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
            function(QuizCollection, QuizView, data) {
                var quiz = new QuizCollection(data.questions, {
                    title: data.name
                });
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
                modalView.$el.on('hidden.bs.modal', function () {
                    modalView.remove();
                });
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
