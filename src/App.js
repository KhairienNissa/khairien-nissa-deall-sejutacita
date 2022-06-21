
import Home from "./pages/home";
import CategoryBooks from "./pages/categoryBooks";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
   
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/category/:id' element={<CategoryBooks/>} />
      </Routes>
   
    
   
  );
}

export default App;
