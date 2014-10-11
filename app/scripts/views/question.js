/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var QuestionView = Backbone.View.extend({
        template: JST['app/scripts/templates/question.ejs'],

        events: {
            'click .action-next': 'triggerNext',
            'click .action-quit': 'triggerQuit',
            'click .action-show': 'show'
        },

        initialize: function (options) {
            this.count = options.count;
            this.keyAction = this.keyAction.bind(this);
            $(document).bind('keydown', this.keyAction);
        },

        render: function () {
            this.$el.html(this.template({
                question: this.model.get('pol'),
                answer: this.model.get('eng'),
                count: this.count
            }));
        },

        destroy: function() {
            $(document).unbind('keydown', this.keyAction);
            this.undelegateEvents();
            this.$el.removeData().unbind();
            this.remove();
            Backbone.View.prototype.remove.call(this);
        },

        keyAction: function(e) {
            switch (e.keyCode) {
                case 32: // space
                case 83: // s, S
                    this.show();
                    break;
                case 13: // enter
                case 78: // n, N
                    this.triggerNext();
                    break;
                case 27: // escape
                case 81: // q, Q
                    this.triggerQuit();
                    break;
            }
            e.preventDefault();
        },

        triggerNext: function() {
            this.trigger('next');
        },

        triggerQuit: function() {
            this.trigger('quit');
        },

        show: function () {
            this.$('.answer').show();
        }
    });

    return QuestionView;
});
