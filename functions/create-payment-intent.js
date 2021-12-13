//domain/.netlify/functions/create-payment-intent
require('dotenv').config();

const stripe = require('stripe')(process.env.REACT_APP_STRIP_SECRET_KEY);

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, total_amount, shipping_fee } = JSON.parse(event.body);
    const calculateOrderAmount = () => {
      return total_amount + shipping_fee;
    };
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'usd',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return { statusCode: 500, body: JSON.stringify({ msg: error.message }) };
    }
  }
  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  };
};
