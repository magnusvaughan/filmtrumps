import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Monster from './Monster';

export default class Example extends Component {
    constructor() {
    
        super();
        //Initialize the state in the constructor
        this.state = {
            monstersLoaded: false,
            monster1Id: this.getRandomMonsterId(),
            monster2Id: this.getRandomMonsterId(),
            monster1: 1,
            monster2: 1,
            monster1Flipped: false,
            monster2Flipped: true
        };
    }

    componentDidMount() {
       this.setMonsters(this.state.monster1Id, this.state.monster2Id);
    }

    getRandomMonsterId() {
        return Math.ceil((Math.random() * 31));
    }

    setMonsters(monster1Id, monster2Id) {
        fetch('/monsters/'+ monster1Id )
        .then(response => {
            return response.json();
        })
        .then(monster1 => {
            this.setState({monster1: monster1});
        })
        .then(
            fetch('/monsters/'+ monster2Id )
            .then(response => {
                return response.json();
            })
            .then(monster2 => {
                this.setState({monster2: monster2});
            })
        )
        .then(
            this.setState({monstersLoaded: true})
        )
    }

    render() {
        if(this.state.monstersLoaded) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="text-centered">Horror Trumps</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Monster 
                            monster={this.state.monster1} 
                            monsterId={this.state.monster1Id} 
                            monstersLoaded={this.state.monsterLoaded} 
                            monsterFlipped={this.state.monster1Flipped}
                            />
                        </div>
                        <div className="col-md-6">
                            <Monster 
                            monster={this.state.monster2} 
                            monsterId={this.state.monster2Id} 
                            monstersLoaded={this.state.monsterLoaded}
                            monsterFlipped={this.state.monster2Flipped} 
                            />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                null
            )
        }

    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
