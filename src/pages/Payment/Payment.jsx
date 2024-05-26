import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

// add publishable key
const stripePromise = loadStripe('')
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Please pay to place order!"}
      ></SectionTitle>
      <div className="">
       <Elements stripe={stripePromise}>

       </Elements>
      </div>
    </div>
  );
};

export default Payment;
