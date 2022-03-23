import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';

function BookDetail() {
  // const id = 1; // TODO: Use id from route
  const { id } = useParams();
  console.log(id);
  const [book, setBook] = useState(null);



  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data));
  }, [id]);

  
  if (!book) return <h3>Loading book...</h3>;

  return <Book book={book} showDetail />;
}

export default BookDetail;
