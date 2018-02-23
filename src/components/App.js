import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      phrase: 'Feel better?',
      image: 'url(http://img.izismile.com/img/img5/20121212/640/awe_inspiring_photos_2012_640_01.jpg)', 
    };

    this.handlePhraseChange = this.handlePhraseChange.bind(this);
    this.handleImage = this.handleImage.bind(this);

  }

  handlePhraseChange({ target }) {
    this.setState({ phrase: target.value });
  }

  handleImage({ target }) {
    this.setState({ image: target.value });
  }

  render() {
    const { phrase, image } = this.state;

    return (
      
      <div className="meme-gen">

        <header>Meme Generator</header>

        <div><input placeholder="Enter your phrase" onChange={this.handlePhraseChange}/></div>
        
        <div><input placeholder="Paste Image URL" onChange={this.handleImage}/></div>
        {/* <button onClick={this.handleImage}>Upload Your Image</button> */}

        <section style={{ 
          backgroundImage: image ? `url(${image})` : null
        }}>
          <pre>{phrase}</pre>
        </section>

      </div>
    );

  }
}