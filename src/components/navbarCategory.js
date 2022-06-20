

const NavbarCategory = (props) => (
  <div className="navbar">
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-sm-12 d-flex">
        <input type="input" className="form-control me-2" placeholder='Search..' value={props.seacrh} onChange={(event) => props.setSearch(event.target.value)}/>
          <span>  
          <select class="form-select select">
            <option className="select text-center" selected>A-Z</option>
            <option className="select text-center" value="1">Z-A</option>
          </select>
          </span>



        </div>
      </div>

    </div>
    </div>
    
)

export default NavbarCategory;
