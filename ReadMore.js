/** @jsx React.DOM */

(function() {
  var ReadMore = React.createClass({
    getInitialState: function() {
      return { expanded: false };
    },

    render: function() {
      return (
        <div>
          <div ref='content' className='read-more__content' style={this.style()} dangerouslySetInnerHTML={{__html: this.props.content}} />
          <a onClick={this.toggle} href='#'>{this.buttonText()}</a>
        </div>
      );
    },

    toggle: function(e) {
      e.preventDefault();

      if (this.state.expanded) {
        this.collapse();
      } else {
        this.expand();
      }
    },

    buttonText: function() {
      if (this.state.expanded) {
        return 'Read less';
      } else {
        return 'Read more';
      }
    },

    style: function() {
      return {
        height: this.height()
      }
    },

    height: function() {
      if (this.state.expanded) {
        return this.refs.content.getDOMNode().scrollHeight;
      } else {
        return this.props.collapsedHeight;
      }
    },

    expand: function() {
      this.setState({ expanded: true });
    },

    collapse: function() {
      this.setState({ expanded: false });
    }
  });

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = ReadMore;
  } else {
    window.ReadMore = ReadMore;
  }
})();
