import { useState } from 'react';
import NavbarCategory from '../components/navbarCategory'
import Books from '../components/books';

function CategoryBooks() {
  const [search, setSearch]= useState('')
  const [books, setbooks] = useState([
    {"id":1,"image":"https://boxshot.com/3d-book-cover/how-to-make-a-3d-book-cover-in-photoshop/sample.jpg", "author":"The Author", "title": "The Best Book Ever"},
    {"id":1,"image":"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/teal-and-orange-fantasy-book-cover-design-template-056106feb952bdfb7bfd16b4f9325c11.jpg?ts=1637018051", "author":"TGraham", "title": "The Nameless"},
    {"id":1,"image":"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457", "author":"Nora Barret", "title": "The King Our Drugs"},
    {"id":1,"image":"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564", "author":"Angelina Aludd", "title": "Memory"},
    {"id":1,"image":"https://s3.amazonaws.com/virginia.webrand.com/virginia/344/zAzI9L50QhW/4d4523c5587dc7210b9034028475262a.jpg?1622029375", "author":"Greg Garza", "title": "Wind Sign"},
    {"id":1,"image":"https://i.pinimg.com/736x/2a/ba/eb/2abaeb8e962d0abb3146c2b001a83a4f.jpg", "author":"The Author", "title": "Moon Phase"},
    {"id":1,"image":"https://bookcover4u.com/pro/Romance-book-cover-design-P1477806507ROB-moon-waiting-hope-book-cover-design-creatspace-kindlemoon.jpg", "author":"The Author", "title": "Home"},
   
])

const DataSearch = books.filter(item => item.title.toLowerCase().includes(search));

  return (
    <div >
    <NavbarCategory  seacrh={search} setSearch={setSearch}/>
    <div className='container mt-3'>
   
   <div className="mx-sm-5 mx-3 borra-4 d-flex gap-3 justify-content-justify flex-1 flex-wrap mb-5 card-flex">

     {DataSearch.map(item => {
         return (
               <Books item={item}/>
         )
     })}
     
  </div>
</div>
    </div>
  );
}

export default CategoryBooks;
