var React = require('react');
var Actions = require('../../flux/actions');
var moment = require('moment');

var ArticleListItem = {
  displayName: 'ArticleListItem',
  render: function () {
    var priority = this.getPriority(this.props.article.saved);
    return (
      <li className={"article-list-item " + priority}>
        <div className="content">
          <a href={this.props.article.url} onClick={this.onClick}>{this.props.article.title}</a>
          {this.renderDeleteButton()}
        </div>
      </li>
    );
  },
  renderDeleteButton: function () {
    var button;
    if(this.props.editing) {
      button = <button className="remove" onClick={this.onDeleteClick}>Remove</button>;
    }
    return button;
  },
  getPriority: function (datetime) {
    var saved = moment(datetime);
    var diff = moment().diff(saved, 'days');
    return 'p'+diff;
  },
  onClick: function (event) {
    event.preventDefault();
    console.log('Visit "' + this.props.article.url + '"');
  },
  onDeleteClick: function (event) {
    event.preventDefault();
    console.log('Delete', this.props.article);
    Actions.removeArticle(this.props.article);
  }
};

module.exports = React.createClass(ArticleListItem);
