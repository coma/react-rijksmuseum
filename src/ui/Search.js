import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import { SearchIcon } from './Icons';
import { Form } from './SearchStyle';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { text: props.text };
    this.onWrite = this.onWrite.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onWrite(event) {
    this.setState({ text: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSearch(this.state.text);
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          type="search"
          onChange={this.onWrite}
          value={this.state.text}
          placeholder={this.props.placeholder}
        />
        <Button type="submit">
          <SearchIcon />
        </Button>
      </Form>
    );
  }
}

Search.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

Search.defaultProps = {
  text: '',
  placeholder: 'buscar...',
};

export default Search;
