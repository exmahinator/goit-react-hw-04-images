import React, { useState } from 'react';
import {
  Container,
  SearchButton,
  SearchInput,
  StyledContainer,
} from 'components/ui';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Searchbar = ({ resultSubmit }) => {
  const [name, setName] = useState('');

  const handleSearch = event => {
    const { value } = event.target;
    setName(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!name) {
      toast.warn('Please, enter your search request!');
      return;
    }

    const resetForm = () => {
      setName('');
    };

    resultSubmit(name, resetForm);
  };

  return (
    <Container blueBackground fixed>
      <form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSearch}
          value={name}
        />
      </form>
      <StyledContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  resultSubmit: PropTypes.func.isRequired,
};

// ----------------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { Container, SearchButton, SearchInput } from 'components/ui';
// import { Component } from 'react';
// import PropTypes from 'prop-types';

// class Searchbar extends Component {
//   state = {
//     name: '',
//   };

//   handleSearch = event => {
//     const name = event.target.value;
//     this.setState({ name });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     if (!this.state.name) {
//       alert('Please enter your search request!');
//       return;
//     }
//     this.props.handleSubmit(this.state.name, this.resetForm);
//   };

//   resetForm = () => {
//     this.setState({ name: '' });
//   };

//   render() {
//     return (
//       <Container blueBackground fixed>
//         <form onSubmit={this.handleSubmit}>
//           <SearchButton type="submit">
//             <span>Search</span>
//           </SearchButton>

//           <SearchInput
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleSearch}
//             value={this.state.name}
//           />
//         </form>
//       </Container>
//     );
//   }
// }

// export default Searchbar;

// Searchbar.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };
