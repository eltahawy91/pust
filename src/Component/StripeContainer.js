import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51OFcSCI1Aik1och6n0BfVofPBFokKSgBcNAIUHikhX5VhQBOpQty5LgICWcQRlIhnJWQfc1nV9bu4gjlsXJsUcJk00S1WP4P31";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
