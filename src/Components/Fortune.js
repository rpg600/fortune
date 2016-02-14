import React from 'react';

const ListItem = ({
    key,
    children
}) => {
    return (
        <li key={key}>{children}</li>
    )
};

const Vote = ({
    voteDown,
    count = 0,
    voteUp
}) => (
    <div>
        <a href="#" onClick={((e) => {
             e.preventDefault();

             return voteDown();
         })}
        >-</a>&nbsp;
        <span>{count}</span>&nbsp;
        <a href="#" onClick={((e) => {
             e.preventDefault();

             return voteUp();
         })}>+</a>
    </div>
);

const FortuneList = ({
    fortunes,
    voteDown,
    voteUp
}) => (
    <ul>
        {fortunes.map((fortune, index) =>
        <ListItem key={fortune.id}>
            {fortune.quote} by {fortune.author}
            <Vote
                voteDown={() => voteDown(index)}
                count={fortune.votes}
                voteUp={() => voteUp(index)}
            />
        </ListItem>
        )}
    </ul>
);

const FortuneForm = React.createClass({
    getInitialState: function() {
        return {
            fortune: {
                quote: '',
                author: ''
            }
        };
    },
    onChange: function(e) {
        let fortune = Object.assign({}, this.state.fortune, {[e.target.name]: e.target.value});

        this.setState({fortune: fortune});
    },
    onSubmit: function(e) {
        e.preventDefault();

        this.props.onSubmit(this.state.fortune);

        this.setState(this.getInitialState());
    },
    render: function() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Quotes</h3>
                <textarea name="quote" onChange={this.onChange} value={this.state.fortune.quote}></textarea>
                <h3>Author</h3>
                <input name="author" type="text" onChange={this.onChange} value={this.state.fortune.author} />
                <br/>
                <button>Submit</button>
            </form>
        );
    }
});

export {FortuneList, FortuneForm};