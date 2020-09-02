import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function Bookshelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((b) => (
            <li key={b.id}>
              <Book
                changeShelf={props.changeShelf}
                getCurrentShelf={props.getCurrentShelf}
                meta={b}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
  getCurrentShelf: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Bookshelf;
