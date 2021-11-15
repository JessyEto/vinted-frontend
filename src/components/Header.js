import logoVinted from '../assets/img/logoVinted.png';
import { Link } from 'react-router-dom';

const Header = ({ setUser, token }) => {
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
                className="sedeconnecter"
                onClick={() => {
                  setUser();
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
        <Link to="/offer/publish">
          <button className="sellarticles">Vends tes articles</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
