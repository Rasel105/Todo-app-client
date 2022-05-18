import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Todo from './Pages/Todo/Todo';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Shared/RequireAuth';

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Todo />
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
