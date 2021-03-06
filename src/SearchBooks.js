import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";
import SearchBooksBar from "./SearchBooksBar";
import SearchBooksResults from "./SearchBooksResults";

class SearchBooks extends Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    getCurrentShelf: PropTypes.func.isRequired,
  };

  state = {
    searchResults: [],
  };

  runQuery = (query) => {
    BooksAPI.search(query).then((results) => this.updateSearchResults(results));
  };

  updateSearchResults = (results) => {
    this.setState({ searchResults: results });
  };

  render() {
    const { searchResults } = this.state;

    return (
      <div className="search-books">
        <SearchBooksBar runQuery={this.runQuery} />
        <SearchBooksResults
          books={Array.isArray(searchResults) ? searchResults : []}
          changeShelf={this.props.changeShelf}
          getCurrentShelf={this.props.getCurrentShelf}
        />
      </div>
    );
  }
}

export default SearchBooks;
