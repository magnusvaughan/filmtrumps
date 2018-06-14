import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Monster from './Monster';

export default class Example extends Component {
    constructor() {
    
        super();
        //Initialize the state in the constructor
        this.state = {
            monster1Id: null,
            monster2Id: null,
            monster1: null,
            monster2: null
        };
    }

    componentDidMount() {
       this.setState({monster1Id:this.getRandomMonsterId()});
       this.setState({monster2Id:this.getRandomMonsterId()});
       this.setState({monster1: this.getRandomMonster(monster1Id)});
       this.setState({monster2: this.getRandomMonster(monster2Id)});
    }

    getRandomMonsterId() {
        return Math.ceil((Math.random() * 31));
    }

    getRandomMonster(monsterId) {
        fetch('/monsters/'+ monsterId )
        .then(response => {
            return response.json();
        })
        .then(monster => {
            return monster;
        });
    }

    render() {
        if(this.state.monster1!=null) {
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
        else {
            return (
                <div>
                    LOADING
                </div>
            )
        }

    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
