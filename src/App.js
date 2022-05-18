import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Todo from './Pages/Todo/Todo';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Todo />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
