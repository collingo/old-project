var React = require('react');
var addons = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Actions = require('../../flux/actions');
var ArticleList = require('../article-list/view.jsx');

var ArticleListPage = {
  displayName: 'ArticleListPage',
  render: function () {
    return (
      <div id="article-list-page">
        <header>
          <h1>ShelfLife</h1>
          <button onClick={this.onEditClick}>{this.props.editing ? "Cancel" : "Remove"}</button>
        </header>
        <ArticleList articles={this.props.articles} editing={this.props.editing} />
      </div>
    );
  },
  onEditClick: function () {
    Actions.toggleEditMode();
  }
};

module.exports = React.createClass(ArticleListPage);
