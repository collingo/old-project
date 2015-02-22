require('../../lib/testdom')(/* pass in custom html here if needed */);

var Item = require('../connection-list-item/view');
var List = React.createFactory(require('./view.jsx'));

describe('Connection List', function() {
  var view;

  describe('before the items have loaded', function () {
    beforeEach(function () {
      view = ReactTestUtils.renderIntoDocument(List());
    });
    it('should not render any items', function () {
      var itemCount = ReactTestUtils.scryRenderedComponentsWithType(view, Item).length;
      expect(itemCount).to.equal(0);
    });
    it('should render the loading message', function () {
      var emptyMessage = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'loading').length;
      expect(emptyMessage).to.equal(1);
    });
    it('should not render the empty message', function () {
      var emptyMessage = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'empty-message').length;
      expect(emptyMessage).to.equal(0);
    });
  });

  describe('loaded with no items', function () {
    beforeEach(function () {
      view = ReactTestUtils.renderIntoDocument(List({
        connections: []
      }));
    });
    it('should not render any items', function () {
      var itemCount = ReactTestUtils.scryRenderedComponentsWithType(view, Item).length;
      expect(itemCount).to.equal(0);
    });
    it('should not render the loading message', function () {
      var emptyMessage = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'loading').length;
      expect(emptyMessage).to.equal(0);
    });
    it('should render the empty message', function () {
      var emptyMessage = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'empty-message').length;
      expect(emptyMessage).to.equal(1);
    });
  });

  describe('loaded with items', function () {
    beforeEach(function () {
      view = ReactTestUtils.renderIntoDocument(List({
        connections: [{
          ref: 123456789,
          name: 'Item 1'
        }, {
          ref: 234567890,
          name: 'Item 2'
        }, {
          ref: 345678901,
          name: 'Item 3'
        }]
      }));
    });
    it('should render the items inside the list', function () {
      var itemCount = ReactTestUtils.scryRenderedComponentsWithType(view, Item).length;
      expect(itemCount).to.equal(3);
    });
    it('should not render the loading message', function () {
      var emptyMessage = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'loading').length;
      expect(emptyMessage).to.equal(0);
    });
    it('should not render the empty message', function () {
      var emptyMessage = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'empty-message').length;
      expect(emptyMessage).to.equal(0);
    });
  });
});