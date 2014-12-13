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
            var handler = function(ModalView) {
                // create, render and attach modal to the DOM
                var modalView = new ModalView();
                self.modalContainer.append(modalView.render().$el);
                // open modal
                modalView.$el.modal();
                // remove modal from DOM when closed
                modalView.$el.on('hidden.bs.modal', function () {
                    modalView.remove();
                });
            };
            // this can't be done dynamically, since r.js analyses code
            // statically in search of modules to be loaded in future:
            // https://twitter.com/integralist/status/351006156883361793
            // dynamically built module name will result in require error
            switch (modalName) {
                case 'about':
                    require(['views/about'], handler);
                    break;
                case 'attributions':
                    require(['views/attributions'], handler);
                    break;
                default:
                    throw new Error('unknown modal view trying to be loaded: ' + modalName);
            }
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
