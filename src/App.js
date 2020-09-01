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

  componentDidMount() {
    BooksAPI.getAll().then((results) => this.setState({ books: results }));
  }

  render() {
    const { books } = this.state;

    return (
      <BrowserRouter>
        <div className="app">
          <Route path="/search" component={SearchBooks} />
          <Route path="/" exact render={() => (<ListBooks books={books} />)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
