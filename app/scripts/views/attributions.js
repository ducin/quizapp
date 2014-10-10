/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var AttributionsView = Backbone.View.extend({
        template: JST['app/scripts/templates/attributions.ejs'],

        tagName: 'div',
        id: 'attributionsModal',
        className: 'modal fade',

        events: {},

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    return AttributionsView;
});
