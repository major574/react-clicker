var React = require('react');


var Counter = React.createClass({
    render: function(){
        return (<h4>{this.props.newNumber}</h4>)
    }
});

module.exports = Counter;
