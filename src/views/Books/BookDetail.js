import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';


function BookDetail() {
  const params = useParams();
  const id = params.id;
  const [book, setBook] = useState(null);



  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data));
  }, [id]);

  if (!book) return <h3>Loading book...</h3>;

  return (
    <>
      <NavLink exact to = '/books'>
        <h3>Back to Book List</h3>
      </NavLink>
      <Book book={book} showDetail/>;
    </>
  );
}

export default BookDetail;
