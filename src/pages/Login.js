import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://vinted-api-jess.herokuapp.com/user/login',
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token, response.data._id);
        navigate('/');
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="signup">
      <form onSubmit={handleLogin}>
        <h3>Se connecter</h3>
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input className="seconnecter" type="submit" value="Se connecter" />
        <Link to="/user/signup">
          <p>Pas encore de compte ? Inscris-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
