var Dispatcher = require('./dispatcher');
var Constants = require('./constants');
var _findWhere = require('lodash/collection/findWhere');
// require('es6-promise').polyfill();
// require('isomorphic-fetch');

var Actions = {

  toggleEditMode: function () {
    Dispatcher.handleAction({
      actionType: Constants.TOGGLE_EDIT
    });
  },

  removeArticle: function (article) {
    Dispatcher.handleAction({
      actionType: Constants.REMOVE_ARTICLE,
      article: article
    });
  }

};

window.Actions = Actions;

module.exports = Actions;