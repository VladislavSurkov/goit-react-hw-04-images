import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Header, Form, Input, ButtonSubmit } from './Searchbar.styled';

export  class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSearchQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;

    if (query.trim() === '') {
      return Notify.warning('Please enter something :)');
    }
      this.props.onSubmit(query);
      
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmit} >
          <ButtonSubmit type="submit" >
              <FiSearch size={25} stroke="#3f51b5" />
          </ButtonSubmit>

          <Input
            onChange={this.handleSearchQueryChange}
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };