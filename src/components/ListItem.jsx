var React = require('react');

var ListItem = React.createClass({
    render: function(){
        return (
            <li>
                <h4>You got {this.props.text} gold.</h4>
            </li>
        );
    }
});

module.exports = ListItem;
