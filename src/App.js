import './App.css';
import Home from './Components/Pages/Home';
import Store from './Components/Pages/Store';
import Contact from './Components/Pages/Contact';
import Cart from './Components/Pages/Cart';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <Header />
          <div className='content'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/Store' element={<Store />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Cart' element={<Cart />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
