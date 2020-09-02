import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Bookshelf from "./Bookshelf";

const shelves = [
  { name: "Currently Reading", category: "currentlyReading" },
  { name: "Want to Read", category: "wantToRead" },
  { name: "Read", category: "read" },
];

function ListBooks(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf, i) => (
            <Bookshelf
              books={props.books.filter((b) => b.shelf === shelf.category)}
              changeShelf={props.changeShelf}
              getCurrentShelf={props.getCurrentShelf}
              key={i}
              name={shelf.name}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button> Add a book</button>
        </Link>
      </div>
    </div>
  );
}

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
  getCurrentShelf: PropTypes.func.isRequired,
};

export default ListBooks;
