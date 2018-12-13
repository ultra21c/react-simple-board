import React, {Component} from 'react';
import BoardRecord from "./BoardRecord";

class BoardRecordList extends Component {
    static defaultProps = {
        items: [ ],
        onRemove: () => console.warn("onRemove not defined!!"),
    };

    render() {
        const {items, onRemove} = this.props;

        const boardList = items.map((item, idx)=>
            <BoardRecord item={item} key={idx} onRemove={onRemove}/>
        );
        return (
            <tbody>
            {boardList}
            </tbody>
        );
    }
}

export default BoardRecordList;