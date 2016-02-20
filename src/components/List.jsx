var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
    render: function(){
        var createItem = function(text, index) {
            return <ListItem key={index} text={text} />;
        };
        return (<ul className="list-unstyled">{this.props.items.map(createItem)}</ul>)
    }
});

module.exports = List;
