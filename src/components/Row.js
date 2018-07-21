import React, { Component } from 'react';
import Tile from './Tile.js';
import UUID from 'uuid';

class Row extends Component {

  renderTiles = () => {
    {console.log("this.props.currentBoard")}
    return this.props.currentBoard.map(letter => {
      return <Tile key={UUID()} letter={letter}/>
    })
  }

  render() {
    return (
      <div className="row">
        {this.renderTiles()}{this.props.letter}
      </div>
    )
  }
}

export default Row;
