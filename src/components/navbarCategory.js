import { useNavigate } from "react-router-dom";

const NavbarCategory = (props) => {

  const navigate = useNavigate()
  return(
  <div className="navbar">
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-sm-12 d-flex">
         <span><a onClick={()=>navigate('/')}><i className='bx bxs-home-alt-2 my-2' style={{color:"white", width:"40px", fontSize:'30px'}}></i></a></span><input type="input" className="form-control me-2" placeholder='Search..' value={props.seacrh} onChange={(event) => props.setSearch(event.target.value)}/>
          <span>  
          <select className="form-select select mt-1" onChange={(e) => props.setSort(e.target.value)} value={props.sort} class="form-select select">
            <option value="asc" className="select text-center" selected>A-Z</option>
            <option value="desc" className="select text-center">Z-A</option>
          </select>
          </span>
         
        </div>
      </div>

    </div>
    </div>
    
)}

export default NavbarCategory;
