import React, {Component} from 'react';
import BoardRecord from "./BoardRecord";

class BoardRecordList extends Component {
    static defaultProps = {
        items: [ ],
        onRemove: () => console.warn("onRemove not defined!!"),
        onUpdate: () => console.warn("onUpdate not defined!!"),
    };

    render() {
        const {items, onRemove, onUpdate} = this.props;

        const boardList = items.map((item, idx)=>
            <BoardRecord item={item} key={idx} onRemove={onRemove} onUpdate={onUpdate}/>
        );
        return (
            <tbody>
            {boardList}
            </tbody>
        );
    }
}

export default BoardRecordList;