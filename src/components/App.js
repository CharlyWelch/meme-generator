import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      phrase: 'Does it make you feel better?',
      image: [], 
    };
  }

  handlePhraseChange({ target }) {
    this.setState({ phrase: target.value });
  }

  render() {
    const { phrase } = this.state;
    const { image } = this.state;
    
    return (
      
      <div className="meme-gen">

        <header>Meme Generator</header>

        <div><input onChange={event => this.handlePhraseChange(event)}/></div>
        <section>
          {phrase}
        </section>

      </div>
    );

  }
}