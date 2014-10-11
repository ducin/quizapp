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
            'click .action-next': function() { this.trigger('next') },
            'click .action-quit': function() { this.trigger('quit') },
            'click .action-show': function() { this.show() }
        },

        render: function () {
            this.$el.html(this.template({
                question: this.model.get('pol'),
                answer: this.model.get('eng')
            }));
        },

        show: function () {
            this.$('.answer').show();
        }
    });

    return QuestionView;
});
