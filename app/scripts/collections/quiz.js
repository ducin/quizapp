/*global define*/

define([
    'underscore',
    'backbone',
    'models/question'
], function (_, Backbone, QuestionModel) {
    'use strict';

    var QuizCollection = Backbone.Collection.extend({
        model: QuestionModel,
        getRandom: function() {
        	return this.models[_.random(this.models.length-1)];
        }
    });

    return QuizCollection;
});
