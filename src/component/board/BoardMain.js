import React, {Component} from 'react';
import BoardRecordList from "./BoardRecordList";
import BoardForm from "./BoardForm";

class BoardMain extends Component {
    state = {
        items: [
        //     {
        //         id: 1,
        //         title: "제목1",
        //         content: "내용1",
        //         name: "이름1",
        //         today: this.currentDt()
        //     },
        //     {
        //         id: 2,
        //         title: "제목2",
        //         content: "내용2",
        //         name: "이름2",
        //         today: this.currentDt()
        //     },
        //
        ]
    };
    id = this.state.items.length +1;

    static currentDt() {
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = now.getMonth();
        const dd = now.getDay();
        const hour = now.getHours();
        const min = now.getMinutes();
        const seconds = now.getSeconds();
        const today = yyyy + "-" + mm + "-" + dd + " " + hour + ":" + min + ":" + seconds;
        return (today);
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