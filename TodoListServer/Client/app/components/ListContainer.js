'use strict';

import React from 'react';
import ListItem from './ListItem';

class ListContainer extends React.Component {

    updateItem(itemId, isChecked) {
        this.props.onUpdateItem(itemId, isChecked);
    }

    render() {
        var itemNodes = this.props.data.map(function(item) {
           return (
               <ListItem isComplete={item.IsComplete} key={item.Id} onItemStatusChange={this.updateItem.bind(this, item.Id)}>{item.Content}</ListItem>
           );
        }.bind(this));
        return (
            <div className="list-container">
                {itemNodes}
            </div>
        );
    }
}

export default ListContainer;
