import React from 'react';
import { Container } from 'components/ui';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    name: '',
  };

  handleSearch = event => {
    const name = event.target.value;
    console.log(event.target.value);
    this.setState({ name });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('clicking');
    console.log(this.props.handleSubmit);
    this.props.handleSubmit(this.state.name, this.resetForm);
  };

  resetForm = () => {
    console.log('reset');
    this.setState({ name: '' });
  };

  render() {
    return (
      <Container blueBackground>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearch}
            value={this.state.name}
          />
        </form>
      </Container>
    );
  }
}

export default Searchbar;
