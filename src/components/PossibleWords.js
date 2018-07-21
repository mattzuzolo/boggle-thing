import React, { Component } from 'react';
import UUID from 'uuid';

class PossibleWords extends Component {

  renderPossibleWords = () => {
    return this.props.possibleWords.map(word => {
      return (
        <li key={UUID()}>{word}</li>
      )
    })
  }

  render() {
    return (
      <div className="possible-words">
        test
        {/*this.renderPossibleWords()*/}
      </div>
    )
  }
}

export default PossibleWords;
