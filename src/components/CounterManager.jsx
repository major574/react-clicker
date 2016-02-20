var React = require('react');
var Counter = require('./Counter.jsx');
var List = require('./List.jsx')

var CounterManager = React.createClass({
    getInitialState: function(){
        return {newNumber: 0, items: []};
    },
    onChange: function(e){
        this.setState({newNumber: e.target.value});
    },
    casinoSubmit: function(e){
        e.preventDefault();
        var currentItems = this.state.items;
        var aNumber = Math.floor((Math.random() * 100) + 0) - 50;
        currentItems.push(aNumber);
        aNumber += this.state.newNumber;
        console.log(currentItems)
        this.setState({newNumber: aNumber, item: currentItems});
    },
    farmSubmit: function(e){
        e.preventDefault();
        var currentItems = this.state.items;
        var aNumber = (Math.floor((Math.random() * 20) + 10));
        currentItems.push(aNumber);
        aNumber += this.state.newNumber;
        this.setState({newNumber: aNumber, item: currentItems});
    },
    caveSubmit: function(e){
        e.preventDefault();
        var currentItems = this.state.items;
        var aNumber = Math.floor((Math.random() * 10) + 5);
        currentItems.push(aNumber);
        aNumber += this.state.newNumber;
        this.setState({newNumber: aNumber, item: currentItems});
    },
    houseSubmit: function(e){
        e.preventDefault();
        var currentItems = this.state.items;
        var aNumber = Math.floor((Math.random() * 5) + 2);
        currentItems.push(aNumber);
        aNumber += this.state.newNumber;
        this.setState({newNumber: aNumber, item: currentItems});
    },
    render: function(){

        var divStyle = {
            marginTop: 10,
            minWidth: 150,
            color: 'sienna'

        };
        var btnStyle = {
            marginTop: 10,
            minWidth: 80
        };
        var bodyStyle = {

        };
        var panelStuff = {
            minHeight: 50,
            maxHeight: 150,
            minHeight: 150,
            overflowY: 'scroll',
            color: 'sienna'

        };

        if (this.props.bodyColor) {
            bodyStyle.background = this.props.bodyColor;
        }
        return (
            <div style={divStyle} className="col-xs-5 col-sm-5 col-md-5 col-lg-5" >
                <div style={divStyle} className="panel panel-default">
                    <div style={bodyStyle} className="panel-body">
                        <h3>{this.props.title}</h3>
                        <form onSubmit={this.casinoSubmit}>
                            <button style={btnStyle} className="btn btn-warning btn-lg btn-block">Casino</button>
                        </form>
                        <form onSubmit={this.farmSubmit}>
                            <button style={btnStyle} className="btn btn-warning btn-lg btn-block">Farm</button>
                        </form>
                        <form onSubmit={this.caveSubmit}>
                            <button style={btnStyle} className="btn btn-warning btn-lg btn-block">Cave</button>
                        </form>
                        <form onSubmit={this.houseSubmit}>
                            <button style={btnStyle} className="btn btn-warning btn-lg btn-block">House</button>
                        </form>
                        <div>
                            <h4>Gold</h4>
                            <Counter newNumber={this.state.newNumber} />
                            <div style={panelStuff} className="panel panel-default">
                                <List items={this.state.items} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
})

module.exports = CounterManager;
