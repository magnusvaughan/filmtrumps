import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Monster extends Component {

    constructor() {
   
        super();
        //Initialize the state in the constructor
        this.state = {
            monster: [],
            monsterId: null
        }
      }
      /*componentDidMount() is a lifecycle method
       * that gets called after the component is rendered
       */
      componentDidMount() {
        /* fetch API in action */
        const monsterId =  Math.ceil((Math.random() * 31));
        this.setState({monsterId: monsterId});
        
        fetch('/monsters/'+ monsterId )
            .then(response => {
                return response.json();
            })
            .then(monster => {
                //Fetched product is stored in the state
                this.setState({ monster });
            });
    }
    render() {
        return (
            <div className="card">
                <h2 className="card-title">{this.state.monster.name}</h2>
                <img className="card-img-top" style={{width: 526 + 'px', height: 480 + 'px'}} src={"/img/" + this.state.monsterId + ".png"} alt=""/>
                <ul>
                    <li>Physical Strength: 
                    <button type="button" className="btn btn-danger">{this.state.monster.physical_strength}</button>
                    </li>
                    <li>Fear Factor: 
                    <button type="button" className="btn btn-danger">{this.state.monster.fear_factor}</button>
                    </li>
                    <li>Killing Power:
                    <button type="button" className="btn btn-danger">{this.state.monster.killing_power}</button>
                    </li>
                    <li>Horror Rating:
                    <button type="button" className="btn btn-danger">{this.state.monster.horror_rating}</button>
                    </li>
                </ul>
            </div>
        );
    }
}

if (document.getElementById('monster')) {
    ReactDOM.render(<Monster />, document.getElementById('monster'));
}
