import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Trump extends Component {

    constructor() {
   
        super();
        //Initialize the state in the constructor
        this.state = {
            trumps: [],
        }
      }
      /*componentDidMount() is a lifecycle method
       * that gets called after the component is rendered
       */
      componentDidMount() {
        /* fetch API in action */
        fetch('/trumps')
            .then(response => {
                return response.json();
            })
            .then(trumps => {
                //Fetched product is stored in the state
                this.setState({ trumps });
            });
    }

    render() {
        return (
            <h1>{JSON.stringify(this.state.trumps.monster1.keys())}</h1>
        );
    }
}

if (document.getElementById('trump')) {
    ReactDOM.render(<Trump />, document.getElementById('trump'));
}
