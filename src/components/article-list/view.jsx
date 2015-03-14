var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Item = require('../article-list-item/view.jsx');

var ArticleList = {
  displayName: 'ArticleList',
  render: function () {
    var articles;
    var message;
    if(this.props.articles) {
      if(this.props.articles.length) {
        articles = this.props.articles.map(this.renderArticle);
      } else {
        message = <p className="empty-message">No articles</p>;
      }
    } else {
      message = <p className="loading">Loading</p>;
    }
    return (
      <div id="article-list">
        {message}
        <ReactCSSTransitionGroup transitionName="collapse" component="ul">
          {articles}
        </ReactCSSTransitionGroup>
      </div>
    );
  },
  renderArticle: function (article) {
    return <Item key={article.id} article={article} editing={this.props.editing} />;
  }
};

module.exports = React.createClass(ArticleList);
