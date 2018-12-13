import React, {Component} from 'react';

class BoardForm extends Component {
    state = {
        title: '',
        content: '',
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });

    };
    handleSubmit = (e) => {
        e.preventDefault();
        const {onCreate} = this.props;
        onCreate(this.state);
        this.setState({
            title: '',
            content: '',
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
                    placeholder="내용"
                    value={this.state.content}
                    name="content"
                    onChange={this.handleChange}
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default BoardForm;