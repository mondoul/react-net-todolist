'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';
import ListContainer  from './components/ListContainer';
import NewItem from './components/NewItem';

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

    handleItemAdd(item) {
        $.ajax({
            url:this.props.url,
            dataType: 'json',
            type: 'POST',
            data: item
        }).done(function(data) {
            var items = this.state.data;
            items.push({Id: data.ID, Content: data.Content});
            this.setState({data : items});
        }.bind(this)).error(function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this));
    }

    handleUpdateItem(itemId, isChecked){
        $.ajax({
            url:this.props.url + '/' + itemId + '/' + isChecked,
            dataType: 'json',
            type: 'PUT'
        }).done(function(data) {
            var state = this.state.data.map(function(d) {
               return {
                   Id: d.Id,
                   IsComplete: (data.ID === d.Id ? data.IsComplete : d.IsComplete),
                   Content: d.Content
               };
            });
            this.setState({data : state});
        }.bind(this)).error(function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this));

    }

    handleRemoveItem(itemId) {
        $.ajax({
            url:this.props.url + '/' + itemId,
            dataType: 'json',
            type: 'DELETE'
        }).done(function(data) {
            var state = _.reject(this.state.data, function(item) {
                return item.Id === itemId;
            });
            this.setState({data : state});
        }.bind(this)).error(function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this));
    }

    render() {
        return (
            <div className="container">
                <h1>React Todo List</h1>
                <ListContainer data={this.state.data} onUpdateItem={this.handleUpdateItem.bind(this)} onRemoveItem={this.handleRemoveItem.bind(this)} />
                <NewItem onItemAdd={this.handleItemAdd.bind(this)} />
            </div>
        );
    }
}

ReactDOM.render(
    <App url='/api/todo'/>,
    document.getElementById('app')
)