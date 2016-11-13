import React from 'react';
import FortuneForm from './FortuneForm';
import FortuneList from './FortuneList';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fortunes: [
                {quote: 'Banananaaa', author: 'Reinis', id: 1, votes: 10},
                {quote: 'Banananaaa', author: 'Reinis', id: 2, votes: 2},
                {quote: 'Banananaaa', author: 'Reinis', id: 3, votes: 3}
            ]
        };
    }

    onSubmit(fortune) {
        let fortunes = [...this.state.fortunes, Object.assign({}, fortune, {id: this.state.fortunes.length + 1})];

        this.setState({fortunes: fortunes});
    }

    voteDown(index) {
        if (this.state.fortunes[index].votes <= 0) {
            return;
        }

        let newVotes = this.state.fortunes[index].votes - 1;

        this.updateFortuneVote(index, newVotes);

    }

    voteUp(index) {
        let newVotes = this.state.fortunes[index].votes + 1;

        this.updateFortuneVote(index, newVotes);
    }

    updateFortuneVote(index, newVotes) {
        let fortunes = [
            ...this.state.fortunes.slice(0, index),
            Object.assign({}, this.state.fortunes[index], {votes: newVotes}),
            ...this.state.fortunes.slice(index + 1)
        ];

        this.setState({fortunes: fortunes});
    }

    render() {
       return (
           <div>
               <FortuneList
                   fortunes={this.state.fortunes}
                   voteDown={this.voteDown.bind(this)}
                   voteUp={this.voteUp.bind(this)}
               />
               <FortuneForm onSubmit={this.onSubmit.bind(this)} />
           </div>
       );
    }
};
