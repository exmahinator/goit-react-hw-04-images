import React from 'react';
import { Container } from 'components/ui';

function Searchbar() {
  return (
    <Container blueBackground>
      <form>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </Container>
  );
}

export default Searchbar;
