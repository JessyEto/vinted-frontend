import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://vinted-api-jess.herokuapp.com/offers'
      );

      // https://vinted-api-jess.herokuapp.com/offers

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div>
      <Hero />
      <div className="container img-grid">
        {data.offers.map((elem) => {
          return (
            <Link
              key={elem._id}
              to={`/offers/${elem._id}`}
              className="img-link"
            >
              <p>{elem.owner.account.username}</p>
              <img
                className="img-offers"
                src={elem.product_image.secure_url}
                alt=""
              />
              <p>{elem.product_price} €</p>
              <p>{elem.product_details[1].TAILLE}</p>
              <p>{elem.product_details[0].MARQUE}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
