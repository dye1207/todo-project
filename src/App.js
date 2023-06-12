import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TodoList from './components/TodoList';
import TodoModify from './components/TodoModify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid justify-content-start">
          <Link className="navbar-brand" to="/">Home</Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/todo">Todo</Link>
              </li>
            </ul>
        </div>
      </nav>
        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/todo' element={<TodoList />}/>
            <Route path='/todo/modify/:id' element={<TodoModify />} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  );
}

export default App;
