/*global define*/

define([
    'underscore',
    'backbone',
    'models/question'
], function (_, Backbone, QuestionModel) {
    'use strict';

    var QuizCollection = Backbone.Collection.extend({
        model: QuestionModel
    });

    return QuizCollection;
});
