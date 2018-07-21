import React, { Component } from 'react';

class Button extends Component {

  handleClick = () => {
    this.props.createBoard();
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.name}</button>
    )
  }
}

export default Button;
