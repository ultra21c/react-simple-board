import React, {Component} from 'react';

class BoardRecord extends Component {
    static defaultProps = {
        items: {
        },
    };

    state = {
        title: '',
        content: '',
        editing: false,
    };

    handleRemove = () => {
        const {item, onRemove} = this.props;
        onRemove(item.id);
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
        const {item, onUpdate} = this.props;
        if (!prevState.editing && this.state.editing) { // 그전에 editing false 였고 현재는 true 인경우.
            this.setState({
                title: item.title,
                content: item.content,
            })
        }

        if (prevState.editing && !this.state.editing) { // 수정완료 했다~~~
            onUpdate(item.id,
                {
                    title: this.state.title,
                    content: this.state.content,
                }
            )
        }
    }

    render() {
        const {id, title, content, today} = this.props.item;
        const {editing} = this.state;

        if (editing) { // 수정
            return (
                <tr onDoubleClick={this.handleToggleEdit}>
                    <td>{id}</td>
                    <td>
                        <input value={this.state.title} name="title" onChange={this.handleChange} />
                    </td>
                    <td>
                        <input value={this.state.content} name="content" onChange={this.handleChange} />
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
                    <td>{content}</td>
                    <td>{today}</td>
                    <td><button onClick={this.handleRemove}>X</button></td>
                </tr>
            );
        }
    }
}

export default BoardRecord;