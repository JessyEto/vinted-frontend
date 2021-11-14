import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Offer = () => {
  const { id } = useParams();
  const [isOfferLoading, setIsOfferLoading] = useState(true);
  const [dataId, setDataId] = useState({});

  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const response = await axios.get(
          `https://vinted-api-jess.herokuapp.com/offer/${id}`
        );
        setDataId(response.data);
        setIsOfferLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDataId();
  }, [id]);
  console.log(dataId);
  return isOfferLoading ? (
    <div>chargement de l'offre en cours</div>
  ) : (
    <div className="container-offer">
      <div className="container offer">
        <img src={dataId.product_image.secure_url} alt="" />
        <div className="product-details">
          <div className="product-details-top">
            <p className="price-info">{dataId.product_price} €</p>
            <div className="product-info-box">
              <div className="product-info-keys">
                {dataId.product_details.map((elem, index) => {
                  return <p key={index}>{Object.keys(elem)}</p>;
                })}
              </div>
              <div className="product-info-values">
                {dataId.product_details.map((elem, index) => {
                  return <p key={index}>{elem[Object.keys(elem)]}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="product-details-bottom">
            <p>{dataId.product_name}</p>
            <p>{dataId.product_description}</p>
            <p>{dataId.owner.account.username}</p>
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
