import React, {Component} from 'react';
import {connect} from 'react-redux';
import BoardRecordContainer from "./BoardRecordContainer";

class BoardRecordListContainer extends Component {
    static defaultProps = {
        items: [ ],
        remove: () => console.warn("onRemove not defined!!"),
        update: () => console.warn("onUpdate not defined!!"),
    };

    render() {
        const {items} = this.props;

        const boardList = items.map((item, idx)=>
            <BoardRecordContainer item={item} key={idx}/>
        );
        return (
            <tbody>
            {boardList}
            </tbody>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.board.items,
    id: state.board.id,
});

export default connect(
    mapStateToProps,
    null,
)(BoardRecordListContainer);
