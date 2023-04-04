import React, { useMemo, useState, useEffect } from 'react';

export const BookContext = React.createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [alert, setAlert] = useState();
  const [severity, setSeverity] = useState();
  const [badgeCount, setBadgeCount] = useState(() => {
    const count = localStorage.getItem('badgeCount');
    return count ? parseInt(count) : 0;
  });

  useEffect(() => {
    localStorage.setItem('badgeCount', badgeCount);
  }, [badgeCount]);

  useEffect(() => {
    if (alert) {
      if (alert === 'Book added') {
        setSeverity('success');
      } else if (alert === 'Book removed') {
        setSeverity('error');
      } else if (alert === 'Book already exists' || alert === 'Book not found') {
        setSeverity('warning');
      }
    }
  }, [alert, severity]);

  useEffect(() => {
    const saveBooksToLocalStorage = (books) => {
      localStorage.setItem('books', JSON.stringify(books));
    };

    saveBooksToLocalStorage(books);
  }, [books]);

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  const addBook = (BookProps) => {
    console.log(BookProps);
    if (BookProps.title && BookProps.author && BookProps.year && BookProps.id !== undefined) {
      const existingBook = books.find((book) => book.id === BookProps.id);
      if (!existingBook) {
        setBadgeCount(books.length + 1);
        setBooks([...books, BookProps]);
        console.log(books);
        setAlert('Book added');
      } else {
        setAlert('Book already exists');
        console.log(alert);
        console.log(books);
      }
    }
  };

  const removeBook = (BookProps) => {
    const RemoveBook = books.findIndex((book) => book.id === BookProps.id);
    if (RemoveBook !== -1) {
      setBadgeCount(books.length - 1 > 0 ? books.length - 1 : 0);
      setBooks([...books.slice(0, RemoveBook), ...books.slice(RemoveBook + 1)]);
      console.log(books);
      setAlert('Book removed');
    } else {
      setAlert('Book not found');
      console.log(alert);
    }
  };

  const values = useMemo(() => ({
    badgeCount,
    setBadgeCount,
    removeBook,
    addBook,
    setAlert,
    alert,
    severity
  }));

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};
