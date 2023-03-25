import '../../styles/Search.css';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { getBooks } from '../../services/SearchBooks';
import { useEffect, useState } from 'react';

const Search = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBooks().then((response) => {
      setData(response.data);
      console.log(response.data);
      console.log(response.info);
    });
  }, []);

  return (
    <>
      <div className="ContMain">
        <div className="ContHeader">
          <Header TitlePage="Search Books"></Header>
        </div>
        <div className="Catalogo">
          {data.map((props) => (
            <Card
              key={props}
              title={props.title}
              ISBN={props.isbn}
              img={props.picture}
              Quantity={props.year}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
