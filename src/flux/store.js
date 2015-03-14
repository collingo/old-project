var EventEmitter = require('events').EventEmitter;
var assign = require('lodash/object/assign');
var findWhere = require('lodash/collection/findWhere');
var findIndex = require('lodash/array/findIndex');
var reject = require('lodash/collection/reject');

var _data = {
  editing: false,
  articles: [{
    id: 1,
    title: 'Title1',
    url: 'url1',
    saved: '2015-03-14T00:01:00'
  },{
    id: 2,
    title: 'Title2',
    url: 'url2',
    saved: '2015-03-13T00:01:00'
  },{
    id: 3,
    title: 'Title3',
    url: 'url3',
    saved: '2015-03-12T00:01:00'
  },{
    id: 4,
    title: 'Title4',
    url: 'url4',
    saved: '2015-03-11T00:01:00'
  },{
    id: 5,
    title: 'Title5',
    url: 'url5',
    saved: '2015-03-10T00:01:00'
  },{
    id: 6,
    title: 'Title6',
    url: 'url6',
    saved: '2015-03-09T00:01:00'
  },{
    id: 7,
    title: 'Title7',
    url: 'url7',
    saved: '2015-03-08T00:01:00'
  },{
    id: 8,
    title: 'Title8',
    url: 'url8',
    saved: '2015-02-08T00:01:00'
  }]
};

var Store = assign({}, EventEmitter.prototype, {

  getData: function () {
    return _data;
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  },

  // store actions

  toggleEdit() {
    _data.editing = !_data.editing;
    Store.emitChange();
  },

  removeArticle(articleToDelete) {
    _data.articles = reject(_data.articles, (article) => {
      return article === articleToDelete;
    });
    Store.emitChange();
  }

});

window.Store = Store;

module.exports = Store;