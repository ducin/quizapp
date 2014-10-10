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

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click .action-next': function() { this.trigger('next') },
            'click .action-show': function() { this.show() }
        },

        initialize: function () {
//            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template({
                question: 'my cat\'s name',
                answer: 'Delilah'
            }
//                this.model.toJSON()
            ));
        },

        show: function () {
            this.$('.answer').show();
        }
    });

    return QuestionView;
});
