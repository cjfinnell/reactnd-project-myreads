import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

export function objectIsBook(meta) {
  return meta.id && meta.title;
}

function getBookCoverStyle(meta) {
  let style = {
    width: 128,
    height: 193,
  };
  if (meta.imageLinks && meta.imageLinks.thumbnail) {
    style.backgroundImage = `url("${meta.imageLinks.thumbnail}")`;
  } else {
    style.backgroundColor = "grey";
  }
  return style;
}

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={getBookCoverStyle(props.meta)} />
        <BookShelfChanger
          changeShelf={(shelf) => props.changeShelf(props.meta, shelf)}
          currentShelf={props.getCurrentShelf(props.meta.id)}
        />
      </div>
      <div className="book-title">{props.meta.title}</div>
      {props.meta.authors ? (
        <div className="book-authors">{props.meta.authors.join(", ")}</div>
      ) : (
        ""
      )}
    </div>
  );
}

Book.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  getCurrentShelf: PropTypes.func.isRequired,
  meta: PropTypes.object.isRequired,
};

export default Book;
