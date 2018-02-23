import React, { Component } from 'react';
import fileSaver from 'file-saver';
import dom2image from 'dom-to-image';
import './App.css';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      phrase: 'Feel better?',
      image: 'url(http://img.izismile.com/img/img5/20121212/640/awe_inspiring_photos_2012_640_01.jpg)',
      color: 'white',
      size: '20', 
    };

    this.handlePhraseChange = this.handlePhraseChange.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleSave = this.handleSave.bind(this);


  }

  handlePhraseChange({ target }) {
    this.setState({ phrase: target.value });
  }

  handleImage({ target }) {
    this.setState({ image: target.value });
  }

  handleColor({ target }) {
    this.setState({ color: target.value });
  }

  handleSize({ target }) {
    this.setState({ size: target.value });
  }

  handleSave(){
    dom2image.toBlob(this.section).then(blob => {
      fileSaver.saveAs(blob, 'meme.png');
    });
  }
    

  render() {
    const { phrase, image, size, color } = this.state;

    return (
      
      <div className="meme-gen">

        <header>Meme Generator</header>

        <div><input placeholder="Enter your phrase" onChange={this.handlePhraseChange}/></div>
        
        <div><input placeholder="Paste Image URL" onChange={this.handleImage}/></div>

        <div><input placeholder="Text Color" onChange={this.handleColor}/></div>

        <div><input placeholder="Text Size" onChange={this.handleSize}/></div>


        <section className="meme"
          ref={node => this.div = node}
          style={{ 
            backgroundImage: image ? `url(${image})` : null,
            color: color,
            fontSize: `${size}px`,
          }}>
          {phrase}
        </section>

        <div><button onClick={this.handleSave}>Save Your Meme</button></div>

      </div>
    );

  }
}
