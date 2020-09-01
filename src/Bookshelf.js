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
                authors={b.authors}
                coverURL={b.imageLinks.thumbnail}
                title={b.title}
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
  name: PropTypes.string.isRequired,
};

export default Bookshelf;
