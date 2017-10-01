//@* this code was in index.cshtml.seems you get better colours in jsx file...does it work? *@

var HelloWorldComponent2 = React.createClass({
    getInitialState: function () {
        return {
            serverMessage: ""
        };
    },
    componentDidMount: function () {
        //fetch data from server
        $.get('home/getmessage', function (result) {
            if (this.isMounted) {
                this.setState({

                    serverMessage: result
                });
            }
        }.bind(this));
    },
    render: function () {
        return (<h1 style={{color:"red" }}>{this.state.serverMessage}</h1>);
    }

});

var another2 = React.createClass({
    getInitialState: function () {
        return {
            serverMessage: ""
        };
    },
    componentDidMount: function () {
    },
    render: function () {
        return (<h1  >holt toledo</h1>);
    }
});

//ReactDOM.render(<HelloWorldComponent2 />, document.getElementById("helloworldcontainer"));