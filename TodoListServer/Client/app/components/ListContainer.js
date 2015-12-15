'use strict';

import React from 'react';
import ListItem from './ListItem';
import DeleteItem from './DeleteItem';

class ListContainer extends React.Component {

    updateItem(itemId, isChecked) {
        this.props.onUpdateItem(itemId, isChecked);
    }

    removeItem(itemId) {
        this.props.onRemoveItem(itemId);
    }

    render() {
        var itemNodes = this.props.data.map(function(item) {
           return (
               <ListItem isComplete={item.IsComplete}
                        key={item.Id}
                        onItemStatusChange={this.updateItem.bind(this, item.Id)}>
                    {item.Content}<DeleteItem onRemoveItem={this.removeItem.bind(this, item.Id)} />
               </ListItem>
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
