/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var WelcomeView = Backbone.View.extend({
        template: JST['app/scripts/templates/welcome.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click .action-start': function() { this.trigger('start'); }
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return WelcomeView;
});
