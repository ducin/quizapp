/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AboutView = Backbone.View.extend({
        template: JST['app/scripts/templates/about.ejs'],

        tagName: 'div',
        id: 'aboutModal',
        className: 'modal fade',

        events: {},

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    return AboutView;
});
