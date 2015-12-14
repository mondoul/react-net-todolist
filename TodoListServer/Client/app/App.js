'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ListContainer  from './components/ListContainer';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {data: []};
    }

    componentDidMount() {
        $.ajax({
           url: this.props.url,
            dataType: 'json',
            cache: false
        }).done(function(data){
            console.log(data);
            this.setState({data : data});
        }.bind(this)).error(function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this));
    }

    render() {
        return (
            <div className="container">
                <h1>React Todo List</h1>
                <ListContainer data={this.state.data} />
            </div>
        );
    }
}

ReactDOM.render(
    <App url='/api/todo'/>,
    document.getElementById('app')
)