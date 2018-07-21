import React, { Component } from 'react';

class Tile extends Component {

  render() {
    return (
      <div className="tile">{this.props.letter}</div>
    )
  }
}

export default Tile;
