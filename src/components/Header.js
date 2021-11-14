import logoVinted from '../assets/img/logoVinted.png';
import { Link } from 'react-router-dom';

const Header = ({ setToken, token }) => {
  return (
    <div className="container header">
      <Link to="/">
        <img src={logoVinted} alt="logo" />
      </Link>
      <div>
        {token ? (
          <div>
            <Link to="/">
              <button
                onClick={() => {
                  setToken(null);
                }}
              >
                Se déconnecter
              </button>
            </Link>
          </div>
        ) : (
          <div className="account-connect">
            <Link to="/user/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/user/login">
              <button>Se connecter</button>
            </Link>
          </div>
        )}

        <button>Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
