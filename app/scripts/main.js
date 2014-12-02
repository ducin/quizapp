/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        json: {
            deps: ['text']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        text: '../bower_components/requirejs-text/text',
        json: '../bower_components/requirejs-plugins/src/json'
    },
    findNestedDependencies: true
});

require([
    'backbone',
    'bootstrap',
    'routes/router',
    'views/root'
], function (Backbone, Bootstrap, Router, RootView) {
    var rootView = new RootView();
    rootView.render();
    new Router({
        modalContainer: $('body')
    });
    Backbone.history.start();
});
