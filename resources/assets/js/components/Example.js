import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Monster from './Monster';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#example');

export default class Example extends Component {
    constructor() {    
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            monstersLoaded: false,
            monster1Id: this.getRandomMonsterId(),
            monster2Id: this.getRandomMonsterId(),
            monster1: 1,
            monster2: 1,
            monster1Flipped: false,
            monster2Flipped: true,
            modalIsOpen: false,
            modalMessage:""
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
       this.setMonsters(this.state.monster1Id, this.state.monster2Id);
    }

    getRandomMonsterId() {
        return Math.ceil((Math.random() * 64));
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
    }
    
    closeModal() {
        this.setState({modalIsOpen: false});
        window.location.reload();
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

    handleClick(property) {
        var otherMonsterProperty = this.state.monster2[Object.keys(property)];
        this.setState({monster2Flipped: false});
        if(property[Object.keys(property)] < otherMonsterProperty) {
            console.log("You lost");
            this.setState({modalMessage: 'You Lost'});
            this.openModal();
        }
        else if(property[Object.keys(property)] == otherMonsterProperty) {
            console.log("You drew");
            this.setState({modalMessage: 'You Drew'});
            this.openModal();
        }
        else if(property[Object.keys(property)] > otherMonsterProperty) {
            this.setState({modalMessage: 'You Won'});
            this.openModal();
        }

    }

    render() {
        if(this.state.monstersLoaded) {
            return (
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-centered animated fade-in">Horror Trumps</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-md-1">
                                <Monster 
                                monster={this.state.monster1} 
                                monsterId={this.state.monster1Id} 
                                monstersLoaded={this.state.monsterLoaded} 
                                monsterFlipped={this.state.monster1Flipped}
                                handleClick={this.handleClick}
                                />
                            </div>
                            <div className="col-md-2">
                                <div className="versus-wrapper">
                                    <h1 className="versus">VS</h1>  
                                </div> 
                            </div>
                            <div className="col-md-4">
                                <Monster 
                                monster={this.state.monster2} 
                                monsterId={this.state.monster2Id} 
                                monstersLoaded={this.state.monsterLoaded}
                                monsterFlipped={this.state.monster2Flipped} 
                                />
                            </div>
                        </div>
                    </div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                    <div className="modal-message">{this.state.modalMessage}</div>
                    <button onClick={this.closeModal}>Play again...</button>
                    </Modal>
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
