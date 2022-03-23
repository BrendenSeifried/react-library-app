import BookList from './views/Books/BookList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';
import Main from './views/Main/Main';
import Header from './components/Header';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
        <Header />
        <Switch>
          <Route exact path = '/books'>
            <BookList />
          </Route>

          <Route exact path = '/books/:id'>
            <BookDetail />
          </Route>

          <Route exact path = '/'>
            <Main/>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
