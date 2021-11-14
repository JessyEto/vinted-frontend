import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleChangeUsername = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://vinted-api-jess.herokuapp.com/user/signup',
        {
          email: email,
          username: username,
          phone: '0707070707',
          password: password,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        navigate('/');
      }
    } catch (error) {
      alert(error.response);
    }
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h3>S'inscrire</h3>
        <input
          onChange={handleChangeUsername}
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          value={username}
        />
        <input
          onChange={handleChangeEmail}
          type="text"
          name="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={handleChangePassword}
          type="text"
          name="password"
          placeholder="Mot de passe"
          value={password}
        />
        <div>
          <div className="checkbox">
            <input type="checkbox" name="newsletter" />
            <label htmlFor="newslater">S'inscrire à notre newsletter</label>
          </div>

          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <input type="submit" value="S'inscrire" />
        </div>
        <p>tu as déjà un compte ? connecte toi !</p>
      </form>
    </div>
  );
};

export default Signup;
