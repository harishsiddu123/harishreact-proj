
import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Upadate from './components/Upadate';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/book' element={<Book></Book>}></Route>
        <Route path='/edit/:id' element={<Upadate></Upadate>}></Route> 

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
