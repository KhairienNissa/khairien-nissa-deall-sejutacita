import { useState, useEffect } from "react";
import Books from "../components/books";
import Category from "../components/category";
import ContainerSatu from "../components/containerSatu";
import Navbar from "../components/navbar";
import Pagination from "../components/pagination";
import Axios from "axios";

function Home() {
  const pageSize = 7;
  const id = 11;
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

}, [id, page])

const DataSearch = books.filter(item => item.title.toLowerCase().includes(search));

  return (
    <div >
    <Navbar seacrh={search} setSearch={setSearch}/>
    <ContainerSatu/>
    <Category/>

    <div className='container mt-3'>
   
   <div className="mx-sm-5 mx-3 borra-4 d-flex gap-3 justify-content-justify flex-1 flex-wrap mb-5 card-flex">

       {DataSearch.map(item => {
           return (
            <Books item={item}/>
           )
       })}
       
    </div>
  </div>
  <Pagination
    page={page}
    next={() => setPage(page + 1)}
    prev={() => setPage(page - 1)}
    />
    </div>
  );
}

export default Home;
