import React, {Component} from 'react';
import BoardRecordList from "./BoardRecordList";
import BoardForm from "./BoardForm";
const dateFormat = require('dateformat');

class BoardMain extends Component {
    state = {
        items: [],
    };
    id = this.state.items.length +1;

    static currentDt() {
        return dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    }

    handleCreate = (data) => {
        this.setState({
            items: this.state.items.concat(
                {id: this.id++, today: BoardMain.currentDt(),  ...data}
            )
        });
    };

    handleRemove = (id) => {
        const {items} = this.state;
        this.setState({
            items: items.filter(item => item.id !== id )
        })
    };

    handleUpdate = (id, data) => {
        const {items} = this.state;
        this.setState({
            items: items.map( item =>
                item.id === id ? {...item, ...data} : item
            )
        });
    };

    render() {
        return (
            <div>
                <BoardForm onCreate={this.handleCreate}/>
                <table border="1">
                    <thead>
                    <tr>
                        <td width="10">No</td>
                        <td width="100">제목</td>
                        <td width="300">내용</td>
                        <td width="180">등록일</td>
                        <td>삭제</td>
                    </tr>
                    </thead>
                    <BoardRecordList items={this.state.items} onRemove={this.handleRemove} onUpdate={this.handleUpdate}/>
                </table>
            </div>
        );
    }
}

export default BoardMain;