import React, { Component } from 'react';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'Porland'
    };
  }

  handleClick() {
    this.setState({ name: 'Seattle' });
  }

  render() {
    const { name } = this.state;

    return (
      <div onClick={() => this.handleClick()}>
        Hello <span>{name}</span>
      </div>

    );

  }
}