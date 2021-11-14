import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components importations
import Header from './components/Header';

// Page importation
import Home from './pages/Home';
import Offer from './pages/Offer';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="/user/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
