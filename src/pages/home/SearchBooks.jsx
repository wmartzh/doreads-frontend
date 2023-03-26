import '../../styles/Search.css';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { getBooks } from '../../services/SearchBooks';
import { useEffect, useState } from 'react';
import CircularProgress from '../../components/CircularProgress';
import Pagination from '@mui/material/Pagination';
import SearchInput from '../../components/Search';
import Filter from '../../components/Filter';

const Search = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState('');
  // const [category, setCategory] = useState('');
  // const [author, setAuthor] = useState('');
  // const [year, setYear] = useState('');

  const options = ['asc', 'desc'];

  useEffect(() => {
    const getData = async () => {
      const response = await getBooks(page, perPage, search);
      setData(response.data);
      setInfo(response.info);
      console.log(response);
    };
    getData();
  }, [page, perPage, search]);

  const handlePageChange = (_event, value) => {
    setPage(value);
    setPerPage(perPage);
  };

  return (
    <>
      <div className="ContMain">
        <div className="ContHeaderSearch">
          <Header TitlePage="Search Books"></Header>
        </div>
        <div className="ContFiltros">
          <div className="ButtonFilter">
            <Filter options={options} height="25px" label="Filter"></Filter>
          </div>
          <div className="SearchInput">
            <SearchInput
              height="10px"
              onChange={(e) => {
                console.log(e.target.value);
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search"
              type="text"></SearchInput>
          </div>
        </div>
        <div className="Catalogo">
          {data.length === 0 && <CircularProgress></CircularProgress>}
          {data.map((props) => (
            <Card key={props.id} title={props.title} ISBN={props.isbn} img={props.picture}></Card>
          ))}
        </div>
        <div className="Pagination">
          <div className="Center">
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
      </div>
    </>
  );
};

export default Search;
