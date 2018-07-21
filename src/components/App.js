import React, { Component } from 'react';
import Grid from './Grid.js';
import Button from './Button.js';
import PossibleWords from './PossibleWords.js';
import SearchInput from './SearchInput.js';
import Timer from './Timer.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentBoard: ["R", "I", "F", "O", "B", "X", "O", "I", "F", "E", "H", "E", "Y", "D", "E", "N"],
      possibleWords: [],
      isPlayed: false,
    }
  }




  createBoard = () => {
    const letters = ["R", "I", "F", "O", "B", "X", "I", "F", "E", "H", "E", "Y", "D", "E", "N", "O", "W", "S", "U", "T", "O", "K", "N", "D", "H", "M", "S", "R", "A", "O", "L", "U", "P", "E", "T", "S", "A", "C", "I", "T", "O", "A", "Y", "L", "G", "K", "U", "E", "Q", "U", "B", "M", "J", "O", "A", "E", "H", "I", "S", "P", "N", "V", "E", "T", "I", "G", "N", "B", "A", "L", "I", "Y", "T", "E", "Z", "A", "V", "N", "D", "R", "A", "L", "E", "S", "C", "U", "W", "I", "L", "R", "G", "P", "A", "C", "E", "M", "D"]
    let newBoardLetters = []
    for (let i = 0; i < 16; i++) {
      newBoardLetters.push(letters[Math.floor(Math.random() * (letters.length))])
    }
    return newBoardLetters;
    // console.log("answer key", answerKey)
  }

componentDidMount(){

  this.setState({currentBoard: this.createBoard()})

    fetch(`https://api.codebox.org.uk/boggle/${this.state.currentBoard.join("")}`)
      .then(res => res.json())
      .then(data => this.setState({possibleWords: data}))

}

  updateGameState = (newBoard, newPossibleWords) => {
    console.log('before : ', this.state)
    this.setState({
      currentBoard: newBoard,
      possibleWords: newPossibleWords,
      isPlayed: true,
    }, () => console.log('after : ', this.state))
  }

  isPlayed = () => {
    if (this.state.isPlayed) {
      return <Timer gameStatus={this.state} endGame={this.endGame}/>
    }
  }

  endGame = () => {
    return null
  }

  render() {
    console.log("currentBoard in app render", this.state.currentBoard);
    console.log("current answer key", this.state.possibleWords);
    return (
      <div className="app">
        <h1>Boggle</h1>
        <div className="timer-grid-possiblewords">
          {this.isPlayed()}
          <Grid currentBoard={this.state.currentBoard}/>
          <PossibleWords possibleWords={this.state.possibleWords}/>
        </div>
        <div className="search-input">
          <SearchInput />
        </div>
        <div className="buttons">
          <Button name="new game" createBoard={this.state.currentBoard} />
          <Button name="high scores"/>
        </div>
      </div>
    );
  }
}

export default App;
