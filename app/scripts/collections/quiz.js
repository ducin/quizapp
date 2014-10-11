/*global define*/

define([
    'underscore',
    'backbone',
    'models/question'
], function (_, Backbone, QuestionModel) {
    'use strict';

    var QuizCollection = Backbone.Collection.extend({
        model: QuestionModel,
        lastIndex: -1,
        getRandom: function() {
            var idx = this.lastIndex;
            while (idx === this.lastIndex) {
                idx = _.random(this.models.length - 1);
            }
            this.lastIndex = idx;
            return this.models[idx];
        }
    });

    return QuizCollection;
});
