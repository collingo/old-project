var React = require('react');
var addons = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var ArticleListPage = require('./components/article-list-page/view.jsx');

var Store = require('./flux/store');
var Actions = require('./flux/actions');

var App = React.createClass({
  displayName: 'App',
  getInitialState: function () {
    return Store.getData();
  },
  onStoreChange: function () {
    this.setState(Store.getData());
  },
  componentDidMount: function () {
    Store.addChangeListener(this.onStoreChange);
  },
  componentWillUnmount: function () {
    Store.removeChangeListener(this.onStoreChange);
  },
  render: function () {
    return (
      <div id="app">
        <ArticleListPage articles={this.state.articles} editing={this.state.editing} />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('stage')
);
