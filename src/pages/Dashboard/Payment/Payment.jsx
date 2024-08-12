import { Elements } from '@stripe/react-stripe-js';
import Title from '../Title/Title';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div>
            <Title heading="Payment" subHeading="Pay first"></Title>
            <div className='w-4/5 rounded-xl  border-green-400 border shadow-2xl mx-auto p-6 mt-10 '>
            <Elements stripe={stripePromise}>
                <CheckOutForm/>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;