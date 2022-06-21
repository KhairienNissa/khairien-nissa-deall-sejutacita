import { useState, useEffect } from 'react';
import NavbarCategory from '../components/navbarCategory'
import Books from '../components/books';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Pagination from '../components/pagination';

function CategoryBooks() {
  const { id } = useParams()
  const pageSize = 7;
  const [sort, setSort]= useState('asc')
   const [page, setPage]= useState(1)
  const [search, setSearch]= useState('')
  const [books, setbooks] = useState([])

useEffect (() =>{
  Axios.get(`https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${id}&page=${page}&size=${pageSize}`)
  .then(result => {
      const response = result.data;
      console.log(response);
      setbooks(response) 
  })
  .catch(err => {
      console.log('error', err)
  })

}, [id, page, sort])

const DataSearch = books.filter(item => item.title.toLowerCase().includes(search));
const DataSort = sort === 'asc' ? DataSearch.sort((a, b) => (a.title > b.title) ? 1 : -1) : DataSearch.sort((a, b) => (a.title > b.title) ? -1 : 1);

  return (
    <div>
       <NavbarCategory  seacrh={search} setSearch={setSearch} sort={sort} setSort={setSort}/>
          <div className='container mt-3'>
            {DataSort?.length > 0 ? (
            <div className="mx-sm-5 mx-3 borra-4 d-flex gap-3 justify-content-justify flex-1 flex-wrap mb-5 card-flex">
                  {DataSort.map(item => {
                      return (
                        <Books item={item} key={item.id}/>
                      )
                  })}
            </div>
                ) : (
                      <center> <h1>Tidak ada buku yang ditemukan</h1></center>
                )}       
          </div>
              <Pagination page={page} next={() => setPage(page + 1)}  prev={() => setPage(page - 1)} />      
    </div>
  );
}

export default CategoryBooks;
