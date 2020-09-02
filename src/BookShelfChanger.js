import React from "react";
import PropTypes from "prop-types";

function BookShelfChanger(props) {
  return (
    <div className="book-shelf-changer">
      <select value={props.currentShelf} onChange={(e) => props.changeShelf(e.target.value)}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

BookShelfChanger.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  currentShelf: PropTypes.string.isRequired,
};

export default BookShelfChanger;
