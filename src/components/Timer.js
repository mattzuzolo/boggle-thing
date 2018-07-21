import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 15,
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.updateTimer, 1000);
  }

  updateTimer = () => {
    if (this.props.gameStatus.isPlayed) {
      this.setState({
        timer: this.state.timer - 1,
      })
    }

    if (this.state.timer === -1) {
      this.endGame();
    }
  }

  endGame = () => {
    clearInterval(this.interval);
    this.setState({
      timer: "Game Over",
    })
    this.props.endGame()
  }

  render() {
    return (
      <div className="timer">{this.state.timer}</div>
    )
  }
}

export default Timer;
