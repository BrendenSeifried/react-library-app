import BookList from './views/Books/BookList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';
import './App.css';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route exact path = '/booklist'>
            <BookList />
          </Route>
          <Route exact path = '/bookdetail'>
            <BookDetail />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
