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
import Login from './pages/Login';
import Publish from './pages/Publish';

const App = () => {
  const [token, setToken] = useState(null);

  const setUser = (token) => {
    if (token) {
      Cookies.set('TokenUser', token, { expires: 10 });
    } else {
      Cookies.remove('TokenUser');
    }
    setToken(token);
  };

  return (
    <Router>
      <div>
        <Header token={token} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="/user/signup" element={<Signup setUser={setUser} />} />
          <Route path="/user/login" element={<Login setUser={setUser} />} />
          <Route path="/offer/publish" element={<Publish token={token} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
