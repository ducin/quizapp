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
        },

        render: function () {
            console.log('rendering welcome view');
            this.welcomeView = new WelcomeView();
            this.welcomeView.render();
            this.listenTo(this.welcomeView, 'start', this.start);
            this.$el.html(this.welcomeView.$el);
        },

        start: function() {
            console.log('removing welcome view, rendering question view');
            this.welcomeView.remove();
            this.questionView = new QuestionView();
            this.questionView.render();
            this.listenTo(this.questionView, 'next', this.next);
            this.$el.html(this.questionView.$el);
        },

        next: function() {
            console.log('removing old question view, rendering new question view');
            this.welcomeView.remove();
            this.questionView = new QuestionView();
            this.questionView.render();
            this.listenTo(this.questionView, 'next', this.next);
            this.$el.html(this.questionView.$el);
        }
    });

    return QuizView;
});
