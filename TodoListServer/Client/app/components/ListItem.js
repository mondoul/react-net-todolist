'use strict';

import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <div className="list-item">
                <span>{this.props.children}</span>
                <input type="checkbox" checked={this.props.isComplete}/>
            </div>
        );
    }
}

export default ListItem;
