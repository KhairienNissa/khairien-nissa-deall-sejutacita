import React, {useEffect, useState} from "react";
import {useNavigate } from "react-router-dom";
import Axios from "axios";


const Category = () => {
    const navigate = useNavigate()
    const [category, setCategory] = useState([])


     useEffect (() =>{
        Axios.get('https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories')
        .then(result => {
            console.log('data api', result.data)
            const response = result.data;
            setCategory(response)
            
        })
        .catch(err => {
            console.log('error', err)
        })
      

    }, [])

return (
  <div className='container'>
   
    <div > 
        <center>
            <button className="buttonCategory">semua</button>
            {category.map((item)=> {
                return (
            <span> <button key={item.id} onClick={()=> navigate(`/category/${item.id}`)} className="buttonCategory">{item.name}</button></span>)})}
        </center>
    
    </div> 

</div>
    
) }

export default Category;
