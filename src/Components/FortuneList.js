import React from 'react';

export default class FortuneList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.fortunes.map((fortune, index) =>
                    <ListItem key={fortune.id}>
                        {fortune.quote} by {fortune.author}
                        <Vote
                            voteDown={() => this.props.voteDown(index)}
                            count={fortune.votes}
                            voteUp={() => this.props.voteUp(index)}
                        />
                    </ListItem>
                )}
            </ul>
        )
    }
};

const ListItem = ({
    children
    }) => {
    return (
        <li>{children}</li>
    )
};

const Link = ({
    onClick,
    children
    }) => (
    <a href="#" onClick={onClick}>{children}</a>
);

const Vote = ({
    voteDown,
    count = 0,
    voteUp
    }) => (
    <div>
        <Link onClick={voteDown}>-</Link>&nbsp;
        <span>{count}</span>&nbsp;
        <Link onClick={voteUp}>+</Link>
    </div>
);
