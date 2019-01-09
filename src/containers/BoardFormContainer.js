import React, {Component} from 'react';
import {connect} from 'react-redux';
import {create} from '../store/modules/board';
import {format} from 'date-fns'

class BoardFormContainer extends Component {
    state = {
        title: '',
        name: '',
    };
    currentDt = () => {
        return format(new Date(), "YYYY-MM-DD HH:mm:ss");
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        this.props.create(this.state, this.currentDt());
        this.setState({
            title: '',
            name: '',
        })
    };
    handleKeydown = (e) => {
        if (e.keyCode === 13) this.handleSubmit(e);
    };
    render() {
        return(
            <div>
                <input
                    placeholder="제목"
                    value={this.state.title}
                    name="title"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeydown}
                />
                <input
                    placeholder="이름"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeydown}
                />
                <button onClick={this.handleSubmit}>등록</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    create: (item, dt) => dispatch(create(item, dt)),
});

export default connect(
    null,
    mapDispatchToProps,
)(BoardFormContainer);
