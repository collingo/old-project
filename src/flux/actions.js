var Store = require('./store');
var _findWhere = require('lodash/collection/findWhere');

var Actions = {

  toggleEditMode: function () {
    Store.toggleEdit();
  },

  removeArticle: function (article) {
    Store.removeArticle(article);
  }

};

window.Actions = Actions;

module.exports = Actions;