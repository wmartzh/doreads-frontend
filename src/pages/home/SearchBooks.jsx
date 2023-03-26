import '../../styles/Search.css';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { getBooks } from '../../services/SearchBooks';
import { useEffect, useState } from 'react';
import CircularProgress from '../../components/CircularProgress';
import Pagination from '@mui/material/Pagination';
import Button from '../../components/Button';

const Search = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    const getData = async () => {
      const response = await getBooks(page, perPage);
      setData(response.data);
      setInfo(response.info);
      console.log(response);
    };
    getData();
  }, [page, perPage]);

  const handlePageChange = (_event, value) => {
    setPage(value);
    setPerPage(perPage);
  };

  return (
    <>
      <div className="ContMain">
        <div className="ContHeader">
          <Header TitlePage="Search Books"></Header>
        </div>
        <div className="ContFiltros">
          <div className="ButtonFilter">
            <Button
              fontSize="13px"
              TextInButton="Filtros"
              color="#394C73"
              width="100px"
              height="30px"
              colorHover="#2E3E5C"></Button>
          </div>
          <div className="InputSearch"></div>
        </div>
        <div className="Catalogo">
          {data.length === 0 && <CircularProgress />}
          {data.map((props) => (
            <Card
              key={props.id}
              title={props.title}
              ISBN={props.isbn}
              img={props.picture}
              Quantity={props.year}></Card>
          ))}
        </div>
        <div className="Pagination">
          <Pagination
            color="primary"
            count={info.count}
            page={page}
            perpage={perPage}
            onChange={handlePageChange}
            hidePrevButton
            hideNextButton></Pagination>
        </div>
      </div>
    </>
  );
};

export default Search;
