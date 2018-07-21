import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => console.log(this.state))
  }

  render() {
    return (
      <input
        type="text"
        name="searchInput"
        placeholder="...Type a word..."
        value={this.state.searchInput}
        onChange={this.handleChange}
      />
    )
  }
}

export default SearchInput;
