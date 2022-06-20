import React, {useState} from "react";
import Buku from '../assets/buku.jpg'

const Books = ({item}) => {
   
return (
  
        <div className="home-card d-flex mt-2">
            <div className='card p-2'>
                <img src={item.image} alt="thumbnail" height={180} className="object-fit img-card"/>
                    <div className="py-1">
                    <p className='author'>{item.author}</p>
                    <div className='judul'>{item.title}</div>
                    </div>
           </div>
        </div>  
    
    
) }

export default Books;
