import Bendera from '../assets/Flag-Indonesia.jpg'

const Navbar = (props) => (
  <div className="navbar">
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-sm-12 d-flex">
        <input type="input" className="form-control me-2" placeholder='Search..' value={props.seacrh} onChange={(event) => props.setSearch(event.target.value)}/>
        <img src={Bendera} width="30px" height="30px" className='rounded-circle mt-1'/>
        {/* <i class='bx bx-book-alt ' style={{color:'#adb35e', width : '50px'}}  ></i> */}


        </div>
      </div>

    </div>
    </div>
    
)

export default Navbar;
