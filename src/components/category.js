import React, {useEffect, useState} from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";


const Category = () => {
    const navigate = useNavigate()
    const [category, setCategory] = useState([])


    const getCategory = async () => {
        try {
          const { data } = await axios.get(
            "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories"
          );
          console.log(data);
        //   setCategory(data.results);
        } catch (error) {
          console.log(error);
        }
      };

     useEffect (() =>{
        // Axios.get('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories')
        // .then(result => {
        //     console.log('data api', result)

        // })
        // .catch(err => {
        //     console.log('error', err)
        // })
        getCategory()

    }, [])

return (
  <div className='container'>
    {/* <div className="row mt-2">
       <h4>Eksplor Kategori</h4> 
    </div> */}
    <div > 
            <button className="buttonCategory">semua</button>
            {category.map((item, index)=> {
                return (
            <span> <button onClick={()=> navigate('/category')} className="buttonCategory">{item.name}</button></span>)})}

    </div>

</div>
    
) }

export default Category;
