var ArticleListItem = require('view');
var article = {
  title: 'title',
  url: 'url'
};
module.exports = (<div>
  <ArticleListItem article={article} editing={false} />
  <ArticleListItem article={article} editing={true} />
</div>);