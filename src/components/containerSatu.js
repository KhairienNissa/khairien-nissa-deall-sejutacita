import Fire from '../assets/fire-icon-png-20.png'
import Buku from '../assets/buku.jpg'

const ContainerSatu = () => (
  <div className="container">
    <div className="row justify-content-center ">
       <div className="col-md-12 mt-2">
            <div className="satu d-flex justify-content-center">
                <img src={Fire} width="30px" height="30px" className="mt-1"/>
                <p className='m-2 fw-bold'>Yuk, Mulai Streak membaca kamu!</p>
            </div>
       </div>
    </div>
    <div className="row justify-content-center ">
       <div className="col-md-12 m-2">
            <div className="d-flex dua justify-content-center">
            <img src={Buku} width="90px" height="120px" className="m-2"/>
         <p className='m-3 fw-bold' style={{fontSize:"14px"}}>Mau membuat kontent yang bisa menginspirasi? ini tips dan trik yang perlu kamu ketahui! <br>
         </br>
         <button className='mt-4 buttonBaca'>Baca Sekarang</button>
         </p>
  
       
            </div>
       </div>
    </div>
    </div>
    
)

export default ContainerSatu;
