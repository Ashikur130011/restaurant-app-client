import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
    const [error, setError] = useState('')
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState(' ')
    const {user} = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const [cart, refetch] = useCart()
    const totalPrice = cart.reduce( (total, item) => total + item.price , 0)
    const navigate = useNavigate()

    useEffect( () => {
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent', {price: totalPrice })
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
        }
    },[axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('[error]', error)
            setError(error.message)
        }
        else{
            console.log('[PaymentMethod]', paymentMethod)
            setError('')
            
        }
        //confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment Intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                setTransactionId(paymentIntent.id)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thanks for your payment",
                    showConfirmButton: false,
                    timer: 1500
                  });
                // now save the payment history in database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    transactionId: paymentIntent.id,
                    status: 'pending',
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log(res)
                refetch()
                navigate('/dashboard/paymentHistory')
            }
        }
    }
    return (
        <div>
            <h1 className='text-2xl font-bold'>Total Price: ${totalPrice}</h1>
             <form className='mt-8' onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-success btn-sm text-white my-4' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-red-500 font-bold my-4'>{error}</p>
      {
        transactionId ? <p className='text-green-500 font-bold my-4'> Your Transaction id: {transactionId}</p>
        : ''
      }
    </form>
        </div>
    );
};

export default CheckOutForm;