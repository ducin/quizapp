/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var RootView = Backbone.View.extend({
        template: JST['app/scripts/templates/root.ejs'],
        el: 'div.container',

        events: {
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return RootView;
});
