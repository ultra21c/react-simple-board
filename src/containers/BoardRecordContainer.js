import React, {Component} from 'react';

import {connect} from 'react-redux';
import {update, remove} from '../store/modules/board'
import {bindActionCreators} from "redux";

class BoardRecordContainer extends Component {
    static defaultProps = {
        items: {
        },
    };

    state = {
        title: '',
        name: '',
        editing: false,
    };

    handleRemove = () => {
        const {item, remove} = this.props;
        remove(item.id);
    };

    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({
            editing: !editing
        });
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        // 이 API는 컴포넌트에서 render() 를 호출하고난 다음에 발생하게 됩니다.
        // 이 시점에선 this.props 와 this.state 가 바뀌어있습니다.
        // 그리고 파라미터를 통해 이전의 값인 prevProps 와 prevState 를 조회 할 수 있습니다.
        // 그리고, getSnapshotBeforeUpdate 에서 반환한 snapshot 값은 세번째 값으로 받아옵니다.
        const {item, update} = this.props;
        if (!prevState.editing && this.state.editing) { // 그전에 editing false 였고 현재는 true 인경우.
            this.setState({
                title: item.title,
                name: item.name,
            })
        }

        if (prevState.editing && !this.state.editing) { // 수정완료 했다~~~
            update(item.id,
                {
                    title: this.state.title,
                    name: this.state.name,
                }
            );
        }
    }

    render() {
        const {id, title, name, today} = this.props.item;
        const {editing} = this.state;

        if (editing) { // 수정
            return (
                <tr onDoubleClick={this.handleToggleEdit}>
                    <td>{id}</td>
                    <td>
                        <input value={this.state.title} name="title" onChange={this.handleChange} />
                    </td>
                    <td>
                        <input value={this.state.name} name="name" onChange={this.handleChange} />
                    </td>
                    <td>{today}</td>
                    <td><button onClick={this.handleRemove}>X</button></td>
                </tr>
            );
        } else { // View
            return (
                <tr onClick={this.handleToggleEdit}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{name}</td>
                    <td>{today}</td>
                    <td><button onClick={this.handleRemove}>X</button></td>
                </tr>
            );
        }
    }
}

// bindActionCreator 사용해 보기
/*
// 1. 일반적인 방법
const mapDispatchToProps = dispatch => ({
    update: (id, item) => dispatch(update(id, item)),
    remove: (id) => dispatch(remove(id)),
});
*/
// 2. bindActionCreator
// const mapDispatchToProps = dispatch => bindActionCreators({update, remove}, dispatch);

// 3. action 형태로 바로 할당. 제일 간단하네..
const mapDispatchToProps = {update, remove};

export default connect(
    null,
    mapDispatchToProps,
)(BoardRecordContainer);

