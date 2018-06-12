import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    constructor() {
    
        super();
        //Initialize the state in the constructor
        this.state = {
            monster: [],
            monster1Id: null,
            monster2Id: null
        }
    }

    getRandomMonsterId = () => {
        return Math.ceil((Math.random() * 31));
    }

    getRandomMonster = function() {

        /* fetch API in action */
        
        this.setState({monster1Id: this.getRandomMonsterId()});
        this.setState({monster2Id: this.getRandomMonsterId()});

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-centered">Horror Trumps</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Monster monsterId={monster1Id} />
                    </div>
                    <div className="col-md-6">
                        <Monster monsterId={monster2Id} />
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
