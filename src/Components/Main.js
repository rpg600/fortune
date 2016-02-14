import React from 'react';
import {FortuneList, FortuneForm} from './Fortune';

const Main = React.createClass({
    getInitialState: function() {
        return {
            fortunes: [
                {quote: 'Banananaaa', author: 'Reinis', id: 1}
            ]
        };
    },
    onSubmit: function(fortune) {
        let fortunes = [...this.state.fortunes, Object.assign({}, fortune, {id: this.state.fortunes.length + 1})];

        this.setState({fortunes: fortunes});
    },
    render: function() {
       return (
           <div>
               <FortuneList fortunes={this.state.fortunes} />
               <FortuneForm onSubmit={this.onSubmit} />
           </div>
       );
    }
});

export default Main;