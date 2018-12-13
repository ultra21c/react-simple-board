import React, {Component} from 'react';

class BoardRecord extends Component {
    static defaultProps = {
        items: {
        },
    };
    handleRemove = () => {
        const {item, onRemove} = this.props;
        onRemove(item.id);
    };

    render() {
        const {id, title, content, today} = this.props.item;
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{content}</td>
                <td>{today}</td>
                <td><button onClick={this.handleRemove}>X</button></td>
            </tr>
        );
    }
}

export default BoardRecord;