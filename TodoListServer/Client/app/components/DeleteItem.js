
import React from 'react';

class DeleteItem extends React.Component {

    constructor(props){
        super(props);
    }

    handleRemove(e) {
        e.preventDefault();
        this.props.onRemoveItem();
    }

    render() {
        return(
          <a className="delete-item" onClick={this.handleRemove.bind(this)} >remove</a>
        );
    }


}

export default DeleteItem;
