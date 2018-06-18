import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';

export default class Monster extends Component {

    render() {
        return (
            <div className={"card " + (this.props.monsterFlipped ? 'flipped' : 'unflipped')}>
                <h2 className="card-title">{this.props.monster.name}</h2>
                <img className="card-img-top" style={{width: 426 + 'px', height: 380 + 'px'}} src={"/img/" + this.props.monsterId + ".png"} alt=""/>
                <ul>
                    <li>Physical Strength: 
                    <button type="button" className="btn btn-danger" onClick={() => this.props.handleClick({physical_strength: this.props.monster.physical_strength})}>{this.props.monster.physical_strength}</button>
                    </li>
                    <li>Fear Factor: 
                    <button type="button" className="btn btn-danger" onClick={() => this.props.handleClick({fear_factor: this.props.monster.fear_factor})}>{this.props.monster.fear_factor}</button>
                    </li>
                    <li>Killing Power:
                    <button type="button" className="btn btn-danger" onClick={() => this.props.handleClick({killing_power: this.props.monster.killing_power})}>{this.props.monster.killing_power}</button>
                    </li>
                    <li>Horror Rating:
                    <button type="button" className="btn btn-danger" onClick={() => this.props.handleClick({horror_rating: this.props.monster.horror_rating})}>{this.props.monster.horror_rating}</button>
                    </li>
                </ul>
            </div>
        );
    }
}

if (document.getElementById('monster')) {
    ReactDOM.render(<Monster />, document.getElementById('monster'));
}
