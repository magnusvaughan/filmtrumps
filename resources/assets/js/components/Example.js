import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Monster from './Monster';

export default class Example extends Component {
    constructor() {
    
        super();

        var monster1Id = this.getRandomMonsterId();
        var monster2Id = this.getRandomMonsterId();
        //Initialize the state in the constructor
        this.state = {
            monster1Id: monster1Id,
            monster2Id: monster2Id,
            monster1: this.getRandomMonster(monster1Id, 'monster1'),
            monster2: this.getRandomMonster(monster2Id, 'monster2')
        };
    }

    componentDidMount() {

    }

    getRandomMonsterId() {
        return Math.ceil((Math.random() * 31));
    }

    getRandomMonster(monsterId, stateKey) {
        fetch('/monsters/'+ monsterId )
        .then(response => {
            return response.json();
        })
        .then(monster => {
            //Fetched product is stored in the state
            this.setState({ [stateKey]: monster });
        });
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
                        <Monster monster={this.state.monster1} monsterId={this.state.monster1Id} />
                    </div>
                    <div className="col-md-6">
                        <Monster monster={this.state.monster2} monsterId={this.state.monster2Id} />
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
