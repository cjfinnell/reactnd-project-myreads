import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function Bookshelf(props) {
    return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                  <Book />
                </li>
              </ol>
            </div>
          </div>
    )
}

Bookshelf.propTypes = {
    name: PropTypes.string.required,
};

export default Bookshelf;
