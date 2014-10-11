/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'views/welcome',
    'views/question'
], function ($, _, Backbone, WelcomeView, QuestionView) {
    'use strict';

    var QuizView = Backbone.View.extend({
        el: '#quiz-container',
        events: {},

        initialize: function () {
            this.currentView = null;
        },

        render: function () {
            this.currentView = new WelcomeView();
            this.currentView.render();
            this.listenTo(this.currentView, 'start', this.next);
            this.$el.html(this.currentView.$el);
        },

        next: function() {
            this.currentView.remove();
            this.currentView = new QuestionView({
                model: this.collection.getRandom()
            });
            this.currentView.render();
            this.listenTo(this.currentView, 'next', this.next);
            this.listenTo(this.currentView, 'quit', this.quit);
            this.$el.html(this.currentView.$el);
        },

        quit: function() {
            this.currentView.remove();
        }
    });

    return QuizView;
});
