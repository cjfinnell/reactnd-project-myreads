import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

export function objectIsBook(meta) {
  return (
    meta.id &&
    meta.title &&
    meta.authors &&
    meta.imageLinks &&
    meta.imageLinks.thumbnail
  );
}

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${props.meta.imageLinks.thumbnail}")`,
          }}
        />
        <BookShelfChanger
          changeShelf={(shelf) => props.changeShelf(props.meta, shelf)}
          currentShelf={props.getCurrentShelf(props.meta.id)}
        />
      </div>
      <div className="book-title">{props.meta.title}</div>
      <div className="book-authors">{props.meta.authors.join(", ")}</div>
    </div>
  );
}

Book.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  getCurrentShelf: PropTypes.func.isRequired,
  meta: PropTypes.object.isRequired,
};

export default Book;
