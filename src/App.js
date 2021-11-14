import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';

// Components importations
import Header from './components/Header';

// Page importation
import Home from './pages/Home';
import Offer from './pages/Offer';
import Signup from './pages/Signup';

const App = () => {
  const [token, setToken] = useState(null);

  const setUser = (token) => {
    if (token) {
      Cookies.set('token', token, { expires: 1 });
    } else {
      Cookies.remove('token');
    }
    setToken(token);
  };

  return (
    <Router>
      <div>
        <Header token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="/user/signup" element={<Signup setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
