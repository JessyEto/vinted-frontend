import { useNavigate } from 'react-router';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="container">
        <div>
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button
            onClick={() => {
              navigate('/offer/publish');
            }}
          >
            Commencer à vendre
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
