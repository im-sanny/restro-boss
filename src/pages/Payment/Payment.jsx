import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please pay to place order!"}
      ></SectionTitle>
      <div className="">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
