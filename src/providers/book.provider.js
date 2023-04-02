import React, { useMemo, useState, useEffect } from 'react';

export const BookContext = React.createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [badgeCount, setBadgeCount] = useState(() => {
    const count = localStorage.getItem('badgeCount');
    return count ? parseInt(count) : 0;
  });

  useEffect(() => {
    localStorage.setItem('badgeCount', badgeCount);
  }, [badgeCount]);

  const addBook = (BookProps) => {
    if (BookProps && BookProps.title && BookProps.author) {
      setBadgeCount(badgeCount + 1);
      setBooks([...books, BookProps]);
      console.log(books);
    }
  };

  const removeBook = () => {
    setBadgeCount(badgeCount - 1 < 0 ? 0 : badgeCount - 1);
    setBooks(books.slice(0, -1));
    console.log(books);
  };

  const values = useMemo(() => ({
    badgeCount,
    setBadgeCount,
    removeBook,
    addBook
  }));

  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};
