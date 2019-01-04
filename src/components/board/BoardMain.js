import React, {Component} from 'react';
import BoardFormContainer from "../../containers/BoardFormContainer";
import BoardRecordListContainer from "../../containers/BoardRecordListContainer";

class BoardMain extends Component {
    render() {
        return (
            <div>
                <BoardFormContainer />
                <table border="1">
                    <thead>
                    <tr>
                        <td width="10">No</td>
                        <td width="300">제목</td>
                        <td width="100">이름</td>
                        <td width="180">등록일</td>
                        <td>삭제</td>
                    </tr>
                    </thead>
                    <BoardRecordListContainer/>
                </table>
            </div>
        );
    }
}

export default BoardMain;