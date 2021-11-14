import logoVinted from '../assets/img/logoVinted.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container header">
      <Link to="/">
        <img src={logoVinted} alt="logo" />
      </Link>
      <div>
        <div className="account-connect">
          <Link to="/user/signup">
            <button>S'inscrire</button>
          </Link>
          <button>Se connecter</button>
        </div>
        <button>Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;