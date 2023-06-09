import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Users from './pages/Users';
import Header from './components/Header';


import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Header></Header>
      </div>

      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='about' element={<About />}> </Route>
        <Route path='users' element={<Users />}> </Route>
        <Route path='details/:userId' element={<Details />}> </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
