import Bendera from '../assets/Flag-Indonesia.jpg'

const Navbar = (props) => {

  function changeTheme () {
    let elemet = document.body
    elemet.classList.toggle("light-theme")
  }
  

  return(
  <div className="navbar">
    <div className="container justify-content-center">
      <div className="row">
        <div className="col-sm-12 d-flex">
        <input type="input" className="form-control me-2" placeholder='Search..' value={props.seacrh} onChange={(event) => props.setSearch(event.target.value)}/>
        <i className='bx bxs-bulb fs-4 change-theme hello cursor-pointer mt-2' id="theme-button" style={{ width: "30px"}} onClick={changeTheme}></i>
        {/* <i class='bx bx-book-alt ' style={{color:'#adb35e', width : '50px'}}  ></i> */}


        </div>
      </div>

    </div>
    </div>
    
)}

export default Navbar;
