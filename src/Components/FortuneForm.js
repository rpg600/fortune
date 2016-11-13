import React from 'react';

export default class FortuneForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fortune: {
                quote: '',
                author: '',
                votes: 0
            }
        };
    }

    onChange(e) {
        let fortune = Object.assign({}, this.state.fortune, {[e.target.name]: e.target.value});

        this.setState({fortune: fortune});
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onSubmit(this.state.fortune);

        this.setState(this.getInitialState());
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h3>Quotes</h3>
                <textarea name="quote" onChange={this.onChange.bind(this)} value={this.state.fortune.quote}></textarea>
                <h3>Author</h3>
                <input name="author" type="text" onChange={this.onChange.bind(this)} value={this.state.fortune.author} />
                <br/>
                <button>Submit</button>
            </form>
        );
    }
};
