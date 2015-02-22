var ArticleListPage = require('view');
var articles = [{
  title: 'Title1',
  url: 'url1'
},{
  title: 'Title2',
  url: 'url2'
},{
  title: 'Title3',
  url: 'url3'
},{
  title: 'Title4',
  url: 'url4'
},{
  title: 'Title5',
  url: 'url5'
}];
module.exports = (<div>
  <ArticleListPage articles={articles} editing={false} />
</div>);