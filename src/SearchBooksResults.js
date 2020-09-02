import React from "react";
import PropTypes from "prop-types";
import Book, { objectIsBook } from "./Book";

function SearchBooksResults(props) {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.books && props.books.length
          ? props.books.filter((b) => objectIsBook(b)).map((b) => (
              <li key={b.id}>
                {<Book changeShelf={props.changeShelf} meta={b} />}
              </li>
            ))
          : "no results"}
      </ol>
    </div>
  );
}

SearchBooksResults.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default SearchBooksResults;
