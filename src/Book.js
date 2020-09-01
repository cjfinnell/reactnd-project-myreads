import React from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${props.coverURL}")`,
          }}
        />
        <BookShelfChanger />
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors.join(", ")}</div>
    </div>
  );
}

Book.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
