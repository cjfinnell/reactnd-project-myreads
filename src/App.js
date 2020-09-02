import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((response) => console.log("update resp", response))
      .then(() => this.refreshShelf());
  };

  refreshShelf = () => {
    BooksAPI.getAll().then((results) => this.setState({ books: results }));
  };

  componentDidMount() {
    this.refreshShelf();
  }

  render() {
    const { books } = this.state;

    return (
      <BrowserRouter>
        <div className="app">
          <Route
            path="/search"
            render={() => (
              <SearchBooks changeShelf={this.changeShelf} />
            )}
          />
          <Route
            path="/"
            exact
            render={() => (
              <ListBooks books={books} changeShelf={this.changeShelf} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
