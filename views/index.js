var React = require('react');
var DefaultLayout = require('./layouts/default');
 
var HelloMessage = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Hello {this.props.name}</div>
        <script dangerouslySetInnerHTML={{__html:"window.APP={}"}}></script>
      </DefaultLayout>
    );
  }
});
 
module.exports = HelloMessage