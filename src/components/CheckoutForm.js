import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

import axios from 'axios';

const CheckoutForm = ({ userID, description, price }) => {
  const elements = useElements();
  const stripe = useStripe();
  const feesProtectUser = 1;
  const feesDelivery = 2;

  const [completed, setCompleted] = useState(false);

  const handleCardSubmit = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);

    const stripeResponse = await stripe.createToken(cardElement, {
      name: userID,
    });

    console.log(stripeResponse);
    console.log(userID);
    const stripeToken = stripeResponse.token.id;

    // Une fois le token reçu depuis l'API Stripe
    // Requête vers notre serveur
    // On envoie le token reçu depuis l'API Stripe
    const response = await axios.post(
      'https://vinted-api-jess.herokuapp.com/payment',
      {
        stripeToken,
        name: userID,
        description: description,
        amount: price * 100,
      }
      //
    );
    console.log(response.data);
    // Si la réponse du serveur est favorable, la transaction a eu lieu
    if (response.data.status === 'succeeded') {
      setCompleted(true);
      // navigate('/');
    }
  };
  return (
    <div className="container-publish">
      <div className="container checkoutForm">
        {!completed ? (
          <form onSubmit={handleCardSubmit}>
            <div>
              <h4>Résumé de la commande</h4>
              <div>
                <h5>Commande</h5>
                <span>{price}€</span>
              </div>
              <div>
                <h5>Frais protection acheteurs</h5>
                <span>{feesProtectUser.toFixed(2)}€</span>
              </div>
              <div>
                <h5>Frais de port</h5>
                <span>{feesDelivery.toFixed(2)}€</span>
              </div>
            </div>
            <div>
              <div>
                <h5>Total</h5>
                <span>
                  {(price + feesDelivery + feesProtectUser).toFixed(2)}€
                </span>
              </div>
              <p>
                Il ne vous reste plus qu'un étape pour vous offrir{' '}
                <span>{description}</span>. Vous allez payer{' '}
                <span>
                  {(price + feesDelivery + feesProtectUser).toFixed(2)}
                </span>{' '}
                € (frais de protection et frais de port inclus).
              </p>
            </div>

            <CardElement />
            <div>
              <input type="submit" value="Payer" />
            </div>
          </form>
        ) : (
          <Link to="/">
            <span>Paiement effectué !</span>
            <input type="submit" value="OK" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
