import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import Header from './componets/Header/Header';
import Register from './componets/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

    </div>
  );
}

export default App;
