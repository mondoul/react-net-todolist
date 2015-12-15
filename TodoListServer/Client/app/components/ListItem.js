'use strict';

import React from 'react';

class ListItem extends React.Component {

    handleItemStatus(e) {
        this.props.onItemStatusChange(e.target.checked);
    }

    render() {
        return (
            <div className="list-item">
                <span>{this.props.children}</span>
                <input type="checkbox" checked={this.props.isComplete} onChange={this.handleItemStatus.bind(this)}/>
            </div>
        );
    }
}

export default ListItem;
