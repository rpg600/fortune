import React from 'react';
import {FortuneList, FortuneForm} from './Fortune';

const Main = React.createClass({
    getInitialState: function() {
        return {
            fortunes: [
                {quote: 'Banananaaa', author: 'Reinis', id: 1, votes: 10},
                {quote: 'Banananaaa', author: 'Reinis', id: 2, votes: 2},
                {quote: 'Banananaaa', author: 'Reinis', id: 3, votes: 3}
            ]
        };
    },
    onSubmit: function(fortune) {
        let fortunes = [...this.state.fortunes, Object.assign({}, fortune, {id: this.state.fortunes.length + 1})];

        this.setState({fortunes: fortunes});
    },
    voteDown: function(index) {
        if (this.state.fortunes[index].votes <= 0) {
            return;
        }

        let newVotes = this.state.fortunes[index].votes - 1;

        this.updateFortuneVote(index, newVotes);

    },
    voteUp: function(index) {
        let newVotes = this.state.fortunes[index].votes + 1;

        this.updateFortuneVote(index, newVotes);
    },
    updateFortuneVote: function(index, newVotes) {
        let fortunes = [
            ...this.state.fortunes.slice(0, index),
            Object.assign({}, this.state.fortunes[index], {votes: newVotes}),
            ...this.state.fortunes.slice(index + 1)
        ];

        this.setState({fortunes: fortunes});
    },
    render: function() {
       return (
           <div>
               <FortuneList
                   fortunes={this.state.fortunes}
                   voteDown={this.voteDown}
                   voteUp={this.voteUp}
               />
               <FortuneForm onSubmit={this.onSubmit} />
           </div>
       );
    }
});

export default Main;