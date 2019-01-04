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
        e.preventDefault();
        // const {create} = this.props;
        this.props.create(this.state, this.currentDt());
        this.setState({
            title: '',
            name: '',
        })
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="제목"
                    value={this.state.title}
                    name="title"
                    onChange={this.handleChange}
                />
                <input
                    placeholder="이름"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                />
                <button type="submit">등록</button>
            </form>
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
