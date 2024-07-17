import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
import SectionTitle from './../SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
