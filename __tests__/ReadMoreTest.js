jest.dontMock('../ReadMore');

global.React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var ReadMore = require('../ReadMore');

describe('ReadMore', function() {
  var readMore;
  var content;
  var link;

  beforeEach(function() {
    readMore = TestUtils.renderIntoDocument(
      <ReadMore collapsedHeight='42px' content='<p>Hello World</p>' />
    );

    content = TestUtils.findRenderedDOMComponentWithClass(
      readMore, 'read-more__content');

    link = TestUtils.findRenderedDOMComponentWithTag(
      readMore, 'a');
  });

  it('has a height that is collapsed', function() {
    expect(content.getDOMNode().getAttribute('style')).toEqual('height:42px;');
  });

  it('initially displays read more', function() {
    expect(link.getDOMNode().textContent).toEqual('Read more');
  });

  it('displays read less after being expanded', function() {
    TestUtils.Simulate.click(link);
    expect(link.getDOMNode().textContent).toEqual('Read less');
  });

  it('expands the height to fit the content', function() {
    TestUtils.Simulate.click(link);
    expect(content.getDOMNode().getAttribute('style')).toEqual('height:42px;');
  });
});
