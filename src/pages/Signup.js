const Signup = () => {
  return (
    <div className="signup">
      <form>
        <h3>S'inscrire</h3>
        <input type="text" name="username" placeholder="Nom d'utilisateur" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Mot de passe" />
        <div>
          <div>
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
