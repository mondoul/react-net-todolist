'use strict';

import React from 'react';
import ListItem from './ListItem';

class ListContainer extends React.Component {
    render() {
        var itemNodes = this.props.data.map(function(item) {
           return (
               <ListItem isComplete={item.IsComplete} key={item.Id}>{item.Content}</ListItem>
           );
        });
        return (
            <div className="list-container">
                {itemNodes}
            </div>
        );
    }
}

export default ListContainer;
