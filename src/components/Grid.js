import React, { Component } from 'react';
import Row from './Row.js'
import UUID from 'uuid';

class Grid extends Component {

  renderRows = () => {
    console.log("current board in row", this.props.currentBoard)
    let rows = []
    for (let i = 0; i < 1; i++) {
      rows.push(<Row key={UUID()} currentBoard={this.props.currentBoard}/>)
    }
    return rows
  }

  render() {
    return (
      <div className="grid">
        {this.renderRows()}
      </div>
    )
  }
}

export default Grid;
