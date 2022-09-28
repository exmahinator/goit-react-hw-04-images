import React from 'react';
import { Container, SearchButton, SearchInput } from 'components/ui';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    name: '',
  };

  handleSearch = event => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.name) {
      alert('Please enter your search request!');
      return;
    }
    this.props.handleSubmit(this.state.name, this.resetForm);
  };

  resetForm = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <Container blueBackground>
        <form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <span>Search</span>
          </SearchButton>

          <SearchInput
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
