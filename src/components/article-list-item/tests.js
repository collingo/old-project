require('../../lib/testdom')(/* pass in custom html here if needed */);

var Item = React.createFactory(require('./view.jsx'));

describe('Connection List Item', function() {
  var view;
  beforeEach(function () {
    view = ReactTestUtils.renderIntoDocument(Item({
      connection: {
        id: 123456789,
        name: 'Company Name'
      }
    }));
  });
  it('should render name', function () {
    var nameContainer = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'name');
    var name = nameContainer[0].getDOMNode().childNodes[0].data;
    expect(name).to.equal('Company Name');
  });
  it('should render reference', function () {
    var refContainer = ReactTestUtils.scryRenderedDOMComponentsWithClass(view, 'ref');
    var ref = refContainer[0].getDOMNode().childNodes[0].data;
    expect(ref).to.equal('123456789');
  });
});