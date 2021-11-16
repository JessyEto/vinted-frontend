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
import Payment from './pages/Payment';

const App = () => {
  const [token, setToken] = useState(Cookies.get('TokenUser') || null);
  const [userID, setUserID] = useState(Cookies.get('userID') || null);

  const setUser = (token, userID) => {
    if (token && userID) {
      Cookies.set('TokenUser', token, { expires: 10 });
      Cookies.set('userID', userID, { expires: 10 });
    } else {
      Cookies.remove('TokenUser');
      Cookies.remove('userID', userID, { expires: 10 });
    }
    setToken(token);
    setUserID(userID);
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
          <Route
            path="/payment"
            element={<Payment userID={userID} token={token} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
