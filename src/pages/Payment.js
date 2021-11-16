import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(
  'pk_test_51JwQPsJRG3FROfqSp4RaWtdZAP0BXLBljiG4vgIr3A87ad0j1exCkHofxKXCPt4CoMRMZlNQXe7Ib92GXKzbHpJ800KTQSVCXz'
);

const Payment = ({ userID, token }) => {
  const location = useLocation();
  const { description, price } = location.state;

  return token ? (
    <Elements stripe={stripePromise}>
      <CheckoutForm userID={userID} description={description} price={price} />
    </Elements>
  ) : (
    <Navigate to="/user/login" />
  );
};

export default Payment;
