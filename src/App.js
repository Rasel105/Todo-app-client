import './App.css';
import { Route, Routes } from 'react-router-dom';
import TodoUI from './Pages/Todo/TodoUI';
import Navbar from './Pages/Navbar/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<TodoUI />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
