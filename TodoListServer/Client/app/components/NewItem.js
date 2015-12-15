import React from 'react';

class NewItem extends React.Component{

    constructor(props) {
        super(props);

        this.state = { content: ''};
    }

    handleItemChange(e) {
        this.setState({content : e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var content = this.state.content.trim();
        if (!content) {
            return;
        }

        this.props.onItemAdd({Content: content});

        this.setState({content: ''});
    }

    render() {
        return (
            <form className="new-item-form" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text"
                    placeholder="Type a new task here..."
                    value={this.state.content}
                    onChange={this.handleItemChange.bind(this)}
                />
                <input type="submit" value="Add Item"/>
            </form>
        );
    }

}

export default NewItem;